import { Laptop, hello } from './namedExports';

const defExport = 'this is a default export';

hello();

const laptop = new Laptop('Acer', '17 inch', '4k');

console.log(laptop);

export default defExport;
export {laptop};