import { Player } from './constructors';

const functionOne = () => console.log('Function One!');
const functionTwo = () => console.log('Function Two');

// not accessible outside of this module
// because it's not exported.np
functionTwo();

// this class constructor is from constructors.js module
console.log(new Player('Warrior', 50, 'Dessert City'));

export {
    functionOne
};