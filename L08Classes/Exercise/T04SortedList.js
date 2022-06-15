class List {
  constructor() {
    this.size = 0;
    this.list = [];
  }

  add(value) {
    this.list.push(value);
    this.size++;

    this.list.sort((a, b) => a - b);
  }

  remove(index) {
    this.checkOutOfBounds(index);
    this.list.splice(index, 1);
    this.size--;
  }

  get(index) {
    this.checkOutOfBounds(index);
    return this.list[index];
  }

  checkOutOfBounds(index) {
    if (index < 0 || index >= this.list.length) {
      throw new Error('Out of Bounds');
    }
  }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
