const obj = {
  name: 'Peter',
  age: 23,
};

console.log(obj);

Object.defineProperty(obj, 'lastName', {
  value: 'Jackson',
  enumerable: true,
  writable: true,
  configurable: true,
});

console.log(Object.getOwnPropertyDescriptors(obj));

//* Object.seal()

Object.seal(obj); // lock the Object cant add new properties cant modify old

//* Object.freeze()
