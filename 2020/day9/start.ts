import { lineToArray } from '../tools.ts';
import { XMASExploit } from './functions.ts';

const input = (await lineToArray('./input.txt'));

const exploit = new XMASExploit();
exploit.exec(
    input.map( n => +n),
    25
);

console.log('wrong number', exploit.wrongNumber);
console.log('weakness', exploit.encryptionWeaknesss);
