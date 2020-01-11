///not being used in final project





const inquirer = require("inquirer");
const engineerQ = [
    {
        type: "input",
        name: "name",
        message: "What is their name?"
    },
    {
        type: "input",
        name: "id",
        message: "What is their ID?"
    },
    {
        type: "input",
        name: "email",
        message: "What is their email?"
    },  
    {
        type: "input",
        name: "github",
        message: "What is their github username?"
    }
];

function promptEngineer(param){
   return inquirer.prompt(param);
}


exports.method = promptEngineer(param);
exports.engineerArray = engineerQ;

