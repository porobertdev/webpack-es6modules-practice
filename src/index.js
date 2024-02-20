// import lodash module/package
import _ from 'lodash';
import { functionOne } from './functionOne';
import { Player, createMap } from './constructors';
import myName from './myName';

function component() {
    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    return element;
}
  
document.body.appendChild(component());
functionOne();

// factory function from constructors.js module
console.log(createMap('Twin City', 10000));

// function from myName.js module
myName('robert');