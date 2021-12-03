
export interface PasswordWithPolicy {
    min: number;
    max: number;
    char: string;
    password: string;
}

export function extractPasswordWithPolicy(expression: string): PasswordWithPolicy {
    const extraction = expression.match(/^([0-9]+)\-([0-9]+) ([a-z]+): ([a-z]+)$/i) || [];
    return {
        min: +extraction[1],
        max: +extraction[2] ,
        char: extraction[3],
        password: extraction[4]
    }
}

export function isPolicyVerified({min, max, char, password}: PasswordWithPolicy): boolean {
    // remove others chars
    const numberOfChar = password.split('').filter(c => c === char).length;
    return numberOfChar >= min && numberOfChar <= max;
}


export function check(input: string) {
    const policy = extractPasswordWithPolicy(input);
    const valid = isPolicyVerified(policy);
    return valid;
}


export function check2(input: string) {
    const policy = extractPasswordWithPolicy(input);
    const valid = isPolicyVerified2(policy);
    return valid;
}


export function isPolicyVerified2({min, max, char, password}: PasswordWithPolicy): boolean {
    const char1Valid = password[min-1] === char;
    const char2Valid = password[max-1] === char;
    return char1Valid ? !char2Valid : char2Valid;
}
