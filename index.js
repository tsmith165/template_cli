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

  // edit /package.json
  fs.readFile(`${project_path}/package.json`, 'utf-8', function(err, data){
    if (err) throw err;

    var new_out = '';
    var split_data = data.toString().split("\n")
    for (var i = 0; i < split_data.length; i++) {
      let line = split_data[i];
      if (line.includes('"name":')) { 
        let modified_line = line.split(': "')[0] + `: "${project_class}",`
        new_out += modified_line + '\n'
        continue
      }
      new_out += line + '\n'
    }

    console.log(new_out)

    fs.writeFile(`${project_path}/package.json`, new_out, 'utf-8', function (err) {
      if (err) throw err;
      console.log('Update package.json complete');
    });
  });

  // edit /.vscode/settings.json
  fs.readFile(`${project_path}/.vscode/settings.json`, 'utf-8', function(err, data){
    if (err) throw err;

    var new_out = '';
    var split_data = data.toString().split("\n")
    for (var i = 0; i < split_data.length; i++) {
      let line = split_data[i];
      // "window.title": "Generic Navbar Template",
      if (line.includes('"window.title":')) { 
        let modified_line = line.split(': "')[0] + `: "${project_name}",`
        new_out += modified_line + '\n'
        continue
      }
      new_out += line + '\n'
    }

    console.log(new_out)

    fs.writeFile(`${project_path}/.vscode/settings.json`, new_out, 'utf-8', function (err) {
      if (err) throw err;
      console.log('Update /.vscode/settings.jsonn complete');
    });
  });

  // edit /lib/constants.js
  fs.readFile(`${project_path}/lib/constants.js`, 'utf-8', function(err, data){
    if (err) throw err;

    var new_out = '';
    var split_data = data.toString().split("\n")
    for (var i = 0; i < split_data.length; i++) {
      let line = split_data[i];

      /*
      SITE_FULL_NAME: "Generic Navbar Auth Template",
      SITE_CLASS_NAME: "generic_navbar_auth_template",
      SITE_DESCRIPTION: "Generic Navbar Auth Template",
      SITE_URL: "",
      AWS_BUCKET_URL: "",
      CONTACT_FULL_NAME: "First Last",
      CONTACT_EMAIL: "example@gmail.com"
      */

      if (line.includes('SITE_FULL_NAME: "')) { 
        let modified_line = line.split(': "')[0] + `: "${project_name}",`
        new_out += modified_line + '\n'
        continue
      } else if (line.includes('SITE_CLASS_NAME: "')) { 
        let modified_line = line.split(': "')[0] + `: "${project_class}",`
        new_out += modified_line + '\n'
        continue
      } else if (line.includes('SITE_DESCRIPTION: "')) { 
        let modified_line = line.split(': "')[0] + `: "${project_description}",`
        new_out += modified_line + '\n'
        continue
      }
      new_out += line + '\n'
    }

    console.log(new_out)

    fs.writeFile(`${project_path}/lib/constants.js`, new_out, 'utf-8', function (err) {
      if (err) throw err;
      console.log('Update /lib/constants.js complete');
    });
  });
});

