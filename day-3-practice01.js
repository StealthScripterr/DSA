const arr1 = ["a", "b", "c", "d"];
const arr2 = ["a", "y", "z"];

function hasCommonElement(array1, array2) {
  let itr1 = 0;
  array1 = array1.concat(array2);
  array1 = array1.sort();
  while (itr1 < array1.length - 1) {
    if (array1[itr1] === array1[itr1 + 1]) {
      return true;
    }
    itr1++;
  }
  return false;
}

console.log(hasCommonElement(arr1, arr2));
