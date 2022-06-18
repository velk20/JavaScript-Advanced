const { assert, expect } = require('chai');

const { companyAdministration } = require('../Company/companyAdministration');

describe('Tests companyAdministration object', function () {
  describe('hiringEmployee throws Error', function () {
    it('position is different from "Programmer"', function () {
      expect(() =>
        companyAdministration.hiringEmployee('angel', 'HR', 20)
      ).to.throw(`We are not looking for workers for this position.`);
    });

    it('position is different from "Programmer"', function () {
      expect(() =>
        companyAdministration.hiringEmployee('angel', 'Programmmmmer', 20)
      ).to.throw(`We are not looking for workers for this position.`);
    });

    it('position is different from "Programmer"', function () {
      expect(() =>
        companyAdministration.hiringEmployee('angel', '', 20)
      ).to.throw(`We are not looking for workers for this position.`);
    });

    it('position is different from "Programmer"', function () {
      expect(() => companyAdministration.hiringEmployee('angel', 20)).to.throw(
        `We are not looking for workers for this position.`
      );
    });
  });

  describe('hiringEmployee accepted', function () {
    it('Hiring', function () {
      expect(
        companyAdministration.hiringEmployee('angel', 'Programmer', 3)
      ).to.equal(`angel was successfully hired for the position Programmer.`);
    });

    it('Hiring', function () {
      expect(
        companyAdministration.hiringEmployee('angel', 'Programmer', 5)
      ).to.equal(`angel was successfully hired for the position Programmer.`);
    });
  });

  describe('hiringEmployee UNaccepted', function () {
    it('NO Hiring', function () {
      expect(
        companyAdministration.hiringEmployee('angel', 'Programmer', 2)
      ).to.equal(`angel is not approved for this position.`);
    });

    it('NO Hiring', function () {
      expect(
        companyAdministration.hiringEmployee('angel', 'Programmer', 1)
      ).to.equal(`angel is not approved for this position.`);
    });

    it('NO Hiring', function () {
      expect(
        companyAdministration.hiringEmployee('angel', 'Programmer', 0)
      ).to.equal(`angel is not approved for this position.`);
    });

    it('NO Hiring', function () {
      expect(
        companyAdministration.hiringEmployee('angel', 'Programmer')
      ).to.equal(`angel is not approved for this position.`);
    });
  });

  describe('calculateSalary', function () {
    it('Salary', function () {
      expect(companyAdministration.calculateSalary(10)).to.equal(150);
    });

    it('Salary', function () {
      expect(companyAdministration.calculateSalary(5)).to.equal(75);
    });

    it('Salary with Bonus', function () {
      expect(companyAdministration.calculateSalary(161)).to.equal(3415);
    });

    it('Salary with 0 hours', function () {
      expect(companyAdministration.calculateSalary(0)).to.equal(0);
    });
  });

  describe('calculateSalary with invalid hours', function () {
    it('Error', function () {
      expect(() => companyAdministration.calculateSalary(-1)).to.throw(
        'Invalid hours'
      );
    });

    it('Error', function () {
      expect(() => companyAdministration.calculateSalary('')).to.throw(
        'Invalid hours'
      );
    });
    it('Error', function () {
      expect(() => companyAdministration.calculateSalary([])).to.throw(
        'Invalid hours'
      );
    });
    it('Error', function () {
      expect(() => companyAdministration.calculateSalary({})).to.throw(
        'Invalid hours'
      );
    });

    it('Error', function () {
      expect(() => companyAdministration.calculateSalary(-1000)).to.throw(
        'Invalid hours'
      );
    });
    it('Error', function () {
      expect(() => companyAdministration.calculateSalary('2')).to.throw(
        'Invalid hours'
      );
    });
  });

  describe('firedEmployee with correct index', function () {
    it('firedEmployee', function () {
      expect(
        companyAdministration.firedEmployee(
          ['Peter', 'Ivan', 'George', 'John'],
          2
        )
      ).to.equal(`Peter, Ivan, John`);
    });

    it('firedEmployee', function () {
      expect(
        companyAdministration.firedEmployee(
          ['Peter', 'Ivan', 'George', 'John'],
          3
        )
      ).to.equal(`Peter, Ivan, George`);
    });

    it('firedEmployee', function () {
      expect(
        companyAdministration.firedEmployee(
          ['Peter', 'Ivan', 'George', 'John'],
          1
        )
      ).to.equal(`Peter, George, John`);
    });

    it('firedEmployee', function () {
      expect(
        companyAdministration.firedEmployee(
          ['Peter', 'Ivan', 'George', 'John'],
          0
        )
      ).to.equal(`Ivan, George, John`);
    });
  });

  describe('firedEmployee throws error', function () {
    it('firedEmployee', function () {
      expect(() =>
        companyAdministration.firedEmployee(
          ['Peter', 'Ivan', 'George', 'John'],
          5
        )
      ).to.throw('Invalid input');
    });

    it('firedEmployee', function () {
      expect(() => companyAdministration.firedEmployee([], 0)).to.throw(
        'Invalid input'
      );
    });

    it('firedEmployee', function () {
      expect(() => companyAdministration.firedEmployee({}, 0)).to.throw(
        'Invalid input'
      );
    });

    it('firedEmployee', function () {
      expect(() => companyAdministration.firedEmployee('Hei', 0)).to.throw(
        'Invalid input'
      );
    });

    it('firedEmployee', function () {
      expect(() => companyAdministration.firedEmployee(2, 0)).to.throw(
        'Invalid input'
      );
    });

    it('firedEmployee', function () {
      expect(() =>
        companyAdministration.firedEmployee(
          ['Peter', 'Ivan', 'George', 'John'],
          -1
        )
      ).to.throw('Invalid input');
    });

    it('firedEmployee', function () {
      expect(() =>
        companyAdministration.firedEmployee(
          ['Peter', 'Ivan', 'George', 'John'],
          29
        )
      ).to.throw('Invalid input');
    });

    it('firedEmployee', function () {
      expect(() =>
        companyAdministration.firedEmployee(
          ['Peter', 'Ivan', 'George', 'John'],
          4
        )
      ).to.throw('Invalid input');
    });
  });
});
