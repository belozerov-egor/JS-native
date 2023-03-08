type TechnologiesType = {
    id: number
    title: string
}
type PlaceType = {
    title: string
    countryTitle: string
}
type AddressType = {
    streetTitle:string
    city: PlaceType
}

type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Array<TechnologiesType>
    
}

const student:StudentType = {
    id: 1,
    name: "Eogr",
    age: 27,
    isActive: true,
    address: {
        streetTitle: "GorVal2",
        city: {
            title: "Yaroslavl",
            countryTitle: "Russia"
        }
    },
    technologies: [
        {
            id:1,
            title: "HTML"
        },
        {
            id:2,
            title: "CSS"
        },
        {
            id:3,
            title: "JS"
        },
    ]
}

