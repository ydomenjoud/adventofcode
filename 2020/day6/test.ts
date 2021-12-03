import {
    assertEquals,
} from 'https://deno.land/std@0.80.0/testing/asserts.ts';
import { sumResponses, sumResponses2 } from './functions.ts';

const input = `abc

a
b
c

ab
ac

a
a
a
a

b`
Deno.test('should score anyone answered ', () => {
    assertEquals(sumResponses(input), 11);
});

Deno.test('should score everyone answered', () => {
    assertEquals(sumResponses2(input), 6);
});
