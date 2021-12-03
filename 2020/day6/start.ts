import { fileAsString } from '../tools.ts';
import { sumResponses, sumResponses2 } from './functions.ts';

const input = await fileAsString('./input.txt');

console.log('sum 1 = ', sumResponses(input))

console.log('sum 2 = ', sumResponses2(input))
