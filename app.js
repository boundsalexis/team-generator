const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./Lib/employee");
const Engineer = require("./Lib/engineer");
const Intern = require("./Lib/intern");
const Manager = require("./Lib/manager");
var { Observable } = require("rxjs");



    const start = [
    {
        type: "list",
        name: "employeeType",
        message: "What kind of Employee would you like to add?",
        choices: ["Manager", "Engineer", "Employee", "Intern"]
    }
]
const cont =[
    {
        type: "list",
        name: "addAnother",
        message: "Would you like another?"
    }
]
const employeeQuestions =[
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
    }  
]

const managerQuestion = {
        type: "input",
        name: "officeNumber",
        message: "What is their office number?"
    };
const managerPrompt= employeeQuestions.push(managerQuestion);
const internQuestion = [
    {
        type: "input",
        name: "school",
        message: "What school did they go to?"
    }
]
const engineerQuestion =[
    {
        type: "input",
        name: "github",
        message: "What is their github username?"
    }
]



let   quiestionaire;
let array = [];
var prompts = Observable.create(function(e){
    quiestionaire = e;
    quiestionaire.next(   {
        type: "list",
        name: "employeeType",
        message: "What kind of Employee would you like to add?",
        choices: ["Manager", "Engineer", "Employee", "Intern"]
    });
});

inquirer.prompt(prompts).ui.process.subscribe(
q => { console.log(q);
        quiestionaire.next( {
            type: "input",
            name: "name",
            message: "What is their name?"
        },
        array.push(q.answer),
        console.log(array)
        )
        quiestionaire.next( {
            type: "input",
            name: "id",
            message: "What is their ID?"
        }
        )
        quiestionaire.next({
            
                type: "input",
                name: "email",
                message: "What is their email?"
            
        })
        if(q.answer === "Manager"){
         quiestionaire.next(   {
                type: "input",
                name: "officeNumber",
                message: "What is their office number?"
            })
            array.shift();
            quiestionaire.complete();
            }
        else if (q.answer ==="Intern"){
            quiestionaire.next({
                type: "input",
                name: "school",
                message: "What school did they go to?"
            })
            quiestionaire.complete();
        }
        else if (q.answer ==="Engineer"){
            quiestionaire.next({
                type: "input",
                name: "github",
                message: "What school did they go to?"
            })
            quiestionaire.complete();
        }
},
error => {
    console.log("error");
},
complete => {
 console.log("alll done");
}
);