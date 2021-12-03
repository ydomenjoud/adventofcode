import {
    assertEquals,
} from 'https://deno.land/std@0.80.0/testing/asserts.ts';
import { GameConsole } from './functions.ts';

const game = new GameConsole();
Deno.test('should ', () => {
    const input = [
        'nop +0',
        'acc +1',
        'jmp +4',
        'acc +3',
        'jmp -3',
        'acc -99',
        'acc +1', // skipped
        'jmp -4',
        'acc +6',
    ];
    game.exec(input);
    assertEquals(game.breakOnCursor, 1);
    assertEquals(game.accumulator, 5);
});

Deno.test('should ', () => {
    const input = [
        'nop +0',
        'nop +0',
        'nop +0',
        'nop +0',
        'acc +1',
        'jmp +2',
        'nop +20', // skipped
        'acc +1',
        'jmp -3',
    ];
    game.exec(input);
    assertEquals(game.accumulator, 2);
});
