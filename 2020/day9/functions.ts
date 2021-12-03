export class XMASExploit {
    wrongNumber = -1;
    encryptionWeaknesss?: number;
    private preamble?: number;
    private input: number[] = [];


    exec(input: number[], preamble: number) {
        this.input = input;
        this.preamble = preamble;
        for (let i = preamble; i < input.length; i++) {
            const n = input[i];
            if (!this.isSumOfPreviousNumber(n, input.slice(i - preamble, i))) {
                this.wrongNumber = n;
                break;
            }
        }

        this.getEncryptionWeakness();

    }

    private getEncryptionWeakness(): void {

        const match: number[] = [];

        for1: for (let i = 0; i < this.input.length; i++) {
            let sum = 0;
            let a = 0;
            // console.log(i)
            while (sum < this.wrongNumber) {
                sum += this.input[++a + i];
                // console.log(a, this.input[i], ' + ' + this.input[a + i], sum);

                if (sum === this.wrongNumber) {
                    match.push(...this.input.slice(i+1, i + a + 1));
                    break for1;
                }
            }
        }

        const min = Math.min(...match);
        const max = Math.max(...match);

        this.encryptionWeaknesss = min + max;
    }

    private isSumOfPreviousNumber(numberToVerify: number, previousNumbers: number[]): boolean {
        for (let i = 0; i < previousNumbers.length; i++) {
            for (let j = 0; j < previousNumbers.length; j++) {
                if (i !== j && (previousNumbers[i] + previousNumbers[j]) === numberToVerify) {
                    return true;
                }
            }
        }
        return false;
    }


}
