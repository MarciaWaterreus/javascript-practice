/* Change this function to an arrow function
const ikRockArrowFunctions = function() {
    console.log("Joe, ik rock de arrow functions!");
};*/

const ikRockArrowFunctions = () => console.log("Joe, ik rock de arrow functions!");
ikRockArrowFunctions();

/* Change this function to an arrow function
const fivePlusSeven = function () {
  return 5 + 7
};*/

const fivePlusSeven = () => 5 + 7;
console.log(fivePlusSeven());

// Write a nameless arrow function, as short as possible that adds 1 + 2.
//() = > 1 + 2;

// Write an arrow function on one line that adds the parameters a and b.
const myFunction = (a, b) => a + b;
console.log("One pound fish ", "very, very cheap!");

// Write an arrow function on one line with the parametera, that returns a + 5
const addFive = a => a += 5;
console.log(addFive(10));

// Write a function with an implicit return that returns a simple object
const createObject = () => ({ greeting: "hoi" })
console.log(createObject());