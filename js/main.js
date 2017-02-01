/* Conditional Statements are used in conjunction with basic and advanced operators to determine how truthful a statement is. */

// Declare a variable
var num = 58;

/* Use a conditional statement to test 'num' to see if it is equal to 45. */
if (num === 45) {
	document.write('<br>The number IS 45.');
} else {
	document.write('<br>The number is NOT 45.');
}

/* In addition to checking numbers, conditions can also be used to check for strings. */

var myString = 'Sally';

if (myString == 'Sally') {
	document.write('<br>Welcome Home, Sally.');
} else {
	document.write('<br>Intruder alert.');
}

/* You can evaluate two variables against each other. */

var jenny = 19;
var henry = 20;

if (jenn === henry) {
	document.write('<br>Jenny and Henry are the same age.');
} else {
	document.write('<br> Jenny and Henry are not the same age.');
}