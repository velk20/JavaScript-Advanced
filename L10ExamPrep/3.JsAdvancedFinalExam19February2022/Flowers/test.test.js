const { flowerShop } = require('./flowerShop');
const { expect } = require('chai');

describe('Tests', function () {
  describe('calcPriceOfFlowers', function () {
    it('happy path', function () {
      expect(flowerShop.calcPriceOfFlowers('Magnolia', 5, 5)).to.equal(
        `You need $25.00 to buy Magnolia!`
      );

      expect(flowerShop.calcPriceOfFlowers('Magnolia', 25, 4)).to.equal(
        `You need $100.00 to buy Magnolia!`
      );

      expect(flowerShop.calcPriceOfFlowers('Magnolia', 0, 4)).to.equal(
        `You need $0.00 to buy Magnolia!`
      );

      expect(flowerShop.calcPriceOfFlowers('', 5, 5)).to.equal(
        `You need $25.00 to buy !`
      );
    });

    it('Exceptions calcPriceOfFlowers', function () {
      expect(() => flowerShop.calcPriceOfFlowers({}, 5, 5)).to.throw(
        'Invalid input!'
      );

      expect(() => flowerShop.calcPriceOfFlowers('', 5.5, 5)).to.throw(
        'Invalid input!'
      );

      expect(() => flowerShop.calcPriceOfFlowers('', 5, 5.5)).to.throw(
        'Invalid input!'
      );

      expect(() => flowerShop.calcPriceOfFlowers('', {}, [])).to.throw(
        'Invalid input!'
      );
    });
  });

  describe('checkFlowersAvailable', function () {
    it('happy path', function () {
      expect(
        flowerShop.checkFlowersAvailable('Rose', ['Rose', 'Lily', 'Orchid'])
      ).to.equal(`The Rose are available!`);

      expect(
        flowerShop.checkFlowersAvailable('Orchid', ['Rose', 'Lily', 'Orchid'])
      ).to.equal(`The Orchid are available!`);

      expect(
        flowerShop.checkFlowersAvailable('Lily', ['Rose', 'Lily', 'Orchid'])
      ).to.equal(`The Lily are available!`);
    });

    it('No found flowers', function () {
      expect(
        flowerShop.checkFlowersAvailable('Lily', ['Rose', 'Orchid'])
      ).to.equal(`The Lily are sold! You need to purchase more!`);

      expect(
        flowerShop.checkFlowersAvailable('Amador', ['Rose', 'Orchid'])
      ).to.equal(`The Amador are sold! You need to purchase more!`);

      expect(
        flowerShop.checkFlowersAvailable('Magnolia', ['Rose', 'Orchid'])
      ).to.equal(`The Magnolia are sold! You need to purchase more!`);
    });
  });

  describe('sellFlowers', function () {
    it('happy path', function () {
      expect(flowerShop.sellFlowers(['Rose', 'Lily', 'Orchid'], 2)).to.equal(
        `Rose / Lily`
      );

      expect(flowerShop.sellFlowers(['Rose', 'Lily', 'Orchid'], 1)).to.equal(
        `Rose / Orchid`
      );

      expect(
        flowerShop.sellFlowers(['Rose', 'Lily', 'Orchid', 'Magnolia'], 3)
      ).to.equal(`Rose / Lily / Orchid`);

      expect(flowerShop.sellFlowers(['Rose', 'Lily', 'Orchid'], 0)).to.equal(
        `Lily / Orchid`
      );
    });

    it('Exception', function () {
      expect(() =>
        flowerShop.sellFlowers(['Rose', 'Lily', 'Orchid'], 3)
      ).to.throw('Invalid input!');

      expect(() =>
        flowerShop.sellFlowers(['Rose', 'Lily', 'Orchid'], -1)
      ).to.throw('Invalid input!');

      expect(() =>
        flowerShop.sellFlowers(['Rose', 'Lily', 'Orchid'], 4)
      ).to.throw('Invalid input!');

      expect(() =>
        flowerShop.sellFlowers(['Rose', 'Lily', 'Orchid'], 15.123)
      ).to.throw('Invalid input!');

      expect(() =>
        flowerShop.sellFlowers(['Rose', 'Lily', 'Orchid'], 1.1)
      ).to.throw('Invalid input!');
      expect(() =>
        flowerShop.sellFlowers(['Rose', 'Lily', 'Orchid'], -2)
      ).to.throw('Invalid input!');

      expect(() => flowerShop.sellFlowers({}, -2)).to.throw('Invalid input!');

      expect(() => flowerShop.sellFlowers([], 2)).to.throw('Invalid input!');

      expect(() => flowerShop.sellFlowers('dsadasd', -2)).to.throw(
        'Invalid input!'
      );
    });
  });
});
