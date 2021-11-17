// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function flatten(array) {
  let newArray = [];
  for (var i = 0; i < array.length; i++) {
    newArray = newArray.concat(array[i]);
  }
  return newArray;
}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function loop (start, test, update, body) {
	// stop condition is just a boolean expression
	for (let value = start; test(value); value = update(value)) {
		body(value);
	}
}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function every(array, test) {
  for (var i = 0; i < array.length; i++) {
		if (test(array[i], i, array) === false) {
			return false;
		} else if (test(array[i], i, array) === true) {
      
    }
	}
	return true;
}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function characterScript(code) {
  for (let script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => code >= from &&
                                           code < to)) {
      return script;
    }
  }
  return null;
}

function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex(c => c.name == name);
    if (known == -1) {
      counts.push({name, count: 1});
    } else {
      counts[known].count++;
    }
  }
  return counts;
}

function dominantDirection(text) {
  let scripts = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : "none";
  }).filter(({name}) => name != "none");
  switch (scripts.length) {
    case 0:
      return 'no dominant direction found';
    case 1:
      return scripts[0].name;
    default:
      if (scripts.reduce((acc, cur) => acc.count === cur.count)) {
        return 'no dominant direction found';
      } else {
        return scripts.reduce((acc, cur) => acc.count >= cur.count ? acc.name : cur.name);
      }
  }
}

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
