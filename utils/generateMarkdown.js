

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
  * [License](#license)
  
  ## Installation
  ${answers.installation}

  ## Usage
  ${answers.usage}

  ## Contributing
  ${answers.contributing}

  ## Tests
  ${answers.tests}

  ## License
  ${answers.license}



  
  `;
}



module.exports = generateMarkdown;
