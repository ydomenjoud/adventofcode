export class Grid {
    private readonly cols: number;
    private readonly rows: number;

    constructor(private cases: string[][]) {
        this.rows = cases.length;
        this.cols = cases[0].length;
    }

    getCase(row: number, col: number): string {
        col %= this.cols;
        return this.cases[row][col];
    }

    numberOfTrees(slopeCol: number, slopeRow: number): number {
        let currentRow = 0;
        let currentCol = 0;
        const path: string[] = [];
        while (currentRow + slopeRow < this.rows) {
            currentRow += slopeRow;
            currentCol += slopeCol;
            path.push(this.getCase(currentRow, currentCol));
        }
        return path.filter(c => c === '#').length;
    }
}
