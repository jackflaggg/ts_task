class HashMap {
    private map: { [key: string]: any };

    constructor(entries?: Array<[string, any]>) {
        this.map = {}
        if (entries){
            for (const [key, value] of entries) {
                this.map[key] = value;
            }
        }
    }

    set(key: string, value: any) {
        this.map[key] = value;
    }

    delete(key: string){
        if (this.map[key]){
            this.map[key] = {}
            return true
        }
        return false
    }

    get(key: string) {
       return this.map[key]
    }

    clear(){
        this.map = {}
    }

    has(key: string): boolean{
        return !!(this.map[key])
    }

    size(): number {
        return Object.keys(this.map).length;
    }
}

const map = new HashMap([['key2', 'value2'], ['key3', 'value3']]);

console.log(map.size())
// console.log(map.clear())
console.log(map.has('key2'))