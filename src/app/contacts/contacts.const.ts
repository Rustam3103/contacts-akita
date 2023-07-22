import { Contact, Sex } from "./contacts.model";

export const Contacts: Contact[] = [
    {
        id: 1,
        name: 'Mark',
        surname: 'Otto',
        email: '@mdo',
        phoneNumber: '+992982234322',
        sex: Sex.Male
    },
    {
        id: 2,
        name: 'Jacob',
        surname: 'Thornton',
        email: '@fat',
        phoneNumber: '+9987632345',
        sex: Sex.Male
    },
    {
        id: 3,
        name: 'Inna',
        surname: 'Yacobna',
        email: '@inna',
        phoneNumber: '+9987632343',
        sex: Sex.Female
    },
    {
        id: 4,
        name: 'Larry',
        surname: 'Bird',
        email: '@bird',
        phoneNumber: '+9928743221',
        sex: Sex.Male
    }
]