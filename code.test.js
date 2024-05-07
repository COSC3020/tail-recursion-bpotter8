const fs = require('fs');
const jsc = require('jsverify');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');

//Unit Testing
assert.deepStrictEqual(tailRecursive(0), []); 
assert.deepStrictEqual(tailRecursive(1), [0]); 
assert.deepStrictEqual(tailRecursive(3), [0, 1, 1]); 
assert.deepStrictEqual(tailRecursive(10), [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]); 
assert.deepStrictEqual(tailRecursive(15), [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377]); 
