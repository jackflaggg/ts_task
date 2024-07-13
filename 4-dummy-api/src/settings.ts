interface StatusesCode {
    BAD_REQUEST: number,
    OK: number,
    NOT_FOUND: number
}

interface Hair {
    color:string,
    type:string
}

interface Address {
    address:string,
    city:string,
    state:string,
    stateCode:string,
    postalCode:string,
    coordinates: Coordinates,
    country:string
}

interface Coordinates {
    lat:number,
    lng:number
}
interface Bank {
    cardExpire:string,
    cardNumber:string,
    cardType:string,
    currency:string,
    iban:string
}
interface Company extends Address {
    department:string,
    name:string,
}
interface Crypto {
    coin:string,
    wallet:string,
    network:string
}
export interface User
{
    id:number,
    firstName:string,
    lastName:string,
    maidenName:string,
    age:number,
    gender:string,
    email:string,
    phone:string,
    username:string,
    password:string,
    birthDate:string,
    image:string,
    bloodGroup:string,
    height:number,
    weight:number,
    eyeColor:string,
    hair: Hair,
    ip:string,
    address: Address,
    macAddress:string,
    university:string,
    bank:Bank,
    company: Company,
    ein:string,
    ssn:string,
    userAgent:string,
    crypto: Crypto,
    role:string
}
export enum SETTINGS {
    URL = 'https://dummyjson.com/users',
    PORT = 4001
}

export const HTTP_STATUSES: StatusesCode  = {
    BAD_REQUEST: 400,
    OK: 200,
    NOT_FOUND: 404
}