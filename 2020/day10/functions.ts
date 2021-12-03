export class Joltage {
    differences = {
        1: 0,
        2: 0,
        3: 0
    }

    exec(input: number[]) {
        const max = Math.max(...input);
        input = input.sort( (a,b) => a > b ? 1 : -1 );
        input.unshift(0); // charging outlet
        input.push(max+3); // device adapter

        for (let i = 1; i < input.length; i++) {
            const diff = input[i] - input[i-1] as 1|2|3;
            this.differences[diff]++;
        }
    }
}
