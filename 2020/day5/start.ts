import { lineToArray } from '../tools.ts';
import { codeToCoordinate, coordinateToId } from './functions.ts';


const input = (await lineToArray('./input.txt'));
const ids = input.map(codeToCoordinate).map(coordinateToId);
const max = Math.max(...ids);

console.log('max id is', max);

// filters
const mySeat = ids.filter(id => {
    return ( ids.includes(id+2) && !ids.includes(id+1))
        || (ids.includes(id-2) && !ids.includes(id-1))
});
console.log('my seat is between', mySeat);

// brute force verification
for (let i = 0; i < 127*8; i++) {
    if (ids.includes(i+1) && ids.includes(i-1) && !ids.includes(i)) {
        console.log('my id is', i);
        break;
    }
}
