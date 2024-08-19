interface IA {
    a: number;
    b: string
}

interface IB {
    a: number;
    c: boolean
}

let a: IA = { a: 1, b: 'str' };

let b: IB = { a: 233, c: true };

function difference<T, U extends object>(objOne: T, objTwo: U): Omit<T, keyof U> {
    const result: Partial<T> = {};
    for (const key in objOne) {
        if (!(key in objTwo)) {
            result[key] = objOne[key];
        }
    }
    return result as Omit<T, keyof U>;
}

console.log(difference(a, b))