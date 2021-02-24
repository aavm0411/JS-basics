// Comments - First JavaScript Code
// console.log("Hello Wold - Nex index");
let name = 'Mosh';
console.log(name);

let interestRate = 0.3;
interestRate = 34;
console.log(interestRate);

//objects
let person = {
    name: 'Aldo',
    age: 30
};

// dot notation
person.name = 'John';

// bracket notation
let selections = 'name';
person[selections] = 'Mary';

console.log(person.name);

//array
let selectedColors = ['red,', 'blue'];
selectedColors[2] = 23;
console.log(selectedColors.length);

//Performing a task
function greet(name_user) {
    console.log('Hello ' + name_user);
}

// calculates a value
function square(number) {
    return number * number;
}
greet('Aldo');

let results = square(6.5);
console.log(results);


let employee = {
    baseSalary: 200,
    overtime: 10,
    rate: 20,
    getWage: function () {
        return this.baseSalary + (this.overtime * this.rate);
    }
}

console.log(employee.getWage());