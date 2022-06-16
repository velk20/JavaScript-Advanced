class CarDealership {
  constructor(name) {
    this.name = name;
    this.availableCars = [];
    this.soldCars = [];
    this.totalIncome = 0;
  }

  addCar(model, horsepower, price, mileage) {
    horsepower = parseInt(horsepower);
    price = Number(price);
    mileage = Number(mileage);

    if (!model) {
      throw new Error('Invalid input!');
    }

    if (horsepower < 0) {
      throw new Error('Invalid input!');
    }

    if (price < 0) {
      throw new Error('Invalid input!');
    }

    if (mileage < 0) {
      throw new Error('Invalid input!');
    }

    this.availableCars.push({
      model,
      horsepower,
      price,
      mileage,
    });

    return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(
      2
    )} km - ${price.toFixed(2)}$`.trim();
  }

  sellCar(model, desiredMileage) {
    const currentCar = this.availableCars.find((car) => car.model == model);

    if (!currentCar) {
      throw new Error(`${model} was not found!`);
    }

    if (currentCar.mileage <= desiredMileage) {
    } else {
      if (Math.abs(currentCar.mileage - desiredMileage) <= 40000) {
        currentCar.price *= 0.95;
      }

      if (Math.abs(currentCar.mileage - desiredMileage) > 40000) {
        currentCar.price *= 0.9;
      }
    }

    this.availableCars.splice(this.availableCars.indexOf(currentCar), 1);
    this.soldCars.push({
      model: currentCar.model,
      horsepower: currentCar.horsepower,
      soldPrice: currentCar.price,
    });

    this.totalIncome += currentCar.price;

    return `${model} was sold for ${currentCar.price.toFixed(2)}$`.trim();
  }

  currentCar() {
    if (this.availableCars.length == 0) return 'There are no available cars';

    let res = '';
    res += '-Available cars:\n';
    for (const car of this.availableCars) {
      res += `---${car.model} - ${car.horsepower} HP - ${car.mileage.toFixed(
        2
      )} km - ${car.price.toFixed(2)}$\n`;
    }

    return res.trim();
  }

  salesReport(criteria) {
    if (criteria == 'horsepower') {
      this.soldCars.sort((a, b) => b.horsepower - a.horsepower);
    } else if (criteria == 'model') {
      this.soldCars.some((a, b) => a.localCompare(b));
    } else {
      throw new Error('Invalid criteria!');
    }

    let res = '';
    let totalIncome = 0;
    this.soldCars.forEach((car) => (totalIncome += car.soldPrice));
    res += `-${this.name} has a total income of ${totalIncome.toFixed(2)}$\n`;
    res += `-${this.soldCars.length} cars sold:\n`;

    this.soldCars.forEach(
      (car) =>
        (res += `---${car.model} - ${
          car.horsepower
        } HP - ${car.soldPrice.toFixed(2)}$\n`)
    );

    return res.trim();
  }
}
let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
console.log(dealership.sellCar('Toyota Corolla', 230000));
console.log(dealership.sellCar('Mercedes C63', 110000));
