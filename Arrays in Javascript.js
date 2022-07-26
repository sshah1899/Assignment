//Performed join operation on the elements of array first without anything between elements and then with '+' sign in between.
let myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.join());
console.log(myColor.join('+'));

//Converted every element of the array to uppercase and stored in the array, hence the output.
let strings = ["avengers", "captain america", "ironman", "black panther"];
console.log(strings.map(string => string.toUpperCase()));

//Write JavaScript statements that will produce the output mentioned in output format from array in input format.
const inputWords = ["spray", "limit", "elite", "exuberant", "destruction", "present"];
console.log(inputWords.filter(abc => abc.length > 6))

//Use the .map() method on the heros array to return a new array.
//1.The new array should rename the 'name' key to 'hero'.
//2.The 'name' key should not appear in the new array.
//3.The new array should have a new key added called (id).
//4.The key 'id' should be based on the index.

const heros = [ { name: 'Spider-Man' }, { name: 'Thor' }, { name: 'Black Panther' }, { name: 'Captain Marvel' }, { name: 'Silver Surfer' } ];

indexofheros =  heros.map((hero, index) => {return {id: index, heroname: hero.name }} );
console.log(indexofheros)




