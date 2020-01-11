///not being used in final project



const inquirer = require("inquirer");
const internQ = [
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

function promptIntern(){
    return inquirer.prompt(internQ);
};

exports.method = promptIntern();
exports.internArray = internQ;