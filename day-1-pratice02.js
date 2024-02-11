//find 1st and last tweets;
function findFirstAndLastTweet(array) {
  console.log(array[0]);
  console.log(array[array.length - 1]);
}

const array1 = [
  {
    tweet: "Hi",
    date: 2012,
  },
  {
    tweet: "Hello",
    date: 2013,
  },
  {
    tweet: "How",
    date: 2014,
  },
  {
    tweet: "are",
    date: 2016,
  },
  {
    tweet: "you",
    date: 2018,
  },
  {
    tweet: "Hi",
    date: 2012,
  },
];

const findNemo0 = (array) => {
  array.forEach((fish) => {
    if (fish === "Nemo") {
      console.log("Found the fish");
    }
  });
};
const findNemo1 = (array) => {
  for (let fish of array) {
    if (fish === "Nemo") {
      console.log("Found the fish");
    }
  }
};
const large = new Array(5).fill("Nemo");
findNemo0(large);
findNemo1(large);
