/* task 1 */

const arr = [`a`, `b`, `c`, `d`];

const str = `${String(arr[0])}+${String(arr[1])},${String(arr[2])}+${String(
  arr[3]
)}`;
alert(str);

/* ниже находится мой второй способ решения, изменяющий текущий массив,
   что не ограничено условием ТЗ. */

arr.splice(1, 0, `+`);
arr.splice(3, 0, `,`);
arr.splice(5, 0, `+`);
alert(arr.join(``));

/* ниже находится мой первый способ решения, к которому пришёл сначала.
   Очень громоздкий и много дополнительных переменных, содержащих массивы,
   что не хорошо, но это пробный рабочий вариант, пусть и не оптимальный */

const firstHalfArr = arr.slice(0, 2);
firstHalfArr.splice(1, 0, `+`);
firstHalfArr.splice(3, 0, `,`);
const firstHalfStr = firstHalfArr.join(``);
const secondHalfArr = arr.slice(2);
secondHalfArr.splice(1, 0, `+`);
const secondHalfStr = secondHalfArr.join(``);
const str = firstHalfStr.concat(secondHalfStr);
alert(str);

/* task 2 */

const arr = [2, 5, 3, 9];
const result = arr[0] * arr[1] + arr[2] * arr[3];
alert(result);

/* task 3 */

const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
alert(arr[1][0]);

/* task 4 */

const obj = { js: ["jQuery", "Angular"], php: "hello", css: "world" };
const searchWord = obj.js[0];
alert(searchWord);

/* task 5 */

const arr = [];
let letter = `x`;
for (let i = 0; i < 5; i++) {
  arr.push(letter);
  letter += `x`;
}
alert(arr);

/* task 6 */

const arr = [];
/* начинаю внешний цикл со счётчика со значением `1`, чтобы была возможность
   во вложенном цикле, где счётчик начинается с `0`, вставить первым числом в
   массив `1`. */
for (let i = 1; i < 5; i++) {
  let outputStr = "";
  /* создаю переменную во внешнем цикле, в которую
     буду накапливать результат с помощью конкатенации строк во
     вложенном цикле. Возможно, есть способ проще,
     но я не придумал реализацию, кроме как двумя циклами. */
  for (let j = 0; j < i; j++) {
    outputStr = outputStr + i;
  }
  arr.push(outputStr);
}
alert(arr);

/* task 7 */

function arrayFill(item, amountItems) {
  const arr = [];
  for (let i = 0; i < amountItems; i++) {
    arr.push(item);
  }
  return arr;
}
alert(arrayFill(`x`, 5));

/* task 8 */

const arr = [1, 3, 2, 0, 0, 0, 3, 2, 15, 5, 1];
function countFirstItems(array) {
  let sum = 0;
  for (let i = 0; i <= array.length; i++) {
    sum += array[i];
    if (sum > 10) {
      return i + 1;
    }
  }
}
console.log(countFirstItems(arr)); // 8

let sumFirstElem = arr.reduce(
   (accum, item) => {
     if (accum.sum > 10) return accum;
     accum.sum += item;
     accum.amountElems += 1;
     return accum;
  },
  { sum: 0, amountElems: 0 }
 ).amountElems;
 console.log(sumFirstElem);

/* task 9 */

const arr = [7, 6, 5, 4, 3, 2, 1];
const reverseArr = [];
for (let i = arr.length - 1; i >= 0; i--) {
  reverseArr.push(arr[i]);
}
alert(reverseArr);

/* task 10 */

const arr = [[1, 2, 3], [4, 5], [6]];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    sum += arr[i][j];
  }
}
alert(sum);

 const arr = [[1, 2, 3], [4, 5], [6]];
 const sumArr = arr
   .reduce((accum, item) => accum.concat(item))
   .reduce((accum, item) => accum + item, 0);
 console.log(sumArr);

/* task 11 */

const arr = [
  [
    [1, 2],
    [3, 4],
  ],
  [
    [5, 6],
    [7, 8],
  ],
];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    for (let z = 0; z < arr[i][j].length; z++) {
      sum += arr[i][j][z];
    }
  }
}
alert(sum);

const sumElemsArr = arr
   .flat(Infinity)
   .reduce((sum, currentItem) => sum + currentItem, 0);
console.log(sumElemsArr); //создаём новый массив
