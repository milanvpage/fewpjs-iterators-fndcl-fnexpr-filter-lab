// Code your solution here
let drivers = [{ name: "Pax", age: 18 }, { name: "Brody", age: 23}, { name: "Milan", age: 21 }, { name: "Tommy", age: 47 }, { name: "Liz", age: 43 }]

function matchName(drivers, str) {
    return drivers.filter(driver => driver.name === str);

};

function findMatching(drivers, str){
    return drivers.filter(driver => driver.toLowerCase() === str.toLowerCase());
};

function fuzzyMatch(drivers, str) {
    return drivers.filter(driver => driver.startsWith(str));
};
