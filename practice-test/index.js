//const { dog } = require("./dogData");

// const dogs = require('./dogData');
let dogs = [
    {
        "name": "Doggo-co-WOOF",
        "age": 3,
        "species": "dog",
        "weight": 45,
        "votes": 22
    }, {
        "name": "Space CATdet",
        "age": 4,
        "species": "cat",
        "weight": 20,
        "votes": 5
    }, {
        "name": "Solar Squirrel",
        "age": 1,
        "species": "squirrel",
        "weight": 0.5,
        "votes": 13
    }, {
        "name": "Bark Hole",
        "age": 20,
        "species": "dog",
        "weight": 19,
        "votes": 20
    }, {
        "name": "Howlling Winds",
        "age": 55,
        "species": "dog",
        "weight": 90,
        "votes": 200
    }, {
        "name": "Electron Nutria",
        "age": 7,
        "species": "nutria",
        "weight": 3,
        "votes": 0
    }, {
        "name": "Howlling Winds Sr.",
        "age": 59,
        "species": "dog",
        "weight": 101,
        "votes": 201
    }, {
        "name": "Tycho Brahe",
        "age": 35,
        "species": "moose",
        "weight": 500,
        "votes": 123
    }, {
        "name": "Johannes Kepler",
        "age": 9,
        "species": "dog",
        "weight": 5,
        "votes": 55
    }, {
        "name": "Pluto",
        "age": 89,
        "species": "dog",
        "weight": 10,
        "votes": 190
    }, {
        "name": "Quark",
        "age": 20,
        "species": "dog",
        "weight": 1,
        "votes": 45
    }, {
        "name": "Higgs",
        "age": 26,
        "species": "dog",
        "weight": 0.00001,
        "votes": 200
    }, {
        "name": "Lepton",
        "age": 12,
        "species": "dog",
        "weight": 15,
        "votes": 175
    }, {
        "name": "Boson",
        "age": 9,
        "species": "dog",
        "weight": 8,
        "votes": 141
    }
];

// 1.
var greeting = function(greeting, location, time) {
    console.log(greeting + " " + location + " " + time);
};



// 2.
var contestants = function(array) {
   return array.length;
};



// 3.
var filterSpecies = dogs.filter(animal => animal.species === "dog");



// 4. 
var dogContestants = [...filterSpecies]; // creates a copy



// 5.
// map acts on every value in an array and returns an array of those "acted on" values 
var dogsWithClasses = dogContestants.map(function(dog){
    // create a copy of the object that you are accessing at each iteration
    var mappedDog = Object.assign({}, dog); // creates copy of dog object
    // add class property to this copy based on certain conditions
    if (dog.weight >= 21) {
        mappedDog.class = "green";
    } else if (dog.weight < 21 && dog.weight > 10) {
        mappedDog.class = "yellow";
    } else {
        mappedDog.class = "red";
    } // class: {"red/yellow/green"}
    return mappedDog; // {...dog, class: "red/yellow/green"}
});
    


// 6.
var firstInClass = function(array, obj={}) {
    // base
    if (array.length === 0) {
        return obj;
    }
    // recursion
    obj = Object.assign(obj, array[0]);
    return firstInClass(array.slice(1), obj);
};



// 7.
var votes;