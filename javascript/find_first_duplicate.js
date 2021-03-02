function findFirstDuplicate(arr) {
  let mySet1 = new Set;
  for (let i in arr) {
    mySet1.add(arr[i]);
  }
  if (mySet1.size != arr.length) {
    return arr[mySet1.size];
  } else {
    return -1;
  };
}


console.log(findFirstDuplicate([2]));
console.log(findFirstDuplicate([2, 1, 3, 2, 1, 3, 3, 2]));
console.log(findFirstDuplicate([1, 2, 3, 4]));
console.log(findFirstDuplicate([1, 2, 3, 4, 5, 6, 7, 8, 8]));


if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// And a written explanation of your solution
