import { lineToArray } from '../tools.ts';
import { check, check2 } from './functions.ts';

const input = await lineToArray('./input.txt');
console.log('number of valid password v1', input.filter(check).length);
console.log('number of valid password v2', input.filter(check2).length);
