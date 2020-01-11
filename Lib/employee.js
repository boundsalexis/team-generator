class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id= id;
        this.title = "Employee";
        this.email =email;
    }
    getName(){
        return this.name;
    }
    getId(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    getRole(){
        return this.title;
    }
}

var jim = new Employee("sam", "wise", "ganji", "email");
console.log(jim.id, jim.role);

module.exports = Employee;