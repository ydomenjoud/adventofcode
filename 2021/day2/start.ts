import { lineToArray } from '../tools.ts';

const input: string[][] = (await lineToArray('./input.txt')).map(e => e.split(' '));

// part 1
{
    let horizontal = 0;
    let depth = 0;
    input.forEach(([command, value]) => {
        switch (command) {
            case 'forward':
                horizontal += +value;
                break;
            case 'down':
                depth += +value;
                break;
            case 'up':
                depth -= +value;
        }
    });
    console.log('part1', {horizontal, depth}, horizontal * depth);
}

// part 2
{
    let horizontal = 0;
    let depth = 0;
    let aim = 0;
    input.forEach(([command, value]) => {
        const v = +value;
        switch (command) {
            case 'forward':
                horizontal += v;
                depth += v * aim;
                break;
            case 'down':
                aim += v
                break;
            case 'up':
                aim -= v
        }
    });
    console.log('part2', {horizontal, depth}, horizontal * depth);
}
