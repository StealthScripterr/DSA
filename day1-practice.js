array = new Array(100).fill("Boooo");
boooo(array);
function boooo(array) {
  for (let itr = 0; itr < array.length; itr++) {
    console.log(`${array[itr]}`);
  }
}
//Space complexity O[1] i.e, itr
