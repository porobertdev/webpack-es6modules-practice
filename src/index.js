// import lodash module/package
import _ from 'lodash';
import './style.css';
import NasaImg from './img/nasa-img.jpg';
// import * as DataFiles from './data/data.js';
import { Data, Notes, DataJSON, toml, yaml, json} from './data/data.js';

import { functionOne } from './functionOne';
import { Player, createMap } from './constructors';
import myName from './myName';
import anonymous from './constructors';

// default exports can be imported with any name
import customVarName from './test';

// re-export test; dynamic import
import('./re-exporting/main.js');

// side-effect import
import './sideEffect.js';


[toml, yaml, json].forEach( data => console.log(data));

function component() {
    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    // add image
    const img = new Image();
    img.src = NasaImg;
    element.appendChild(img);

    console.log(Data);
    console.log(Notes);
    console.log('JSONY')
    console.log(DataJSON);

    return element;
}
  
document.body.appendChild(component());
functionOne();

// factory function from constructors.js module
console.log(createMap('Twin City', 10000));

// function from myName.js module
myName('robert');

// testing exported anonymous function
anonymous();

console.log(`variable 'defExport' from test.js module: ${customVarName}`);