#!/usr/bin/env node

import inquirer from 'inquirer';
import * as fs from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import createDirectoryContents from './createDirectoryContents.js';
const __dirname = dirname(fileURLToPath(import.meta.url));
const CURR_DIR = process.cwd();

const CHOICES = fs.readdirSync(`${__dirname}/templates`);

const QUESTIONS = [
  {
    name: 'project-choice',
    type: 'list',
    message: 'What project template would you like to generate?',
    choices: CHOICES,
  },
  {
    name: 'project-name',
    type: 'input',
    message: 'Project name:',
    validate: function (input) {
      if (/^([A-Za-z\-\\_\d ])+$/.test(input)) return true;
      else return 'Project name may only include letters, numbers, underscores, hashes and spaces';
    },
  },
  {
    name: 'project-class',
    type: 'input',
    message: 'Project class:',
    validate: function (input) {
      if (/^([a-z\\_\d])+$/.test(input)) return true;
      else return 'Project class must be lowercase with underscores instead of spaces';
    },
  },
  {
    name: 'project-description',
    type: 'input',
    message: 'Project description:'
  }
];

inquirer.prompt(QUESTIONS).then(answers => {
    const project_choice = answers['project-choice'];
    const project_name = answers['project-name'];
    const project_class = answers['project-class'];
    const project_description = answers['project-description'];

    const template_path = `${__dirname}/templates/${project_choice}`
    const project_path = `${CURR_DIR}/${project_class}`

    console.log(`Template Path: ${template_path}`)
    console.log(`Creating project at path: ${project_path}`)

    fs.mkdirSync(project_path);

    createDirectoryContents(template_path, project_class);

    modify_file(`${project_path}/package.json`, [
        ['"name":', ': "', project_class]
    ])

    // edit /.vscode/settings.json
    modify_file(`${project_path}/.vscode/settings.json`, [
        ['"window.title":', ': "', project_name]
    ])

    // edit /lib/constants.js
    modify_file(`${project_path}/lib/constants.js`, [
        ['SITE_FULL_NAME: "', ': "', project_name],
        ['SITE_CLASS_NAME: "', ': "', project_class],
        ['SITE_DESCRIPTION: "', ': "', project_description],
    ])
});
    

function modify_file(file_path, modification_array) {
    console.log(`Modifying file: ${file_path}`)
    fs.readFile(file_path, 'utf-8', function(err, data){
        if (err) throw err;

        var new_out = '';
        var split_data = data.toString().split("\n")
        for (var i = 0; i < split_data.length; i++) {
            let line = split_data[i];
            
            var found = false
            for (var x = 0; x < modification_array.length; x++) {
                let search_string = modification_array[x][0]
                let split_string = modification_array[x][1]
                let modification_string = modification_array[x][2]
                if (line.includes(search_string)) { 
                    let modified_line = line.split(split_string)[0] + `${split_string}${modification_string}",`
                    new_out += modified_line + '\n'
                    found = true
                    continue
                }
            }
            if (!found) new_out += line + '\n'
        }

        fs.writeFile(file_path, new_out, 'utf-8', function (err) {
            if (err) throw err;
            console.log(`Update ${file_path} complete`);
        });
    });

}
