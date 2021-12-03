import {
    assertEquals,
} from 'https://deno.land/std@0.80.0/testing/asserts.ts';
import { Grid } from './functions.ts';

const gridConfig =
`..##.........##.......
#...#...#..#...#...#..
.#....#..#..#....#..#.
..#.#...#.#..#.#...#.#
.#...##..#..#...##..#.
..#.##.......#.##.....
.#.#.#....#.#.#.#....#
.#........#.#........#
#.##...#...#.##...#...
#...##....##...##....#
.#..#...#.#.#..#...#.#`.split("\n").map(r => r.split(''));

Deno.test('should ', () => {
    const grid = new Grid(gridConfig);
    assertEquals(grid.numberOfTrees(3, 1), 7);
});
