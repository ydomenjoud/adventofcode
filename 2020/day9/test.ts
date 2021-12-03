import {
    assertEquals,
} from 'https://deno.land/std@0.80.0/testing/asserts.ts';
import { XMASExploit } from './functions.ts';

Deno.test('should ', () => {
    const input = `35
20
15
25
47
40
62
55
65
95
102
117
150
182
127
219
299
277
309
576`;
    const exploit = new XMASExploit();
    exploit.exec(input.split("\n").map(n => +n), 5);
    assertEquals(exploit.wrongNumber, 127);
    assertEquals(exploit.encryptionWeaknesss, 62)
});
