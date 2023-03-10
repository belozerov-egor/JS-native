import {CityType, GovernmentBuildingType} from "../02/02_02";

export const demolishHousesOnTheStreet = (city: CityType, street: string)=> {
city.houses=city.houses.filter(h => h.address.street.title !== street)
}


///Это чистая функция! Поэтому ретурн
export const getBuildingsWithStaffCountGreaterThen = (buildings: Array<GovernmentBuildingType>, people: number)=> {
    return buildings.filter(b => b.staffCount > people)
}