export class GameConsole {

    private _accumulator = 0;
    private cursor = 0;
    private instructions: { [key: string]: (v: number) => void } = {
        acc: v => {
            this._accumulator += v;
            this.cursor += 1;
        },
        jmp: v => {
            this.cursor += v;
        },
        nop: () => {
            this.cursor += 1;
        }
    };
    private history: number[] = [];
    breakOnCursor: number | undefined;


    get accumulator(): number {
        return this._accumulator;
    }

    exec(instructionsList: string[]) {
        this. _accumulator = 0;
        this.history = [];
        this.cursor = 0;
        this.breakOnCursor = undefined;
        let instruction;
        while (instruction = instructionsList[this.cursor]) {
            // is this instruction present in history ?
            if (this.history.includes(this.cursor)){
                this.breakOnCursor = this.cursor;
                break;
            }
            // extract command
            const {code, value} = this.parseInstruction(instruction);
            this.history.push(this.cursor);
            this.instructions[code](value);
        }
    }

    private parseInstruction(input: string): { code: string, value: number } {
        const [code, value] = input.split(' ');
        return {
            code: code.trim(),
            value: +value.trim()
        };
    }

}
