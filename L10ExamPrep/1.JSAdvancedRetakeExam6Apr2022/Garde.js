class Garden {
  constructor(spaceAvailable) {
    this.spaceAvailable = Number(spaceAvailable);
    this.plants = [];
    this.storage = [];
  }

  addPlant(plantName, spaceRequired) {
    if (this.spaceAvailable - Number(spaceRequired) < 0) {
      throw new Error('Not enough space in the garden.');
    }

    this.plants.push({
      plantName,
      spaceRequired,
      ripe: false,
      quantity: 0,
    });

    this.spaceAvailable -= Number(spaceRequired);

    return `The ${plantName} has been successfully planted in the garden.`;
  }

  ripenPlant(plantName, quantity) {
    const currentPlant = this.plants.find(
      (plant) => plant.plantName == plantName
    );
    if (!currentPlant) {
      throw new Error(`There is no ${plantName} in the garden.`);
    }

    if (currentPlant.ripe) {
      throw new Error(`The ${plantName} is already ripe.`);
    }

    if (quantity <= 0) {
      throw new Error('The quantity cannot be zero or negative.');
    }

    currentPlant.ripe = true;
    currentPlant.quantity += Number(quantity);

    return quantity == 1
      ? `${quantity} ${plantName} has successfully ripened.`
      : `${quantity} ${plantName}s have successfully ripened.`;
  }

  harvestPlant(plantName) {
    const currentPlant = this.plants.find(
      (plant) => plant.plantName == plantName
    );
    if (!currentPlant) {
      throw new Error(`There is no ${plantName} in the garden.`);
    }

    if (!currentPlant.ripe) {
      throw new Error(
        `The ${plantName} cannot be harvested before it is ripe.`
      );
    }

    this.plants.splice(this.plants.indexOf(currentPlant), 1);
    this.storage.push({
      plantName: currentPlant.plantName,
      quantity: currentPlant.quantity,
    });

    this.spaceAvailable += currentPlant.spaceRequired;

    return `The ${plantName} has been successfully harvested.`;
  }

  generateReport() {
    let res = '';
    res += `The garden has ${this.spaceAvailable} free space left.\n`;

    //*alphabetically
    this.plants.sort((a, b) => a.localeCompare(b));

    res += `Plants in the garden: ${this.plants
      .map((plant) => plant.plantName)
      .join(', ')}\n`;

    if (this.storage.length == 0) {
      res += 'Plants in storage: The storage is empty.\n';
    } else {
      res += `Plants in storage: `;

      let stor = this.storage;

      for (let i = 0; i < stor.length; i++) {
        const { plantName, quantity } = stor[i];
        if (i == stor.length - 1) {
          res += `${plantName} (${quantity})`;
        } else {
          res += `${plantName} (${quantity}), `;
        }
      }
    }

    return res;
  }
}
const myGarden = new Garden(250);
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.generateReport());
