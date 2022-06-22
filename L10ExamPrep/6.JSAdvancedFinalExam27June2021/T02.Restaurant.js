class Restaurant {
  constructor(budget) {
    this.budgetMoney = Number(budget);
    this.menu = {};
    this.stockProducts = {};
    this.history = [];
  }

  loadProducts(products) {
    for (const product of products) {
      let [name, quantity, totalPrice] = product.split(' ');
    }
  }

  addToMenu() {}

  showTheMenu() {}

  makeTheOrder() {}
}
