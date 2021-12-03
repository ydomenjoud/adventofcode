import {
    assertEquals,
} from 'https://deno.land/std@0.80.0/testing/asserts.ts';
import { Joltage } from './functions.ts';

Deno.test('should ', () => {

    const input = `16
10
15
5
1
11
7
19
6
12
4`.split("\n").map(n => +n);

    const joltage = new Joltage();
    joltage.exec(input);
    assertEquals(joltage.differences[1], 7);
    assertEquals(joltage.differences[2], 0);
    assertEquals(joltage.differences[3], 5);
});


Deno.test('should', () => {
    const input = `28
33
18
42
31
14
46
20
48
47
24
23
49
45
19
38
39
11
1
32
25
35
8
17
7
9
4
2
34
10
3`.split("\n").map(n => +n);
    const joltage = new Joltage();
    joltage.exec(input);
    assertEquals(joltage.differences[1], 22);
    assertEquals(joltage.differences[2], 0);
    assertEquals(joltage.differences[3], 10);
});
