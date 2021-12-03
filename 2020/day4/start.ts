import { fileAsString } from '../tools.ts';
import { extractPassports, isPasswordValid, isPasswordValid2 } from './functions.ts';

const input = await fileAsString('./input.txt');
const passwords = extractPassports(input);
const validPassports1 = passwords.filter(isPasswordValid);
console.log('valid passports v1 ', validPassports1.length);

const validPassports2 = passwords.filter(isPasswordValid2);
console.log('valid passports v2 ', validPassports2.length);
