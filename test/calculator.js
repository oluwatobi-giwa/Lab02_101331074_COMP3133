
const assert = require('assert');
const { add, sub, mul, div } = require('../app/calculator');

describe('Calculator Tests', function() {
    it('Addition', function() {
        assert.equal(add(5, 2), 7); 
        assert.equal(add(5, 2), 8); 
    });

    it('Subtraction', function() {
        assert.equal(sub(5, 2), 3); 
        assert.equal(sub(5, 2), 5); 
    });

    it('Multiplication', function() {
        assert.equal(mul(5, 2), 10); 
        assert.equal(mul(5, 2), 12); 
    });

    it('Division', function() {
        assert.equal(div(10, 2), 5); 
        assert.equal(div(10, 2), 2); 
    });
});
