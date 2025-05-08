"use strict";
// 1
function formatString(input, toUpper = true) {
    return toUpper ? input.toUpperCase() : input.toLowerCase();
}
// 2
function filterByRating(items) {
    return items.filter(item => item.rating >= 4);
}
const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
];
// 3
function concatenateArrays(...arrays) {
    return arrays.flat();
}
//4
class Vehicle {
    constructor(make, year) {
        this.make = make;
        this.year = year;
    }
    getInfo() {
        return `Make: ${this.make}, Year: ${this.year}`;
    }
}
class Car extends Vehicle {
    constructor(make, year, model) {
        super(make, year);
        this.model = model;
    }
    getModel() {
        return `Model: ${this.model}`;
    }
}
const myCar = new Car("Toyota", 2020, "Corolla");
//5
function processValue(value) {
    return typeof value === "string" ? value.length : value * 2;
}
function getMostExpensiveProduct(products) {
    if (products.length === 0)
        return null;
    return products.reduce((max, current) => current.price > max.price ? current : max);
}
const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 }
];
//7
var Day;
(function (Day) {
    Day[Day["Monday"] = 0] = "Monday";
    Day[Day["Tuesday"] = 1] = "Tuesday";
    Day[Day["Wednesday"] = 2] = "Wednesday";
    Day[Day["Thursday"] = 3] = "Thursday";
    Day[Day["Friday"] = 4] = "Friday";
    Day[Day["Saturday"] = 5] = "Saturday";
    Day[Day["Sunday"] = 6] = "Sunday";
})(Day || (Day = {}));
function getDayType(day) {
    return (day === Day.Saturday || day === Day.Sunday) ? "Weekend" : "Weekday";
}
//8
async function squareAsync(n) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (n < 0) {
                reject(new Error("Negative number not allowed"));
            }
            else {
                resolve(n * n);
            }
        }, 1000);
    });
}
squareAsync(4)
    .then(result => console.log("Square:", result))
    .catch(error => console.error(error.message));
squareAsync(-3)
    .then(result => console.log("Square:", result))
    .catch(error => console.error("Error:", error.message));
