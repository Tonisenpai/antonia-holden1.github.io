// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./antonia-holden1.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

 var maleCount = function(array) {
	var allMen = _.filter(array, function(element){
		if (element.gender === "male") {
			return true;
		} else {
			return false;
		}
	});
	return allMen.length;
}

var femaleCount = function(array) {
	var allWomen = _.reduce(array, function(allWomen, customer) {
		if (customer.gender === 'female') {
			allWomen += 1;
		} else {
			allWomen;
		}
		return allWomen;
	}, 0);
	return allWomen;
}

var oldestCustomer = function(array) {
	return _.reduce(array, function (prev, current) {
		if (prev.age < current.age) {
			return current;
		} else {
			return prev;
		}
	}).name;
}

var youngestCustomer = function(array) {
	return _.reduce(array, function (prev, current) {
		if (prev.age > current.age) {
			return current;
		} else {
			return prev;
		}
	}).name;

}


var averageBalance = function(customer) {
	return _.reduce(customer, (prev, current) => {
		current["balance"].replace(/[$ ,]/g, "");
		prev += parseFloat(current.balance.replace(/[$ ,]/g, ""));
		return prev;
	}, 0) / customer.length;

};

var firstLetterCount = function (array, letter) {
	 return _.reduce(array, function(prev, current){
		if (current.name[0].toUpperCase() === letter.toUpperCase()) {
			prev += 1;
		}
		return prev;
	}, 0);
};

var friendFirstLetterCount = function (array, customer, letter) {
	let friends = _.reduce(array, function(prev, current){
		if(current.name === customer) {
			prev = current.friends;
		}
		return prev;
	}, []);
	return firstLetterCount(friends, letter);
};

var friendsCount = function (array, name) {
	return _.reduce(array, function(prev, current){
		for (var i = 0; i < current.friends.length; i++) {
			if(current.friends[i].name === name) {
				prev.push(current.name);
			}
		}
		
		return prev;
	}, []);
};

var topThreeTags;

var genderCount = function(array) {
	return _.reduce(array, function(prev, current){
		if(prev[current.gender]) {
			prev[current.gender]++;
		} else {
			prev[current.gender] = 1;
		}
		return prev;
	}, {});
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
