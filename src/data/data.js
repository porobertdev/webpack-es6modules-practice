import Data from './data.xml';
import Notes from './data.csv';
import DataJSON from './data.json';
import toml from './data.toml';
import yaml from './data.yaml';
import json from './data.json5';

/* 
  cause an error that can be tracked using Source Maps
  it points to the correct js file instead to the bundle.js
*/
// conzole.log('hllhllh');

export { 
    Data,
    Notes,
    DataJSON,
    toml,
    yaml,
    json
}