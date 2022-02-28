  // bir sayı dizisi ve hedef değeri veriliyor. Toplamı, hedefe eşit olan ikililerin indexlerini dönen fonksiyonu yazınız.

  // diziler ve target'lar
const nums1Array = [2, 15, 11, 7];
const target1 = 9;
const nums2Array = [3, 2, 4];
const target2 = 6;
const nums3Array = [3, 3];
const target3 = 6;
  //dizi elemanları target ile eşleşiyor mu kontrolü
function findresult(arr, target) {
    result = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == target) {
        result.push([i, j]);
      }
    }
  }
  return result;
}
  // diziler ve hedefler yazdırılarak, işlem çıktısı ve süresi
console.log('Array : '+nums1Array+' Target : '+target1);
start = Date.now();
console.log(findresult(nums1Array, target2));
console.log('1. algoritma : '+(Date.now() - start) + 'ms de tamamlandı');

console.log("------------------------------------------------")

console.log('Array : '+nums2Array+' Target : '+target2);
start = Date.now();
console.log(findresult(nums2Array, target2));
console.log('1. algoritma : '+(Date.now() - start) + 'ms de tamamlandı');

console.log("------------------------------------------------")

console.log('Array : '+nums3Array+' Target : '+target3);
start = Date.now();
console.log(findresult(nums3Array, target3));
console.log('1. algoritma : '+(Date.now() - start) + 'ms de tamamlandı');