
export function find2EntriesThatSumTo2020AndMultiplyThem(input: number[]): number {
    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input.length; j++) {
                const isDifferent = i != j;
                const sumIs2020 = (input[i] + input[j]) === 2020;
                if (isDifferent && sumIs2020) {
                    return input[i] * input[j]
                }
        }
    }
    throw new Error('no matches found');
}

export function find3EntriesThatSumTo2020AndMultiplyThem(input: number[]): number {
    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input.length; j++) {
            for (let k = 0; k < input.length; k++) {
                const isDifferent = i != j && j != k;
                const sumIs2020 = (input[i] + input[j] + input[k]) === 2020;
                if (isDifferent && sumIs2020) {
                    return input[i] * input[j] * input[k]
                }
            }
        }
    }
    throw new Error('no matches found');
}
