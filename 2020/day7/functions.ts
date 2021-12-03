type Graph = Map<string, { count: number, color: string }[]>;

export function rowsToGraph(rows: string[]): Graph {
    const graph: Graph = new Map();

    rows
        .forEach(row => {
        const [color, config] = row.split(' contain');
        const colorsList = config
            .split(',')
            .map(l => (l.trim().match(/^([0-9]+) ([^\.]+) bags?\.{0,1}$/) || []))
            .filter(l => l.length>0)
            .map(([,n, c]) => ({count: +n, color: c}));
        graph.set(color.replace(/ bags?/, ''), colorsList);
    });

    return graph;
}

export function bagsCanContains(graph: Graph, bagColor: string): string[] {
    const bags: string[] = [];

    for(let key of graph.keys()) {
        if (canContain(graph, key, bagColor)) {
            bags.push(key);
        }
    }
    return bags;
}

export function canContain(graph: Graph, container: string, contained: string): boolean {
    const config = graph.get(container) || [];
    if ( config.some(l => l.color === contained)) {
        return true;
    } else {
        return config.some( bag => canContain(graph, bag.color, contained));
    }
}

export function sumBags(graph: Graph, color: string): number {
    const content = (graph.get(color) || []);
    if (content.length === 0) {
        return 0;
    }  else {
        return content
            .map(l => l.count * ( 1 + sumBags(graph, l.color)))
            .reduce((prev, next) => prev+next);
    }
}
