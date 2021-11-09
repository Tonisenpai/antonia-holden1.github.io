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
	var oldest = _.reduce(array, function (prev, current) {
		if (prev.age < current.age) {
			return current;
		} else {
			return prev;
		}
	}, 0);
		return oldestCustomer.name;
}

var youngestCustomer = function(array) {
	var youngest = _.reduce(array, function (prev, current) {
		if (prev.age > current.age) {
			return current;
		} else {
			return prev;
		}
	}, 0);
		return youngestCustomer.name;
}


var averageBalance;

var firstLetterCount;

var friendFirstLetterCount;

var friendsCount;

var topThreeTags;

var genderCount;

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
