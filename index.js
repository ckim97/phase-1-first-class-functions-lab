// Code your solution in this file!
const returnFirstTwoDrivers = function(list) {
    return list.slice(0, 2);
}

const returnLastTwoDrivers = function(list) {
    return list.slice(-2);

}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(number) {
    return function(fare) {
        return fare * number;
    }
}

function fareDoubler(fare) {
    return fare * 2;
}

const fareTripler = fare => fare * 3;

function selectDifferentDrivers(arrayOfDrivers, functionUsed) {
    return functionUsed(arrayOfDrivers);
}