// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![Badge](https://img.shields.io/badge/License-${license}-blue.svg)`
  }
  return ``;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {

  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `## License
    ${license} `
  }
  return ``;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}
  
  ## Description
  ${data.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contribution)
  - [Tests](#tests)
  - [License](#license)
  
  ## Installation
  ${data.confirmInstallation}
  
  ## Usage

  ${data.usage}
  
  ## Contributing

  ${data.contribution}
  
  ## Test

  ${data.tests}

  ## License

  ${renderLicenseSection(data.license)}
  
  ## Questions
If you have any questions, I can be reached at: ${data.email}

Find me on GitHub: [Email](mailto:${data.email})

  `
}

module.exports = generateMarkdown;
