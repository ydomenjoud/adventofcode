import {
    assertEquals,
} from 'https://deno.land/std@0.80.0/testing/asserts.ts';
import { check, check2, extractPasswordWithPolicy, isPolicyVerified } from './functions.ts';

const input = [
    '1-3 a: abcde',
    '1-3 b: cdefg',
    '2-9 c: ccccccccc',
    '1-3 a: aaaa',
    '1-3 a: abaa',
    '1-3 a: abaaa',
]
Deno.test('should extract PasswordWithPolicy', () => {
    const passwordWithPolicy = extractPasswordWithPolicy(input[0]);
    assertEquals(passwordWithPolicy.min, 1);
    assertEquals(passwordWithPolicy.max, 3);
    assertEquals(passwordWithPolicy.char, 'a');
    assertEquals(passwordWithPolicy.password, 'abcde');
});

Deno.test('should valid expression with first check', () => {
    const test = (i: number, valid: unknown) => assertEquals(
        check(input[i]),
        valid,
        `${input[i]} should be ${valid ? '' : 'in'}valid`
    );

    test(0, true);
    test(1, false);
    test(2, true);
    test(3, false);
    test(4, true);
    test(5, false);
})

Deno.test('should valid expression with second check', () => {
    const test = (i: number, valid: unknown) => assertEquals(
        check2(input[i]),
        valid,
        `${input[i]} should be ${valid ? '' : 'in'}valid`
    );

    test(0, true);
    test(1, false);
    test(2, false);
    test(3, false);
    test(4, false);
    test(5, false);
})
