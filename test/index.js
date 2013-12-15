require('../')();
var moment = require('moment');
var assert = require('assert');

var MAX_MILLIS = 8640000000000000;

var tests = [
	{
		desc: 'Smallest possible date',
		moment: moment(-MAX_MILLIS),
		expected: '000000000000000000000000'
	},
	{
		desc: 'Largest possible date',
		moment: moment(MAX_MILLIS),
		expected: 'ffffffff0000000000000000'
	},
	{
		desc: 'Date before 01.01.1970',
		moment: moment('1969-12-31'),
		expected: '000000000000000000000000'
	},
	{
		desc: 'Date in "usual" range',
		moment: moment('2013-12-15'),
		expected: '52ace2f00000000000000000'
	}
];

console.log('Free kittens if it ends with "YAY!".');
console.log();

tests.forEach(function(test, i) {
	console.log('Running test', i + 1, ':', test.desc);
	assert.strictEqual(test.moment.toObjectId(), test.expected, test.desc);
});

console.log();
console.log('YAY!');
