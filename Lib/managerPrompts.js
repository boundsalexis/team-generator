///not being used in final project





const inquirer = require("inquirer");
const managerQ = [
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
        name: "officeNumber",
        message: "What is their office number?"
    }
];
// console.log(managerQ);
// inquirer.prompt(managerQ);
function promptManager(){
   return inquirer.prompt(managerQ);
};
// // promptManager(managerQ);
exports.method = promptManager();
exports.managerArray = managerQ;