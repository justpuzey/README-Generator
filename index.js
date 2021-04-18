// TODO: Include packages needed for this application
//import modules
const fs = require('fs')
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
//Inquirer
const promptQuestions = () => {
  return inquirer.prompt([
    //Prompt for project title
    {
      type: 'input',
      message: "What is the project's title? (Required)",
      name: 'title',
      validate: function (answer) {
        if (answer) {
          return true;
        }
        return console.log("Please add a title for your project.");
      }
    },
    //Prompt for project description
    {
      type: 'input',
      message: "Provide a brief description of the project:",
      name: 'description',
    },
    //Prompt for GitHub username
    {
      type: 'input',
      message: "What is your GitHub username? (Required)",
      name: 'username',
      validate: function (answer) {
        if (answer) {
          return true;
        }
        return console.log("Please add a valid GitHub username.");
      }
    },
    //Prompt for contact email address
    {
      type: 'input',
      message: "Please provide a contact email address for questions. (Required)",
      name: 'email',
      validate: function (answer) {
        if (answer) {
          return true;
        }
        return console.log("Please a valid email address.");
      }
    },
    //Prompt for GitHub Repository
    {
      type: 'input',
      message: "What is the name of your GitHub repository? (Required)",
      name: 'repo',
      validate: function (answer) {
        if (answer) {
          return true;
        }
        return console.log("Please add a valid GitHub repository name.");
      }
    },
    {
      type: 'checkbox',
      name: 'license',
      message: 'Select the license type for this repository',
      choices: ['Apache 2.0 License', 'GNU GPL v3', 'The MIT License']
    },
    //Prompt for installation instructions
    {
      type: 'input',
      message: "Provide a instructions for installation:",
      name: 'installation',
    },
    //Prompt for usage information
    {
      type: 'input',
      message: "Provide a instructions and examples for usage:",
      name: 'usage',
    },
    //Prompt for guidelines for contributing
    {
      type: 'input',
      message: "Provide guidelines for contributing:",
      name: 'contributing',
    },
    //Prompt for instructions related to tests
    {
      type: 'input',
      message: "Provide guidelines for running tests:",
      name: 'testing',
    },

  ])
}


// TODO: Create a function to write README file
function writeToFile(data) {
  fs.writeFile('./dist/README.md', data, err => {
    if (err) {
      console.log(err)
    }
    console.log('created successfully!')

  });
}

// TODO: Create a function to initialize app
promptQuestions()
  .then(promptQuestions => {
    return generateMarkdown(promptQuestions);
    // console.log(generateMarkdown(promptQuestions))
  })
  .then(markDownData => {
    // return generateMarkdown(promptQuestions);
    console.log(writeToFile(markDownData))
  })
  .catch(err => {
    console.log(err);
  });
