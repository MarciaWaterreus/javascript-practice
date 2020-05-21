/* Javascript Array methods
https://doesitmutate.xyz/
https://www.youtube.com/watch?v=R8rmfD9Y5-c
*/

const items = [
    { name: 'Doll', price: 100 },
    { name: 'Dress', price: 101 },
    { name: 'Chair', price: 102 },
    { name: 'Table', price: 103 },
    { name: 'Cupboard', price: 104 }
];
// console.log(items);

// The .filter method can be used to return all elements that match the criteria
// https://javascript.info/array-methods#searching-in-array
// filter: if true, it gets returned in the new array. Does NOT MUTATE the array.
const filteredItems = items.filter((item) => {
    return item.price <= 100 && item.name == 'Doll';
});
// console.log(filteredItems);
// prints: [ { name: 'Doll', price: 100 } ]


// String match method https://www.w3schools.com/jsref/jsref_match.asp
const lowPriceU = items.filter((item) => {
    const u = item.name.match(/u/g);
    return item.name = u;
});
// console.log(lowPriceU);

// map converts current array into a new one. Does NOT MUTATE the array.
const itemNames = items.map((item) => {
    return item.name;
});
// console.log(itemNames);
// prints: [ 'Doll', 'Dress', 'Chair', 'Table', 'Cupboard' ]

// find will return the first item where the value is 'true'. Does NOT MUTATE the array.
const retrieveItem = items.find((item) => {
    return item.name === 'Chair';
});
// console.log(retrieveItem);
// prints: { name: 'Chair', price: 70 }

// forEach does not return anything, so it does not need to be stored in a variable.
/* items.forEach((item) => {
console.log(item.price, item.name);
});*/
/* prints: 
100 Doll
50 Dress
70 Chair
200 Table
150 Cupboard */


// some checks whether anything in the array returns 'true'.
const hasInexpensiveItems = items.some((item) => {
    return item.price <= 100;
});
// console.log(hasInexpensiveItems);
// prints: true

// every checks whether every item in the array returns 'true'.
const isInexpensive = items.every((item) => {
    return item.price <= 100;
});
// console.log(isInexpensive);
// prints: true

// reduce perfoms an operation on the array and returns the combination. It takes two additional parameters.
const total = items.reduce((currentTotal, item) => {
    return item.price + currentTotal
}, 1000); // defines the starting 'total'
// console.log(total);
// prints: 1510

// includes checks for a literal value in a simple array, it takes a single argument. 
let myToys = ['Doll', 'My Little Pony', 'Dollhouse', 'Action figure'];
const includesDoll = myToys.includes('Doll');
//console.log(includesDoll);
// prints: true

//let myToysSlice = myToys.slice(1, 2);
//console.log(myToysSlice);

// slice returns a copy of a part of the array and returns it into a new array object. The first value is the start, the second is up to, but not including the end value. 
const myToysSliced = (array) => {
    const newArray = array.slice(1, 2);
    return newArray;
};
console.log(myToysSliced(myToys));

// alternative slice with parameters
const myToysSliced2 = (array, start, end) => {
    const newArray = array.slice(start, end);
    return newArray;
};
console.log(myToysSliced2(myToys, 0, 1));

// alternative slice without declaring a new variable
const myToysSliced3 = (array) => {
return array.slice(3, 4);
};
console.log(myToysSliced3(myToys, 0, 1));

