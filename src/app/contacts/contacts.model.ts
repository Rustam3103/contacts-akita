export interface Contact {
    id?: number
    name: string;
    surname: string;
    email: string;
    phoneNumber: string;
    sex: Sex;
}

export enum Sex {
    Male = 'male',
    Female = 'female'
}