// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
const generateMarkdown = answers => {
  return `# ${answers.title}

  ![Badge for GitHub repo top language](https://img.shields.io/github/languages/top/${answers.username}/${answers.repo}?style=flat&logo=appveyor) ![Badge for GitHub last commit](https://img.shields.io/github/last-commit/${answers.username}/${answers.repo}?style=flat&logo=appveyor)
  
  Check out the badges hosted by [shields.io](https://shields.io/).
  
  
  ## Description 
  
  ${answers.description}

  `;
}



module.exports = generateMarkdown;
