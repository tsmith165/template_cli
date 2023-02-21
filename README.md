# NodeJS Template CLI
NodeJS Template CLI for generating NextJS site templates

Based on template-cli from Leo Roese
Original github: https://github.com/leoroese/template-cli
Original video: https://www.youtube.com/watch?v=xYko2bHNgVA&t=442s

Added in options to the Inquirer for "project_class" and "project_description", and combined that with the existing "project_name" in order to automate the project setup of these constants.  These constants are then used to modify files: "/package.json", "/.vscode/settings.json", "/lib/constants.js".  The "/lib/constants.js" file can also be imported into all pages / components, and used throughout the project to avoid having to redefine global constants.