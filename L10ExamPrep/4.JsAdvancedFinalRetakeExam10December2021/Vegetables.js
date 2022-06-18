class VegetableStore {
  constructor(owner, location) {
    this.owner = owner;
    this.location = location;
    this.availableProducts = [];
  }

  findAlreadyExistProduct(vegetableType) {
    return this.availableProducts.find((x) => x.type == vegetableType);
  }

  loadingVegetables(vegetables) {
    let newTypes = new Set();
    for (const vegetable of vegetables) {
      let [type, quantity, price] = vegetable.split(' ');
      quantity = Number(quantity);
      price = Number(price);

      const currentVegetable = this.findAlreadyExistProduct(type);
      if (currentVegetable) {
        currentVegetable.quantity += quantity;
        if (currentVegetable.price <= price) {
          currentVegetable.price = price;
        }
      } else {
        this.availableProducts.push({
          type,
          quantity,
          price,
        });

        newTypes.add(type);
      }
    }

    let allAddedTypes = Array.from(newTypes).join(', ');
    return `Successfully added ${allAddedTypes}`;
  }

  buyingVegetables(selectedProducts) {
    let totalPrice = 0.0;

    for (const product of selectedProducts) {
      let [type, quantity] = product.split(' ');
      quantity = Number(quantity);

      let currentProduct = this.findAlreadyExistProduct(type);
      if (!currentProduct)
        throw new Error(
          `${type} is not available in the store, your current bill is $${totalPrice.toFixed(
            2
          )}.`
        );

      if (quantity > currentProduct.quantity) {
        throw new Error(
          `The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(
            2
          )}.`
        );
      }

      let currentPrice = currentProduct.price * quantity;
      currentProduct.quantity -= quantity;

      totalPrice += currentPrice;
    }

    return `Great choice! You must pay the following amount $${totalPrice.toFixed(
      2
    )}.`;
  }

  rottingVegetable(type, quantity) {
    let currentProduct = this.findAlreadyExistProduct(type);

    if (!currentProduct)
      throw new Error(`${type} is not available in the store.`);

    if (Number(quantity) > currentProduct.quantity) {
      currentProduct.quantity = 0;
      return `The entire quantity of the ${type} has been removed.`;
    }

    currentProduct.quantity -= Number(quantity);
    return `Some quantity of the ${type} has been removed.`;
  }

  revision() {
    let result = [];
    result.push('Available vegetables:');

    this.availableProducts
      .sort((a, b) => a.price - b.price)
      .forEach((e) => result.push(`${e.type}-${e.quantity}-$${e.price}`));

    result.push(
      `The owner of the store is ${this.owner}, and the location is ${this.location}.`
    );

    return result.join('\n');
  }
}

let vegStore = new VegetableStore('Jerrie Munro', '1463 Pette Kyosheta, Sofia');
console.log(
  vegStore.loadingVegetables([
    'Okra 2.5 3.5',
    'Beans 10 2.8',
    'Celery 5.5 2.2',
    'Celery 0.5 2.5',
  ])
);
console.log(vegStore.rottingVegetable('Okra', 1));
console.log(vegStore.rottingVegetable('Okra', 2.5));
console.log(vegStore.buyingVegetables(['Beans 8', 'Celery 1.5']));
console.log(vegStore.revision());
