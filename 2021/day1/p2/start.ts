
import { lineToArray } from '../../tools.ts';

const input: number[] = (await lineToArray('./input.txt')).map(e => +e);

let increaseCount = 0
let last: number;

input.forEach((n,i) => {
    if( i + 2 < input.length) {
        const sum = input[i] + input[i+1] + input[i+2];
        if( sum > last) {
            increaseCount++;
        }
        last = sum;
    }
});

console.log(increaseCount)
