import { readLines } from 'https://deno.land/std@0.80.0/io/bufio.ts';

export async function *readline(file: string): AsyncGenerator<string> {
    const f = await Deno.open(file);
    for await (const line of readLines(f)) {
        if (line) {
            yield line;
        }
    }
    f.close();
}

export async function lineToArray(file: string): Promise<string[]>{
    const input: string[] = [];
    for await (const line of readline(file)) {
        if (line && line.trim() !== '') {
            input.push(line);
        }
    }
    return input;
}


export async function fileAsString(file: string): Promise<string>{
    return Deno.readTextFile(file);
}
