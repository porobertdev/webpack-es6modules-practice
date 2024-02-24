import * as barrelModules from './barrel.js';

console.log(`barrel: ${barrelModules.Player}`);

const ninja = new barrelModules.Player('Naruto', 50, 'Konoha');
ninja.attack();