const { assert, expect } = require('chai');
const { sum, product } = require('../Lab/MyModule');

describe('Test Suite', () => {
  it('works with positive integers', () => {
    assert.equal(sum(3, 5), 8, 'did not work with 3 and 5');
  });

  it('works with positive floats', () => {
    expect(sum(3, 3)).to.equal(6);
  });
});
