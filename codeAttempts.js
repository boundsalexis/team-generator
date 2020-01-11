//////// COMPILATION OF ALL ATTEMPTS//////////
/// saving this for when I try to make the prompts more dynamic and less repetitive










const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./Lib/employee");
const Engineer = require("./Lib/engineer");
const Intern = require("./Lib/intern");
const Manager = require("./Lib/manager");
var { Observable } = require("rxjs");

var { Observable } = require("rxjs");
 var ques =[{
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
}];
const managerLoop = int => {
    let i = 1;
    let manarray =[];
    while( i <int){
    inquirer.prompt(ques);
    // manarray.push( new Manager(response.name, response.id, response.email, response.officeNumber))
i++;   
}

}

// managerLoop(9);

let meanager = inquirer.prompt([{
        type:"confirm",
        name: "addManager",
        message: "would you like to add a manager?"
    }, {
        when: function(response){
                return response.addManager;
        },
        type: "input",
        name: 'number',
        message: "how many managers would you like to add" 
        },{
            when: function(response){
                let number = parseInt(response.number, 10);
                console.log(number);
                managerLoop(number);
            }
            ,
            type:"input",
            name: "email",
            message: "goddamn"

        }], function(response){
            console.log("what this do")
        });
     

// const start = array =>{
//     let i =0;
//     inquirer.prompt(adding[i]);


// }


///////////////////////ANOTHER ATTEMPT//////////////

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
const managerPrompt= employeeQuestions + managerQuestion;
console.log(employeeQuestions, "______________", managerPrompt);
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

//////////////////ANOTHER ATTEMPT/////////////////
const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./Lib/employee");
const Engineer = require("./Lib/engineer");
const Intern = require("./Lib/intern");
const Manager = require("./Lib/manager");
var { Observable } = require("rxjs");
// function test (param){
//     array.push(param);
// }

let   quiestionaire;

let newMan= new Manager;
let newEngineer =new Engineer;
let newIntern = new Intern;
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
q => {
            if(q.answer === "Manager"){
            quiestionaire.next({
                type: "input",
                name: "name",
                message: "What is their name?"
            },
            newMan.name = ,
            console.log(q.name)),
            quiestionaire.next({
                type: "input",
                name: "id",
                message: "What is their ID?"
            },
            newMan.id = q.answer),
            quiestionaire.next({
                
                    type: "input",
                    name: "email",
                    message: "What is their email?"
             
            },
            newMan.email = q.answer),
            quiestionaire.next({
                type: "input",
                name: "officeNumber",
                message: "What is their office number?"
            },
            newMan.officeNumber =q.answer,
            array.push(newMan),
            quiestionaire.complete())
            }
        else if (q.answer ==="Intern"){
            quiestionaire.next({
                type: "input",
                name: "name",
                message: "What is their name?"
            },
            newIntern.id = q.answer),
            quiestionaire.next({
                type: "input",
                name: "id",
                message: "What is their ID?"
            },
            newIntern.id = q.answer),
            quiestionaire.next({
                
                    type: "input",
                    name: "email",
                    message: "What is their email?"
             
            },
            newIntern.email = q.answer),
            quiestionaire.next({
                type: "input",
                name: "officeNumber",
                message: "What is their office number?"
            },
            newIntern.officeNumber =q.answer,
            array.push(newIntern),

            quiestionaire.complete())
            }
        else if (q.answer ==="Engineer"){
            quiestionaire.next({
                type: "input",
                name: "name",
                message: "What is their name?"
            },
            newEngineer.id = q.answer),
            quiestionaire.next({
                type: "input",
                name: "id",
                message: "What is their ID?"
            },
            newEngineer.id = q.answer),
            quiestionaire.next({
                
                    type: "input",
                    name: "email",
                    message: "What is their email?"
             
            },
            newEngineer.email = q.answer),
            quiestionaire.next({
                type: "input",
                name: "officeNumber",
                message: "What is their office number?"
            },
            newEngineer.officeNumber =q.answer,
            array.push(newEngineer),
            quiestionaire.complete())
            }
        
},
error => {
    console.log("error");
},
complete => {
 console.log(array);

}
);




