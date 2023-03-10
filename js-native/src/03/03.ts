import {StudentType} from "../02/02";
import {GovernmentBuildingType, HouseType} from "../02/02_02";

export const sum = (a: number, b: number)=> {
    return a+b;
}

const res= sum(2,3)

export const addSkill = (student: StudentType, skill: string)=> {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export const addSkill2 = (student: StudentType, skill: string)=> {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}
// Имена не имеют значение, что s,  что student одно и тоже
export function makeStudentDeactivate(s: StudentType) {
    s.isActive = false;
}

export const doesStudentLiveIn = (student: StudentType, cityName: string ) => {
    return student.address.city.title === cityName;

}

export const addMoneyToBudget = (building: GovernmentBuildingType, budget: number) => {
    building.budget += budget;
}

export const repairHouse = (house: HouseType) => {
    house.repaired = true;
}

export const toFireStaff = (building: GovernmentBuildingType, stuffCountToFire: number) => {
building.staffCount -= stuffCountToFire;
}

export const toHireStaff = (building: GovernmentBuildingType, stuffCountToHire: number)=> {
    building.staffCount += stuffCountToHire;
}