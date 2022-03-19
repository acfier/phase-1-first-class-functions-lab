// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']

const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
}

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = x => {
    return function(rate) {
        return (rate * x)
    }
}

const fareDoubler = function(createFareMultiplier) {
    return (createFareMultiplier *2)
}

const fareTripler = function(createFareMultiplier) {
    return (createFareMultiplier *3);
}

const selectDifferentDrivers = (arrayOfDrivers, firstTwoDrivers) => {
       return firstTwoDrivers (arrayOfDrivers);
}

