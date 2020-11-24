//installing inquirer and fs to the index.js
const inquirer = require("inquirer");
const fs = require("fs");

inquirer.prompt ([
    {
        name: "title",
        message: "What is the title of the project?",
        type: "input"
    },
    {
        name: "description",
        message: "What is a description of this project?",
        type: "input"
    },
    {
       name: "installation",
       message: "What are the steps for a user to install the project",
       type: "input" 
    },
    {
        name: "usage",
        message: "What are the steps to use this project?",
        type: "input"
    },
    {
        name: "license",
        message: "Which license do you want your project covered under?",
        type: "list",
        choices: ['GNU AGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT Lincse', 'N/A']
    },
    {
        name: "contribution",
        message: "Who else worked on this project with you?",
        type: "input",
    },
    {
        name: "tests",
        message: "Please explain the test that you conducted.",
        type: "input"
    },
    {
        name: "questions",
        message: "What additional questions are there for the project?",
        type: "input"
    }
]).then(function(answer) {
    //Creating a function to generate the md file
    function generateMD(answer) {
       return `
# ${answer.title}

## Description 
${answer.description}
        
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
            
## Installation
${answer.installation}
                 
## Usage 
${answer.usage}
        
## License
${answer.license}
       
## Credits
GitHub usernames:
${answer.contribution}
         `
}
    //Creating new page
    fs.writeFile("README.md", generateMD(answer), function(err) {
        if (err) {
            console.log(err)
        }
        console.log("Success!")
    });

})