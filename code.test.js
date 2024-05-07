const fs = require('fs');
const jsc = require('jsverify');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');

assert.deepStrictEqual(tailRecursive(3), [0, 1, 1]); 
