// variables for 
var inquirer = require('inquirer');
var fs = require('fs');
var markdown = require("./utils/generateMarkdown");

// array of questions that are promoted to the user
const questions = [ 
  {
    type: "input",
    message: "What is the Title of your Repository?",
    name: "title",
  },
  {
    type: "input",
    message: "What is the Description of the project?",
    name: "description",
  },
  {
    type: "input",
    message: "Any Installation Requirements?",
    name: "install",
  },
  {
    type: "input",
    message: "Any Usage Requirements?",
    name: "usage",
  },
  {
    type: "list",
    message: "What License should be generated?",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "none"],
    name: "license"
  },
  {
    type: "input",
    message: "Any other contributors?",
    name: "contribute",
  },
  {
    type: "input",
    message: "Any tests to complete?",
    name: "tests",
  },
  {
    type: "input",
    message: "What is your Github username?",
    name: "github",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  }
];

// function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(fileName, data, function (error) {
    if (error) {
      console.log(error)
    }
    console.log("Write to File");
  })
}

// function to initialize program
function init() {

  // prompt the user with the array of questions
  inquirer.prompt(questions).then(data => {

    // Switch statement for the License Badge
    switch (data.license) {
      case "MIT":
        data.licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
        break;

      case "APACHE 2.0":
        data.licenseBadge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
        break;

      case "GPL 3.0":
        data.licenseBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)"
        break;

      case "BSD 3":
        data.licenseBadge = "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
        break;

      case "none":
        data.licenseBadge = ""
        break;
    }

    // Write the sample.md file and put the data in the markdown file.
    writeToFile("sample.md", markdown(data))
  })
}

// function call to initialize program
init();
