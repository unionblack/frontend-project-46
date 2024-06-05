import { readFileSync } from 'node:fs';
import path from 'node:path';
import { parser } from './parser.js';


const getFullPath = (filepath) => path.resolve(process.cwd(), filepath);
const read = (filepath) => readFileSync(getFullPath(filepath), 'utf-8');

const genDiff = (filepath1, filepath2) => {

  const file1 = read(filepath1);
  const file2 = read(filepath2);
  
  const data1 = parser(file1);
  const data2 = parser(file2);
  
  console.log(data1);
  console.log(data2);

};

export default genDiff;