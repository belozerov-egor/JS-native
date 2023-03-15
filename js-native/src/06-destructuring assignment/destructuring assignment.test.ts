type LessonsType = {
    title: string
}
type StreetType = {
    title: string
}

type AddressType = {
    street: StreetType
}

export type ManType = {
    name: string
    age: number
    lessons: LessonsType[]
    address: AddressType
}


let props: ManType;


beforeEach(() => {
    props = {
        name: "Egor",
        age: 27,
        lessons: [{title: '1'}, {title: "2"}],
        address: {
            street: {
                title: 'GorVal'
            }
        }
    }
})

test('', () => {

        // const age = props.age;
        // const lessons = props.lessons    Внизу сокращенный вариант
        const {age, lessons} = props;
        const {title} = props.address.street


        expect(age).toBe(27);
        expect(lessons.length).toBe(2);
        expect(title).toBe('GorVal');
    }
)

test('', () => {
        const l1 = props.lessons[0]
        const l2 = props.lessons[1]
const [ls1, ls2] = props.lessons

    expect(l1.title).toBe('1')
    expect(l2.title).toBe('2')

    expect(ls1.title).toBe('1')
    expect(ls2.title).toBe('2')
    }
)