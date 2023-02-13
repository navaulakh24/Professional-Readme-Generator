// Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const util = require('util');

// Created an array of questions for user input
const questions = [{
    type: 'input',
    name: 'title',
    message: 'Please write the title of your repository.(Required)',
},
{
    type: 'input',
    name: 'description',
    message: 'Provide a description of the project. (Required)',
},
{
    type: 'input',
    name: 'table of contents',
    message: 'What would you like to write in your table of contents? (Required)',
},
{
    type: 'input',
    name: 'installation',
    message: 'How do you install your project? (Required)',
},
{
    type: 'input',
    name: 'usage',
    message: 'Please provide instructions for using your application?',
},
{
    type: 'checkbox',
    name: 'license',
    message: 'Choose a license.',
    choices: ['GPLv3.0','MIT', 'Apache-2.0', 'BSD-3', 'None'],
},
{
    type: 'input',
    name: 'contribution',
    message: 'How can people contribute to this project?',
},
{
    type: 'input',
    name: 'username',
    message: 'What is your GitHub username? (Required)',
},
{
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
},
{
    type: 'input',
    name: 'tests',
    message: 'How do you test this project? (Required)',
},
{
    type: 'input',
    name: 'questions',
    message: 'Please provide contact information for those who wish to contact you.',
}];

// Created a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((data) => {
            fs.writeFile("./utils/README.md", generateMarkdown({ ...data }), (err) =>
                err ? console.error(err) : console.log('Success! Your professional README has been generated.'))
        });

}

// Function call to initialize app
init();
