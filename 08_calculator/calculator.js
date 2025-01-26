const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
  let sum =0;
	arr.forEach(element => {
    sum += element;
  });
  return sum;
};

const multiply = function(arr) {
  let multi =1;
	arr.forEach(element => {
    multi = multi*element;
  });
  return multi;
};

const power = function(a,b) {
	return Math.pow(a,b);
};

const factorial = function(a) {
	let temp = 1;
  for (i=1; i <=a; i++){
    temp *=i;
  }
  return temp;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
