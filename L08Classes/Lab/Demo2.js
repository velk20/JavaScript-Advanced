// * Maps
const myMap = new Map();
myMap.set('Peter', 23);
myMap.set('George', 25);
console.log(myMap.size);

console.log(myMap.entries());
console.log(myMap.keys());
console.log(myMap.values());

for (const entry of myMap) {
  console.log(entry[0]);
  console.log(entry[1]);
}

console.log(myMap.get('Peter')); // 23

console.log(myMap.has('George')); // true

myMap.delete('George');

myMap.clear();

//* Set
let set = new Set([1, 2, 3, 3, 3, 3, 3, 3, 3, 4, 5, 6, 6]);
set.add(7);
console.log(set);

//* WeakMap / WeakSet
let newMap = new WeakMap();
