interface User {
    name: string,
    age: number,
    skills: Array<string>
}

const user: User = {
    name: 'Vasiliy',
    age: 4,
    skills: ['ts', 'js']
}

function pickObjectKeys<T extends object>(data: T, keys: (keyof T)[]): Partial<T> {
    const result: Partial<T> = {};
    for (const key of keys) {
        if (key in data) {
            result[key] = data[key];
        }
    }
    return result;
}

const res = pickObjectKeys(user, ['age', 'skills']);
console.log(res)