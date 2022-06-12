const { isOddOrEven } = require('./T02EvenOROdd');
const { lookupChar } = require('./T03CharLookup');
const { mathEnforcer } = require('./T04MathEnforcer');
const { assert, expect } = require('chai');

//* Task 2
/*
describe('Even or Odd test', () => {
  it('check if it is string ', () => {
    expect(isOddOrEven([])).to.be.undefined;
  });

  it('check from empty string', () => {
    expect(isOddOrEven('')).to.be.equal('even');
  });

  it('check string', () => {
    expect(isOddOrEven('sad')).to.be.equal('odd');
  });
});*/

//* Task 3
/*
describe('Char Lookup', () => {
  it('returns undefined', () => {
    expect(lookupChar()).to.be.undefined;

    expect(lookupChar('5', null)).to.be.undefined;
    expect(lookupChar('5', undefined)).to.be.undefined;
    expect(lookupChar('5', false)).to.be.undefined;
    expect(lookupChar('5', NaN)).to.be.undefined;
    expect(lookupChar('5', [])).to.be.undefined;
    expect(lookupChar('5', {})).to.be.undefined;
    expect(lookupChar('5', '10')).to.be.undefined;

    expect(lookupChar(null, 5)).to.be.undefined;
    expect(lookupChar(undefined, 5)).to.be.undefined;
    expect(lookupChar(false, 5)).to.be.undefined;
    expect(lookupChar(NaN, 5)).to.be.undefined;
    expect(lookupChar([], 5)).to.be.undefined;
    expect(lookupChar({}, 5)).to.be.undefined;

    expect(lookupChar(null, null)).to.be.undefined;
    expect(lookupChar(undefined, undefined)).to.be.undefined;
    expect(lookupChar(false, false)).to.be.undefined;
    expect(lookupChar(NaN, NaN)).to.be.undefined;
    expect(lookupChar([], [])).to.be.undefined;
    expect(lookupChar({}, {})).to.be.undefined;
  });
  it('returns for incorrect index', () => {
    expect(lookupChar('asd', 3)).to.equal('Incorrect index');
    expect(lookupChar('asd', -1)).to.equal('Incorrect index');
    expect(lookupChar('asd', 6)).to.equal('Incorrect index');
  });
  it('returns valid output', () => {
    expect(lookupChar('a', 0)).to.equal('a');
    expect(lookupChar('asdfgh', 2)).to.equal('d');
    expect(lookupChar('12345', 1)).to.equal('2');
    expect(lookupChar('UwUwUwU', 5)).to.equal('w');
  });
});*/

//* Task 4
describe('Math Enforcer', () => {
  describe('Add Five', () => {
    it('undefined on wrong input type', () => {
      expect(mathEnforcer.addFive('5')).to.be.undefined;
      expect(mathEnforcer.addFive([])).to.be.undefined;
      expect(mathEnforcer.addFive({})).to.be.undefined;
      expect(mathEnforcer.addFive(undefined)).to.be.undefined;
    });
    it('valid number outcome', () => {
      expect(mathEnforcer.addFive(0)).to.equal(5);
      expect(mathEnforcer.addFive(5)).to.equal(10);
      expect(mathEnforcer.addFive(-10)).to.equal(-5);
      expect(mathEnforcer.addFive(5.05)).to.closeTo(10.05, 0.01);
      expect(mathEnforcer.addFive(-6.1)).to.closeTo(-1.1, 0.01);
    });
  });
  describe('Subtract Ten', () => {
    it('undefined on wrong input type', () => {
      expect(mathEnforcer.subtractTen('10')).to.be.undefined;
      expect(mathEnforcer.subtractTen([])).to.be.undefined;
      expect(mathEnforcer.subtractTen({})).to.be.undefined;
      expect(mathEnforcer.subtractTen(undefined)).to.be.undefined;
    });
    it('valid number outcome', () => {
      expect(mathEnforcer.subtractTen(5)).to.equal(-5);
      expect(mathEnforcer.subtractTen(-10)).to.equal(-20);
      expect(mathEnforcer.subtractTen(10)).to.equal(0);
      expect(mathEnforcer.subtractTen(20)).to.equal(10);
      expect(mathEnforcer.subtractTen(5.05)).to.closeTo(-4.95, 0.01);
    });
  });
  describe('Sum', () => {
    it('undefined on wrong input type', () => {
      expect(mathEnforcer.sum(5)).to.be.undefined;
      expect(mathEnforcer.sum('10')).to.be.undefined;
      expect(mathEnforcer.sum('10', 5)).to.be.undefined;
      expect(mathEnforcer.sum(10, '5')).to.be.undefined;
      expect(mathEnforcer.sum([], '')).to.be.undefined;
      expect(mathEnforcer.sum({}, {})).to.be.undefined;
      expect(mathEnforcer.sum(undefined, NaN)).to.be.undefined;
    });
    it('valid number outcome', () => {
      expect(mathEnforcer.sum(5, 5)).to.equal(10);
      expect(mathEnforcer.sum(-10, -20)).to.equal(-30);
      expect(mathEnforcer.sum(10, -10)).to.equal(0);
      expect(mathEnforcer.sum(0, 20)).to.equal(20);
      expect(mathEnforcer.sum(5.05, 5.05)).to.equal(10.1, 0.01);
      expect(mathEnforcer.sum(5.15, -2.05)).to.closeTo(3.1, 0.01);
    });
  });
});
