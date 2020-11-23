const inquirer = require("inquirer");
const fs = require("fs");

inquirer.prompt([
    {
        name: "Title",
        message: "What is the name of the project?",
        type: "input"
    },
    {
        name: "Description",
        message: "Please describe your project.",
        type: "input"
    },
    {
        name: "Table of Contents",
        message: "Please list content of your project",
        type: "input"
    },
    {
        name: "Installation",
        message: "Please describe how to install your project",
        type: "input"
    },
    {
        name: "Usage",
        message: "Please describe how to use your project",
        type: "input"
    },
    {
        name: "License",
        message: "Please choose a license.",
        type: "list",
        choices: ["MIT", "Apache 2.0", "GNU GPL v3", "N/A"]
    },
    {
        name: "Contributing",
        message: "Please list others who worked on this project",
        type: "input"
    },
    {
        name: "Tests",
        message: "Please explain the test(s) you conducted.",
        type: "input"
    },
    {
        name: "Questions",
        message: "Are there any additional questions?",
        type: "input"
    },
])
.then(function(answer){
    function generateMD(answer){
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

//  Generate Page
 fs.writeFile("README.md", generateMD(answer), function(err) {
    if (err) {
        console.log(err)
    }
    console.log("Done!")
});

})