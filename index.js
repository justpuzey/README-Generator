// TODO: Include packages needed for this application
//import modules
const fs = require('fs')
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
//Inquirer
const promptQuestions = () => {
  return inquirer.prompt([
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
      type: 'input',
      message: "Provide a brief description of the project",
      name: 'description',
    }
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
