const { flowerShop } = require('./flowerShop');
const { expect } = require('chai');

describe('Tests', function () {
  describe('calcPriceOfFlowers', function () {
    it('happy path', function () {
      expect(flowerShop.calcPriceOfFlowers('Magnolia', 5, 5)).to.equal(
        `You need $25.00 to buy Magnolia!`
      );
    });
  });

  describe('checkFlowersAvailable', function () {
    it('TODO …', function () {});
  });

  describe('sellFlowers', function () {
    it('TODO …', function () {});
  });
});
