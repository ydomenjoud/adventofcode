import { lineToArray } from '../tools.ts';
import { bagsCanContains, rowsToGraph, sumBags } from './functions.ts';

const input = (await lineToArray('./input.txt'));

const graph = rowsToGraph(input);

const availableContainers = bagsCanContains(graph, 'shiny gold');
console.log('availableContainers: ', availableContainers.length)


console.log('sumBags: ', sumBags(graph, 'shiny gold'))
