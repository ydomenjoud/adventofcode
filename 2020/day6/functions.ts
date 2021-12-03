
export function sumResponses(input: string) {
    return input
        .split(/\n\n/g)
        .map( l => [...new Set(l.replaceAll("\n", '').split(''))])
        .map(l => l.length)
        .reduce((prev, curr) => prev+curr);
}

export function sumResponses2(input: string) {
    return input
        .split(/\n\n/g)
        .map( l => {
            const responses = l.split("\n").filter(line => line.trim() !== "").map(a => a.split(''));
            const groupMembers = responses.length;
            const flattenedResponses = responses.flat();
            const everyoneAnsweredResponse = [...new Set(flattenedResponses)].filter(letter => flattenedResponses.filter(l => l === letter).length === groupMembers);

            // console.log('group', groupMembers, everyoneAnsweredResponse.sort(), l.split("\n").map(l => l.split('').sort().join('')))

            return everyoneAnsweredResponse
        })
        .map(l => l.length)
        .reduce((prev, curr) => prev+curr);
}
