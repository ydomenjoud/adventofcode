import { lineToArray } from '../tools.ts';
import { Joltage } from './functions.ts';


const input = (await lineToArray('./input.txt')).map(n => +n);

const joltage = new Joltage();
joltage.exec(input);

const diff1 = joltage.differences[1];
const diff3 = joltage.differences[3];

console.log(diff1, diff3, diff1 * diff3);
