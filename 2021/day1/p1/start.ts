
import { lineToArray } from '../../tools.ts';

const input: number[] = (await lineToArray('./input.txt')).map(e => +e);

let increaseCount = 0
let last: number;

input.forEach(n => {
    if(last !== undefined && n > last){
        increaseCount++;
    }
    last = n;
});

console.log(increaseCount)
