import { lineToArray } from '../tools.ts';
import { find2EntriesThatSumTo2020AndMultiplyThem, find3EntriesThatSumTo2020AndMultiplyThem } from './functions.ts';

const input: number[] = (await lineToArray('./input.txt')).map(e => +e);
console.log('2 entries', find2EntriesThatSumTo2020AndMultiplyThem(input))
console.log('3 entries', find3EntriesThatSumTo2020AndMultiplyThem(input))
