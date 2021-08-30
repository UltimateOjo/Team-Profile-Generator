var fs = require('fs');
const inquirer = require('inquirer');
const prompt = require('prompt-sync')();
const generatePage = require('./src/page-template');
const { writeFile, copyFile } = require('./utils/generate-site');

const promptUser = empData => {
const job = prompt('Jobs:\nManager\nEngineer\nIntern');
if ( job === 'Engineer') {
return inquirer.prompt([
            {
            type: 'input',
            name: 'name',
            message: 'name:'
            },
            {
            type: 'input',
            message: 'ID',
            name: 'ID:'
            },
            {
            type: 'input',
            message: 'email',
            name: 'email:'
            },
            {
            type: 'input',
            message: 'github',
            name: 'github:'
            }
        ])
    }
else if (job === 'Manager') {
return inquirer.prompt([
            {
            type: 'input',
            name: 'name',
            message: 'name:'
            },
            {
            type: 'input',
            message: 'ID',
            name: 'ID:'
            },
            {
            type: 'input',
            message: 'email',
            name: 'email:'
            },
            {
            type: 'input',
            message: 'Office Number',
            name: 'Office Number:'
            }
            ])
    }
else if (job === 'Intern') {
return inquirer.prompt([
            {
            type: 'input',
            name: 'name',
            message: 'name:'
            },
            {
            type: 'input',
            message: 'ID',
            name: 'ID:'
            },
            {
            type: 'input',
            message: 'email',
            name: 'email:'
            },
            {
            type: 'input',
            message: 'school',
            name: 'school:'
            }
            ])
        }
        else {
            console.log("Invalid Response")
        }
}

promptUser().then(empData => {
    return generatePage(empData);
}).then(empData => {
    return writeFile(empData);
}).then(writeFileResponse => {
    console.log(writeFileResponse);
    return copyFile();
  })
  .then(copyFileResponse => {
    console.log(copyFileResponse);
  })
  .catch(err => {
    console.log(err);
  });