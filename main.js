//Bir sayı dizisi ve hedef değeri veriliyor. Toplamı, hedefe eşit olan ikililerin indexlerini dönen fonksiyonu yazınız.

//Örnek Dizilerimiz
const example1Array = [2, 7, 11, 15];
const target1 = 9;
const example2Array = [3, 2, 4];
const target2 = 6;
const example3Array = [3, 3];
const target3 = 6;

function findresult(arr, target) {
    result = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == target) {
        let tmp = [i, j];
        result.push(tmp);
      }
    }
  }
  return result;
}
//date.now() kullanılarak execution time hesaplanmıştır.
let start = Date.now();
console.log(findresult(example1Array, target1));
console.log(findresult(example2Array, target2));
console.log(findresult(example3Array, target3));
let end = Date.now();
// execution time = 9ms
console.log(`Execution time: ${end - start} ms`);