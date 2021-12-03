import { lineToArray } from '../tools.ts';
import { GameConsole } from './functions.ts';

const input = (await lineToArray('./input.txt'));
const game = new GameConsole();

game.exec(input);
console.log('accumulator ', game.accumulator);
if (game.breakOnCursor) {
    console.log('break on instruction', [game.breakOnCursor])
}

// part 2
// change one jmp => nop or nop => jmp

const listOfInputs = input.map((row, index) => {
    const clone = [...input];
    let [code, value] = clone[index].split(' ').map(l => l.trim());
    let newCode = null;
    if( code === 'jmp') {
        newCode = 'nop';
    } else if (code === 'nop') {
        newCode = 'jmp';
    }
    if(newCode) {
        // console.log("replace ", clone[index], '=>', newCode + ' '+ value);
        clone[index] = newCode + ' '+ value;
        // console.log(clone);
    }
    return clone;
});

const validInput = listOfInputs.find( input => {
    game.exec(input);
    return game.breakOnCursor === undefined
});
if( validInput) {
    game.exec(validInput);
    console.log('accumulator ', game.accumulator);
}

