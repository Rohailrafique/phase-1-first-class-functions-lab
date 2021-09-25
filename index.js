// Code your solution in this file!
const newArray = ['Sally', 'Bob', 'Freddy', 'Claudia']


function returnFirstTwoDrivers() {
    return newArray.slice(0, 2)
}

const returnLastTwoDrivers = () => newArray.slice(2, 4)


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]


function createFareMultiplier(integer) {
    return function multiplyFare(fare) {
        return fare * integer
    
        }
}



const fareDoubler = createFareMultiplier(2)

createFareMultiplier();

const fareTripler = createFareMultiplier(3)



function selectDifferentDrivers(drivers, returnDrivers) {
    return returnDrivers(drivers)
}



selectDifferentDrivers() 