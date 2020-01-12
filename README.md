# team-generator
CLI application that generates a team html page from user input


# links
> [GitHub Repository](https://github.com/boundsalexis/team-generator)

## Images
![Final Product](/final.png)

# Technologies Used
> Node JS 
> Jest for testing
> Inquirer to prompt
> FS to write files
> CSS to style the output html


# Summary
As a manager
I want to generate a webpage that displays my team's basic info
so that I have quick access to emails and GitHub profiles

# Code Snippet
``` javascript
async function start() {
    try{
        //////////////CREATING MANAGER OBJECT///////////
        const managerInfo = await promptManager();
        var newMan= new Manager(managerInfo.name, managerInfo.id, managerInfo.email, managerInfo.officeNumber);
        ///////////////CREATING ENGINEER OBJECT/////////
        const engineerInfo = await promptEngineer();
        var newEngineer = new Engineer(engineerInfo.name, engineerInfo.id, engineerInfo.email, engineerInfo.github);
        /////////////////CREATING INTERN OBJECT/////////
        const internInfo = await promptIntern();
        var newIntern = new Intern(internInfo.name, internInfo.id, internInfo.email, internInfo.school)
        ///////////// GENERATING CONTENT FROM OBJECTS//////////////
        let managerContent =generateManagerHTML(newMan);
        let engineerContent = generateEngineerHTML(newEngineer);
        let internContent = generateInternHTML(newIntern);
        ////////////FILE WRITING///////////////
        writeAllFiles(toAppend, headContent, managerContent, engineerContent, internContent, closingContent);
        let concatenatedStrng = headContent + managerContent + engineerContent + internContent +closingContent;
        //////////// APPENDING FILES//////////
        let fd;
        fd = fs.openSync('./output/toAppend.html', 'a');
        fs.appendFileSync(fd, concatenatedStrng, 'utf8');
    } catch(err){
        console.log(err)
    }
}

start();
```
> This is where all of the work gets done
> I the future I would like things to be generated more dynamically; as it is right now each type of employee has their own prompt functions and their own generate html functions
> Allowing the user to add a specific number of each type of employee would allow more practical functionality

# Jess
> When I was testing with Jest it became abundantly clear how useful it can be.
> I built the classes in under an hour and spent too many hours testing the rest of the program manually


## Authors

* **Alexis Bounds** 

- [Link to Portfolio Site](https://github.com/boundsalexis/basic-portfolio)
- [Link to Github](https://github.com/boundsalexis)
- [Link to LinkedIn](https://www.linkedin.com/in/alexis-bounds-9b7711169/)