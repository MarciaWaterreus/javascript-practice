 /* https: //love2dev.com/blog/javascript-switch-statement/
 The if statement is used in situations when we need to execute code if a condition is true.
 It checks one condition at a time and stops after the condition has been met and the first statement 
 has been executed.*/

 /* var variable = data value;
 var || const || let

 if (condition) {
     // Conditon is also known as comparison operator - what are you comparing with the variable ?
     statement
     // What do you want to do ?
 } else if (anotherCondition) {
     statement
 } else {
     statement
 }
 */

 /*If statement example*/
 let number = 10;

 if (number < 10) {
     console.log('It is not 10 yet');
 } else if (number > 10) {
     console.log('It has been 10 already');
 } else {
     console.log('It is now 10');
 }
 //________________________________________________________________________________________________

 /*The switch statement is used in situations when you have a lot of data to check.
  It checks one case at a time and stops after the first break, when a match has been found and 
  the statement has been executed.
  The 'break' keyword forces the statement to 'break out' of the current switch and continue to the 
  next one.*/

 /* 
 const variable = data value;

 switch (condition) {
     case 1:
         variable = 'value';
         break;
     case 2:
         variable = 'value';
     default:
         variable = 'If no case matches, do this';
 }
 */

 /*Switch statement example*/
 var day = 'Today';

 switch (day) {
     case 1:
         day = 'Monday';
         break;
     case 2:
         day = 'Tuesday';
     default:
         day = 'None';
 }
 //________________________________________________________________________________________________

 /* https://www.geeksforgeeks.org/loops-in-javascript/
 https://www.youtube.com/watch?v=OPdhb7n_oL4
 
The for loop statement is used in situations when you need to repeat an action several times (iterate)*/

 // Instead of:
 console.log("Hello World");

 // Create a variable:
 var i;

 for (i = 0; i < 3; i++) {
     //(variable i = starts out as 0; as long as i < then the limit of 10 (to prevent infinite loop);
     // increase by 1 (for every loop it runs)) i++) {
     console.log("Hello World");
 }

 /*For loop example*/
 var names = ['Jane', 'John', 'James', 'Joe'];
 var text = '';

 for (var i = 0; i < names.length; i++) {
     text += names[i]; //this prints the empty string 'text' and the values in the 'names' variable,
     // one name fromm the array for each loop.
     // Each time the loop prints data, the contents of the tag gets replaced, so text needs to be equal
     // to itself plus the new data
 }

 // document.getElementById('text').innerHTML = text;
 // this is where the 'text' string + for loop data gets printed

 //________________________________________________________________________________________________
 /*For in loop example*/

 var person = {
     name: 'Jane',
     haircolor: 'Brown',
     Age: 31
 };

 var text = '';

 for (var x in person) {
     // each time we reference 'x' in the loop, it will print a line of data from 'person'
     text += person[x] + '<br>';
 }

 //________________________________________________________________________________________________

 /*The while loop statement is used in situations when
 The basic idea is similar to an if statement. 
 As long as the condition is true, the loop will continue to run.*/
 var text = '';
 var x = 0;

 while (x < 5) {
     // as long as x is smaller than 0, keep looping
     text += x + '<br>';
     // for each loop, print 'text' + the value of 'x'
     x++;
     // increase by 1 (for every loop it runs). 
     // This will result in printin 0,1,2,3,4
 }

 //________________________________________________________________________________________________

 /* https://www.youtube.com/watch?v=MMb6CPU0vy8
 
 The array method / for each method is used in situations when
 An array is very similar to a variable, but instead of having only one value, it can have 
 many pieces of data inside it.
 */

 let list = [1, 2, 3, 4, 5];

 /* Instead of using a for loop like this:
     for (let i = 0; i < list.length; i++) {
        if (list[i] !== undefined) console.log(list[i]);
    }*/

 /* Use a forEach function like this:
 list.forEach(function(variable, can be named anything you like) {});
 Each 'number' iteration will print a new value from the list
 */
 list.forEach((number) => {
     console.log(number);
 });

 // To add the index, add a parameter 'i'
 list.forEach(function(number, i) {
     console.log(number, i);
 });

 // To print the entire array each time, add a parameter 'array'
 list.forEach((number, i, array) => {
     console.log(number, i, array);
 });

 //________________________________________________________________________________________________


 /* Iterate multidimensional arrays
 https://www.youtube.com/watch?v=CXsnNQ51AdQ
 */

 //________________________________________________________________________________________________


 /* Array methods 
 https://www.youtube.com/watch?v=R8rmfD9Y5-c
 */