////////another example



// const inquirer = require("inquirer");
// const param1;
// const param2;
// const param3;
// const param4;
// var i = 0;
// inquirer.prompt([{
//     name: 'movie',
//     type: 'confirm',
//     message: 'Have you seen a movie lately?'
//   }, {
//     when: function (response) {
//       return response.movie;
//     },
//     name: 'good-or-not',
//     message: 'Sweet! Was it any good?'
//   }], function (response) {});


////////////////////////ANOTHER ATTEMPT//////////////
const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./Lib/employee");
const Engineer = require("./Lib/engineer");
const Intern = require("./Lib/intern");
const Manager = require("./Lib/manager");
const managerPrompt = require("./Lib/managerPrompts");
const promptManager = managerPrompt.method;
const managerArray = managerPrompt.managerArray;
const engineerPrompt = require("./Lib/engineerPrompts");
const promptEngineer = engineerPrompt.method;
const engineerArray = engineerPrompt.engineerArray;
const internPrompt = require("./Lib/internPrompts");
const internEngineer = internPrompt.method;
const internArray = internPrompt.internArray;


function test(){
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
            employee.name = q.answer
            )
            quiestionaire.next( {
                type: "input",
                name: "id",
                message: "What is their ID?"
            },
            employee.id = q.answer
            )
            quiestionaire.next({
                
                    type: "input",
                    name: "email",
                    message: "What is their email?"
             
            },
            employee.email = q.answer)
            if(q.answer === "Manager"){
             quiestionaire.next(   {
                    type: "input",
                    name: "officeNumber",
                    message: "What is their office number?"
                },
                employee.officeNumber =q.answer)
    
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
    
        console.log(employee, array);
    
    }
    );
    
}
test();
//////////////// TESTING ATTEMPTS/////////////////
const inquirer = require("inquirer");
// var { Observable } = require("rxjs");

// let emitter;

// var prompts = Observable.create(function(e) {
//   emitter = e;
//   // need to start with at least one question here
//   emitter.next({
//     type: "list",
//     name: "fruits",
//     message: "What is your favorite fruit?",
//     choices: [
//       {
//         name: "Banana"
//       },
//       {
//         name: "Apple"
//       },
//       {
//         name: "Pear"
//       }
//     ]
//   });
// });

// let times = 0;

// inquirer.prompt(prompts).ui.process.subscribe(
//   q => {
//     let dots = new Array(times).fill(".").join("");

//     if (q.answer.toLowerCase() === "pear") {
//       console.log("That's Great. I would never forget a Pear-eater.");
//       emitter.complete();
//     }

//     emitter.next({
//       type: "list",
//       name: "fruits",
//       message:
//         "Sorry, what is your favorite fruit? I forgot, was it " +
//         q.answer +
//         ", or something else?",
//       choices: [
//         {
//           name: "Uh, Banana.." + dots,
//           value: "banana"
//         },
//         {
//           name: "Uh, Apple.." + dots,
//           value: "apple"
//         },
//         {
//           name: "Pear!",
//           value: "pear"
//         }
//       ]
//     });

//     times++;
//   },
//   error => {
//     console.log("Hm, an error happened. Why?");
//   },
//   complete => {
//     console.log("I think we are done now.");
//   }
// );
inquirer.prompt([{
    name: 'movie',
    type: 'confirm',
    message: 'Have you seen a movie lately?'
  }, {
    when: function (response) {
        console.log("is this yes");

      return response.movie;
    },
    name: 'good-or-not',
    message: 'Sweet! Was it any good?'
  },
  {
    when: function (response) {
        console.log("is this yes");

      return response.movie;
    },
    name: 'good-or-not',
    message: 'Sweet! Was it any good?'
  }], function (response) {
      console.log("is thisno");
  });
