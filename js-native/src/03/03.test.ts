import {StudentType} from "../02/02";
import {addSkill, doesStudentLiveIn, makeStudentDeactivate} from "./03";


let student: StudentType;
beforeEach(()=> {
    student = {
        id: 1,
        name: "Egor",
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
})

test("new tech skill should be added to student", ()=> {

addSkill(student, "React")

    expect(student.technologies.length).toBe(4)
    expect(student.technologies[3].title).toBe("React")
    expect(student.technologies[3].id).toBeDefined()

})

test("student should be made deactivate", ()=> {
expect(student.isActive).toBe(true)
    makeStudentDeactivate(student);

    expect(student.isActive).toBe(false)


})

test("student lives is city?", ()=> {
    let result1 = doesStudentLiveIn(student, "Moscow");
    let result2 = doesStudentLiveIn(student, "Yaroslavl");

    expect(result1).toBe(false)
    expect(result2).toBe(true)



})