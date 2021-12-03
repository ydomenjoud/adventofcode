import {
    assertEquals,
} from 'https://deno.land/std@0.80.0/testing/asserts.ts';

import { find2EntriesThatSumTo2020AndMultiplyThem, find3EntriesThatSumTo2020AndMultiplyThem } from './functions.ts';

const input = [1721, 979, 366, 299, 675, 1456];

Deno.test('should find 2 entries that sum to 2020 and multiply them', () => {
    assertEquals(find2EntriesThatSumTo2020AndMultiplyThem(input), 514579);
});

Deno.test('should find 3 entries that sum to 2020 and multiply them', () => {
    assertEquals(find3EntriesThatSumTo2020AndMultiplyThem(input), 241861950);
});
