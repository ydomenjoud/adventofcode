import {
    assertEquals,
} from 'https://deno.land/std@0.80.0/testing/asserts.ts';
import { bagsCanContains, canContain, rowsToGraph, sumBags } from './functions.ts';


Deno.test('should get 4 bags which can contain shiny gold bag', () => {
    const input =
`light red bags contain 1 bright white bag, 2 muted yellow bags.
dark orange bags contain 3 bright white bags, 4 muted yellow bags.
bright white bags contain 1 shiny gold bag.
muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.
shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.
dark olive bags contain 3 faded blue bags, 4 dotted black bags.
vibrant plum bags contain 5 faded blue bags, 6 dotted black bags.
faded blue bags contain no other bags.
dotted black bags contain no other bags.`;

    const graph = rowsToGraph(input.split("\n"));
    assertEquals(canContain(graph, 'bright white', 'shiny gold'), true);
    assertEquals(canContain(graph, 'muted yellow', 'shiny gold'), true);
    assertEquals(canContain(graph, 'dark orange', 'shiny gold'), true);
    assertEquals(canContain(graph, 'light red', 'shiny gold'), true);
    assertEquals(bagsCanContains(graph, 'shiny gold').length, 4)
});

Deno.test('should contain 3 bags', () => {
    const input =
`shiny gold bags contain 3 dark olive bag.
dark olive bags contain no other bags.`;
    const graph = rowsToGraph(input.split("\n"));
    assertEquals(sumBags(graph, 'shiny gold'), 3);
})

Deno.test('should contain 12 bags', () => {
    const input = `shiny gold bags contain 3 dark olive bag.
dark olive bags contain 3 faded blue bags.
faded blue bags contain no other bags.`;
    // 3 dark olive + 9 faded blue = 12
    const graph = rowsToGraph(input.split("\n"));
    assertEquals(sumBags(graph, 'shiny gold'), 12);
})



Deno.test('should contain 32 bags', () => {
    const input =
        `light red bags contain 1 bright white bag, 2 muted yellow bags.
dark orange bags contain 3 bright white bags, 4 muted yellow bags.
bright white bags contain 1 shiny gold bag.
muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.
shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.
dark olive bags contain 3 faded blue bags, 4 dotted black bags.
vibrant plum bags contain 5 faded blue bags, 6 dotted black bags.
faded blue bags contain no other bags.
dotted black bags contain no other bags.`;
    const graph = rowsToGraph(input.split("\n"));
    assertEquals(sumBags(graph, 'shiny gold'), 32);
})

Deno.test('should contain 126 bags', () => {
    const input = `shiny gold bags contain 2 dark red bags.
dark red bags contain 2 dark orange bags.
dark orange bags contain 2 dark yellow bags.
dark yellow bags contain 2 dark green bags.
dark green bags contain 2 dark blue bags.
dark blue bags contain 2 dark violet bags.
dark violet bags contain no other bags.`;
    const graph = rowsToGraph(input.split("\n"));
    assertEquals(sumBags(graph, 'shiny gold'), 126);
})
