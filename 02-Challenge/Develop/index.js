// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const util = require('util');

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'title',
    message: 'Please write the title of your repository.(Required)',
    validate: nameInput => {
        if(nameInput) {
            return true;
        } else {
            console.log('You must enter a title name.');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'description',
    message: 'Provide a description of the project. (Required)',
    validate: descriptionInput => {
        if(descriptionInput) {
            return true;
        } else {
            console.log('You need to provide a project description.');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'table of contents',
    message: 'What would you like to write in your table of contents? (Required)',
    validate: tableOfContentsInput => {
        if(tableOfContentsInput) {
            return(true);
        } else {
            console.log('You must enter information for the tabel of contents.');
            return false;
        }
    }

},
{
    type: 'confirm',
    name: 'confirmInstallation',
    message: 'Is there an installation process?'
},
{
    type: 'input',
    message: 'How do you install your project? (Required)',
    when: ({confirmInstallation}) => {
        if (confirmInstallation) {
            return true;
        } else {
            return false;
        }
    }
},
{
    type: 'input',
    name: 'usage',
    message: 'Would you like to provide instructions for using your application?',
    validate: usageInput => {
        if (usageInput) {
            return true;
        } else {
            console.log('Please provide instructions on how to use your application.');
        }
    }
},
{
    type: 'checkbox',
    type: 'license',
    message: 'Please choose a license.',
    choices: ['GNU GPLv3.0', 'GNU AGPLv3.0', 'GNU GPLv2.0', 'GNU LGPLv2.1', 'Mozilla Public License 2.0', 'The Unlicense', 'Eclipse Public License 2.0', 'Creative Commons Zero v1.0 Universal', 'Boost Sfotware License 1.0', 'MIT License', 'Apache License 2.0', 'BSD 3-Clause "New" or "Revised" License', 'BSD 2-Clause "Simplified" License'],
    validate: licenseChoice => {
        if (licenseChoice) {
            return true;
        } else {
            console.log('Please select a license.');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'contribution',
    message: 'How can people contribute to this project?',
    validate: contributionInput => {
        if (contributionInput) {
            return true;
        } else {
            console.log ('You need toprovide information on how others can contribute.');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'username',
    message: 'What is your GitHub username? (Required)',
    validate: usernameInput => {
        if (usernameInput) {
            return true;
        } else {
            console.log('Please enter your GitHub username.');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
    validate: emailInput => {
        if (emailInput) {
            return true;
        } else {
            console.log('Please enter your email.');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'tests',
    message: 'How do you test this project? (Required)',
    validate: testsInput => {
        if (testsInput) {
            return true;
        } else {
            console.log('You must describe how to test this project.');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'questions',
    message: 'Please provide contact information for those who wish to contact you.',
    validate: questionsInput => {
        if (questionsInput) {
            return true;
        } else {
            return false;
        }
    }
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err);
        return err;
        console.log('Success! Information added to the READ.ME file.');
    });
};

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
