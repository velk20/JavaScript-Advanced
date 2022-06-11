const { assert, expect } = require('chai');
const { sum } = require('../Lab/T04SumOfNumber');
const { isSymmetric } = require('../Lab/T05CheckForSymmetry');
const { rgbToHexColor } = require('../Lab/T06RBG');

/*
describe('Test Suite', () => {
  it('works with positive integers', () => {
    assert.equal(sum(3, 5), 8, 'did not work with 3 and 5');
  });

  it('works with positive floats', () => {
    expect(sum(3, 3)).to.equal(6);
  });
});*/

//* Task 4
/*
describe('Test Sum of Numbers', () => {
  it('Check if positive numbers', () => {
    expect(sum([1, 2, 3, 2])).to.be.equal(8);
  });

  it('Check zero on empty array', () => {
    expect(sum([])).to.be.equal(0);
  });

  it('Check if positive numbers', () => {
    expect(sum([1, 2, 3, '2'])).to.be.equal(8);
  });

  it('Check if positive numbers', () => {
    expect(sum([1, 2, 3, 'a'])).to.be.NaN;
  });
});*/

//*Task 5
/*
describe('Test Sum of Numbers', () => {
  it('returns true for symmetric array', () => {
    expect(isSymmetric([1, 2, 2, 1])).to.be.true;
  });
  it('returns false for non-symmetric array', () => {
    expect(isSymmetric([1, 2, 3])).to.be.false;
  });
  it('returns false for non-array', () => {
    expect(isSymmetric(5)).to.be.false;
  });
  it('returns false for type-different symmetric array', () => {
    expect(isSymmetric([1, 2, '1'])).to.be.false;
  });
  //Our bonus tests
  it('returns true for symmetric array with odd numbers of elements', () => {
    expect(isSymmetric([1, 2, 1])).to.be.true;
  });
  it('returns true for symmetric array with strings', () => {
    expect(isSymmetric(['a', 'b', 'b', 'a'])).to.be.true;
  });
  it('returns false for non-symmetric array with strings', () => {
    expect(isSymmetric(['a', 'b', 'c'])).to.be.false;
  });
  it('returns false for string parameter', () => {
    expect(isSymmetric('abba')).to.be.false;
  });
});*/

//* Task 6
describe('Test RGB', () => {
  it('returns true for symmetric array', () => {
    expect(rgbToHexColor([1, 2, 2, 1])).to.be.true;
  });
});
