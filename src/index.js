import { readFileSync } from 'node:fs';
import path from 'node:path';
import { parse } from './parser.js';


const getFullPath = (filepath) => path.resolve(process.cwd(), filepath);
const read = (filepath) => readFileSync(getFullPath(filepath), 'utf-8');


const genDiff = (filepath1, filepath2) => {

  const readed1 = read(filepath1);
  const readed2 = read(filepath2);
  
  const data1 = parse(readed1);
  const data2 = parse(readed2);
  
  console.log(data1);
  console.log(data2);
}

export default genDiff;