//log all pairs of array
const boxes = [1, 2, 3, 4, 5];
boxes.forEach(function (box1) {
  boxes.forEach(function (box2) {
    console.log(`${box1},${box2} = ${box1 + box2}\n`);
  });
});

/* boxes.forEach((elements1) =>
  boxes.forEach((elements2) => console.log(`${elements1},${elements2}\n`))
); */
