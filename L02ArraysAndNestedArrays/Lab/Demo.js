const arr = [10, 12];

arr[3] = 10;
console.log(arr)
console.log(arr[2]);

//rest operator
console.log('rest operator')
const myArr = [10, 20, 30, 40, 50];
const [a, b, ...parm] = myArr;

console.log(a);
console.log(b);
console.log(parm);

//ARRAYS METHODS
console.log('Arrays methods')
//pop
const array = [10, 20, 30, 40, 50];
console.log(array.pop()); // 50
//push
array.push(51);//[10, 20, 30, 40, 51];
console.log(array)

//Sorting
array.sort((a, b) => b-a);//NUmbers
console.log(array)
const strArr = ['Bob', "Caty",'angel' ];
console.log(strArr.sort((a, b) => a.localeCompare(b)));//Strings

array.forEach(e => console.log(e));

console.log(array.reduce((a, b) => a + b,0));
