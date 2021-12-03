export interface Coordinate {
    row: number;
    column: number;
}


export function reduce(half: 'lower'|'upper', start: number, end: number): [number, number] {
    const halfDist = Math.ceil((end - start)/2);
    if (half === 'lower') {
        return [start, end - halfDist]
    } else {
        return [start + halfDist, end];
    }
}

export function codeToPosition(code: string, start: number, end: number): number {
    for (const letter of code) {
        [start, end] = reduce(['F', 'L'].includes(letter) ? 'lower' : 'upper', start, end);
    }
    return Math.min(start, end);
}

export function codeToCoordinate(code: string): Coordinate {

    const row = codeToPosition(code.slice(0, 7), 0, 127);
    const column = codeToPosition(code.slice(7), 0, 7);

    return {row, column};
}

export function coordinateToId({row, column}: Coordinate): number {
    return row * 8 + column
}
