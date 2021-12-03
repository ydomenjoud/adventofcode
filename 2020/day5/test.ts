import { assertEquals, } from 'https://deno.land/std@0.80.0/testing/asserts.ts';
import { codeToCoordinate, codeToPosition, coordinateToId, reduce } from './functions.ts';

Deno.test('should reduce interval', () => {
    assertEquals(reduce('lower', 0, 127), [0, 63]);
    assertEquals(reduce('upper', 0, 127), [64, 127]);
    assertEquals(reduce('upper', 0, 63), [32, 63]);
    assertEquals(reduce('lower', 32, 63), [32, 47]);

});

Deno.test('should calcul position and ID', () => {

    assertEquals(codeToPosition('FBFBBFF', 0, 127), 44);
    assertEquals(codeToPosition('RLR', 0, 7), 5);
    assertEquals(codeToCoordinate('FBFBBFFRLR'), {row: 44, column: 5});

    assertEquals(coordinateToId({row: 44, column: 5}), 357);

    [
        {code: 'BFFFBBFRRR', row: 70, column: 7, id: 567},
        {code: 'FFFBBBFRRR', row: 14, column: 7, id: 119},
        {code: 'BBFFBBFRLL', row: 102, column: 4, id: 820}].forEach(v => {
        const {code, id,  ...coordinate} = v;
        const coordinateCalculed = codeToCoordinate(v.code);
        assertEquals(coordinate, coordinateCalculed);
        assertEquals(coordinateToId(coordinate), id)
    });

});
