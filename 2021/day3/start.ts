import { commonElement } from './functions.ts';
import { lineToArray } from '../tools.ts';

const input: string[] = (await lineToArray('./input.txt'));

// part 1
{
    let gamma = 0;
    let epsylon = 0;

    // nombre de bit
    const digit = input[0].length;

    const gammaString: number[] = [];
    const epsylonString: number[] = [];
    for (let i = 0; i < digit; i++) {
        gammaString.push(commonElement(input.map(e => +e[i]), 'most'));
        epsylonString.push(commonElement(input.map(e => +e[i]), 'less'));
    }
    gamma = parseInt(gammaString.map(e => +e).join(''), 2);
    epsylon = parseInt(epsylonString.map(e => +e).join(''), 2);

    console.log('part1', {digit, gamma, epsylon}, gamma * epsylon);
}

// part 2
{
    // nombre de bit
    const digit = input[0].length;

    let subsetOxygen: string[] = input;
    let subsetCO2: string[] = input;
    for (let i = 0; i < digit; i++) {
        if (subsetOxygen.length > 1) {
            const mostCommon = commonElement(subsetOxygen.map(e => +e[i]), 'most');
            subsetOxygen = subsetOxygen.filter(e => +e[i] === mostCommon);
        }

        if (subsetCO2.length > 1) {
            const lessCommon = commonElement(subsetCO2.map(e => +e[i]), 'less');
            subsetCO2 = subsetCO2.filter(e => +e[i] === lessCommon);
        }
    }
    const oxygen = parseInt(subsetOxygen[0], 2);
    const cO2 = parseInt(subsetCO2[0], 2);

    console.log('part2', {digit, oxygen, cO2}, oxygen * cO2);
}
