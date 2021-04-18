

const renderLicenseBadge = license => {
  if (license) {
    // If there is a license, render the link
    console.log('license received:', license)
    let licenseLink = '';
    if (license == 'The MIT License') {
      licenseLink = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
      console.log('license is MIT')
    }
    else if (license == 'Apache 2.0 License') {
      licenseLink = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
      console.log('license is Apache')
    }
    else {
      licenseLink = '[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)'
      console.log('license is GPL')
    }
    //return License Section
    return licenseLink
  }
  else {
    // If there is no license, return and empty string
    return ''
  }
}

// TODO: Create a function to generate markdown for README
const generateMarkdown = answers => {

  const license = renderLicenseBadge(answers.license)

  return `# ${answers.title}
  
   ${license}
  
  ## Description 
  ${answers.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  * [License](#license)
  
  ## Installation
  <p><i>Steps required to install application, dependencies and configure the environment:</i></p>

  ${answers.installation}

  ## Usage
  <p><i>Instructions for application usage including examples:</i></p>

  ${answers.usage}

  ## Contributing
  <p><i>Guidelines for contributing to the project, including contributor covenant:</i></p>

  ${answers.contributing}

  ## Tests
  <p><i>Below are examples of current application tests and instructions on how to run them:</i></p>

  ${answers.testing}

  ## Questions
  If you have any questions, please contact:</br>
  (GitHub User): ${answers.username} </br>
  email: ${answers.email}

  ## License
  ${answers.license}
  
  `;
}



module.exports = generateMarkdown;
