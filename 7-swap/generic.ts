function swapKey(obj: Record<string, number>): Record<number, string> {
    const swap: Record<number, string> = {};
    for (const [key, value] of Object.entries(obj)) {
        if (!swap[value]) {
            swap[value] = key;
        } else {
            swap[value] += `, ${key}`;
        }
    }
    return swap;
}

const myObj = {
    first: 1,
    second: 1,
    third: 3,
    four: 4,
    five: 3
}
console.log(swapKey(myObj));