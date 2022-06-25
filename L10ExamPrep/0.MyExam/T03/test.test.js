const { carService } = require('./03. Car service_Resources');
const { expect } = require('chai');

describe('Tests', function () {
  describe('isItExpensive', function () {
    it('happyPath', function () {
      expect(carService.isItExpensive('Engine')).equal(
        `The issue with the car is more severe and it will cost more money`
      );
      expect(carService.isItExpensive('Transmission')).equal(
        `The issue with the car is more severe and it will cost more money`
      );

      expect(carService.isItExpensive('Glass')).equal(
        `The overall price will be a bit cheaper`
      );

      expect(carService.isItExpensive('')).equal(
        `The overall price will be a bit cheaper`
      );
    });
  });

  describe('discount', function () {
    it('happyPath with 2', function () {
      expect(carService.discount(2, 100)).equal('You cannot apply a discount');
    });
    it('happyPath with bellow 2 parts', function () {
      expect(carService.discount(1, 100)).equal('You cannot apply a discount');
    });
    it('happyPath', function () {
      expect(carService.discount(0, 100)).equal('You cannot apply a discount');
    });
    it('happyPath', function () {
      expect(carService.discount(-1, 100)).equal('You cannot apply a discount');
    });
    it('happyPath', function () {
      expect(carService.discount(-2, 100)).equal('You cannot apply a discount');
    });
  });

  describe('discount with more 2 parts', function () {
    it('happyPath', function () {
      expect(carService.discount(3, 100)).equal(
        `Discount applied! You saved 15$`
      );
    });
    it('happyPath', function () {
      expect(carService.discount(4, 100)).equal(
        `Discount applied! You saved 15$`
      );
    });
    it('happyPath', function () {
      expect(carService.discount(5, 100)).equal(
        `Discount applied! You saved 15$`
      );
    });
    it('happyPath', function () {
      expect(carService.discount(6, 100)).equal(
        `Discount applied! You saved 15$`
      );
    });
    it('happyPath', function () {
      expect(carService.discount(7, 100)).equal(
        `Discount applied! You saved 15$`
      );
    });
  });

  describe('discount with more 7 parts', function () {
    it('happyPath', function () {
      expect(carService.discount(8, 100)).equal(
        `Discount applied! You saved 30$`
      );
      expect(carService.discount(9, 100)).equal(
        `Discount applied! You saved 30$`
      );
      expect(carService.discount(10, 100)).equal(
        `Discount applied! You saved 30$`
      );
      expect(carService.discount(11, 100)).equal(
        `Discount applied! You saved 30$`
      );
      expect(carService.discount(100, 100)).equal(
        `Discount applied! You saved 30$`
      );
    });
  });

  describe('discount with more 7 parts', function () {
    it('sadpath', function () {
      expect(() => carService.discount({}, [])).throw('Invalid input');
    });
    it('sadpath', function () {
      expect(() => carService.discount('', '')).throw('Invalid input');
    });
    it('sadpath', function () {
      expect(() => carService.discount('2', '100')).throw('Invalid input');
    });
    it('sadpath', function () {
      expect(() => carService.discount({}, {})).throw('Invalid input');
    });
    it('sadpath', function () {
      expect(() => carService.discount([], [])).throw('Invalid input');
    });
    it('sadpath', function () {
      expect(() => carService.discount('2', 100)).throw('Invalid input');
    });
    it('sadpath', function () {
      expect(() => carService.discount(2, '100')).throw('Invalid input');
    });
    it('sadpath', function () {
      expect(() => carService.discount(undefined, undefined)).throw(
        'Invalid input'
      );
    });
  });

  describe('partsToBuy', function () {
    it('happyPath', function () {
      expect(carService.partsToBuy([], ['blowoff valve', 'injectors'])).equal(
        0
      );
      expect(carService.partsToBuy([], [])).equal(0);

      expect(
        carService.partsToBuy(
          [
            { part: 'blowoff valve', price: 145 },
            { part: 'coil springs', price: 230 },
          ],
          ['blowoff valve', 'injectors']
        )
      ).equal(145);

      expect(
        carService.partsToBuy(
          [
            { part: 'blowoff valve', price: 145 },
            { part: 'coil springs', price: 230 },
          ],
          ['blowoff valve', 'coil springs']
        )
      ).equal(375);

      expect(
        carService.partsToBuy(
          [
            { part: 'blowoff valve', price: 145 },
            { part: 'coil springs', price: 230 },
          ],
          ['seks', 'keks']
        )
      ).equal(0);

      expect(() => carService.partsToBuy({}, {})).to.throw('Invalid input');
      expect(() => carService.partsToBuy(undefined, undefined)).to.throw(
        'Invalid input'
      );
      expect(() => carService.partsToBuy('', '')).to.throw('Invalid input');
      expect(() => carService.partsToBuy(1, 1)).to.throw('Invalid input');
      expect(() => carService.partsToBuy(0, 0)).to.throw('Invalid input');
      expect(() => carService.partsToBuy(null, null)).to.throw('Invalid input');
    });
  });
});
