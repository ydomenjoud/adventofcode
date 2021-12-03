import { lineToArray } from '../tools.ts';
import { Grid } from './functions.ts';

const input = (await lineToArray('./input.txt')).map(l => l.split(''));

const grid = new Grid(input);
console.log('number of trees for slopes 3,1', grid.numberOfTrees(3, 1));


// part 2
/**
 Right 1, down 1.
 Right 3, down 1. (This is the slope you already checked.)
 Right 5, down 1.
 Right 7, down 1.
 Right 1, down 2.
 */
const sum = [
    [1, 1],
    [3, 1],
    [5, 1],
    [7, 1],
    [1, 2]
]
    .map(([cols, rows]) => grid.numberOfTrees(cols, rows))
    .reduce((prev, curr) => prev * curr, 1);
console.log('sum ', sum);
