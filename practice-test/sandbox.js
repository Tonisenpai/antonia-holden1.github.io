var contestants = function(count, array) {
    let newArray = [];
    for (var i = 0; i < array.length; i++) {

    }
};


var greeting = function(greeting, location, time) {
    console.log(greeting + " " + location + " " + time);
};


// 3.
var filterSpecies = species.filter();



// 4. 
var dogContestants;



// 5. 
var dogsWithClasses = dogs.map();



var filterSpecies = species.filter(function(array){
    let speciesArr = [];
    for (var index = 0; index < array.length; index++) {
        if (array.species === "dog") {
            speciesArr.push(array[index]);
        } else if (array.species !== "dog") {
            
        }
    }
    return speciesArr;
});