const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./Lib/employee");
const Engineer = require("./Lib/engineer");
const Intern = require("./Lib/intern");
const Manager = require("./Lib/manager");
//////////////////// MANAGER ////////////////////////
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
function promptManager(){
    console.log("Add manager");
    return inquirer.prompt(managerQ);
 };
////////////////// ENGINEER//////////////////////
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
        message: "What school do you attend?"
    }
];

function promptEngineer(){
    console.log("Add Engineer")
   return inquirer.prompt(engineerQ);
}
///////////////////////////INTERN//////////////////////
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
        name: "school",
        message: "What school do you attend?"
    }
];

function promptIntern(){
    console.log("Add Intern");
    return inquirer.prompt(internQ);
};

/////////////////////FILE FUNCTIONS//////////////

function ReadAppend(file, appendFile){
    fs.readFileSync(appendFile);
  
      fs.appendFileSync(file, data);
    };
  
function writeAllFiles(toAppend, headContent,managerContent, engineerContent, internContent, closingContent){
    fs.writeFileSync('./templates/toAppend.html', toAppend, function (err) {
        if (err) throw err;
        console.log('Saved!');
        });
    fs.writeFileSync('./templates/headFile.html', headContent, function (err) {
        if (err) throw err;
        console.log('Saved!');
        });
    fs.writeFileSync('./templates/manager.html', managerContent, function (err) {
        if (err) throw err;
        console.log('Saved!');
        });
    fs.writeFileSync('./templates/engineer.html', engineerContent, function (err) {
        if (err) throw err;
        console.log('Saved!');
        });
    fs.writeFileSync('./templates/intern.html', internContent, function (err) {
        if (err) throw err;
        console.log('Saved!');
        });
    fs.writeFileSync('./templates/closingFile.html', closingContent, function (err) {
        if (err) throw err;
        console.log('Saved!');
        });
}
// function appendAllFiles(){
//     fs.appendFile('toAppend.html', "./templates/headFile.html", 'utf8',
//     // callback function
//     function(err) { 
//         if (err) throw err;
//         // if no error
//         console.log("Data is appended to file successfully.")
// });
// }
const toAppend = `
`;
const headContent= `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
</head>
<body>
`;
const closingContent = `
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
</body>
</html>
`
const generateHTML= response => {
var HTML = `
<div class="card" style="width: 18rem;">
        <div class="card-body">
          <h4 class="card-title">${response.name}</h4>
          <h5class="card-text">${response.title}</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${response.id}</li>
          <li class="list-group-item">Email: ${response.email}</li>
        </ul>
      </div>
`;
return HTML;
}

////////////////////COMBINING EVERYTHING/////////////
async function start() {
    try{
        //////////////CREATING MANAGER OBJECT///////////
        const managerInfo = await promptManager();
        var newMan= new Manager(managerInfo.name, managerInfo.id, managerInfo.email, managerInfo.officeNumber);
        // console.log(newMan);
        ///////////////CREATING ENGINEER OBJECT/////////
        const engineerInfo = await promptEngineer();
        var newEngineer = new Engineer(engineerInfo.name, engineerInfo.id, engineerInfo.email, engineerInfo.github);
        // console.log(newEngineer);
        /////////////////CREATING INTERN OBJECT/////////
        const internInfo = await promptIntern();
        var newIntern = new Intern(internInfo.name, internInfo.id, internInfo.email, internInfo.school)
        console.log(newIntern);
        ///////////// GENERATING CONTENT FROM OBJECTS//////////////
        let managerContent =generateHTML(newMan);
        let engineerContent = generateHTML(newEngineer);
        let internContent = generateHTML(newIntern);
        console.log(managerContent);
        ////////////FILE WRITING///////////////
        writeAllFiles(toAppend, headContent, managerContent, engineerContent, internContent, closingContent);
        //////////// APPENDING FILES//////////

    //     ReadAppend("./templates/toAppend.html", './templates/headFile.html');
    //     ReadAppend("./templates/toAppend.html", './templates/manager.html');
    //   ReadAppend("./templates/toAppend.html", './templates/engineer.html');
    //     ReadAppend("./templates/toAppend.html", './templates/intern.html');
    //     ReadAppend("./templates/toAppend.html", './templates/closingFile.html');
    


        
    } catch(err){
        // console.log(err)
    }
}

start();