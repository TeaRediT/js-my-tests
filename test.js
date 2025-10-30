function sumOfDifferences(arr) {
  let sum = 0;
  const arrSorted = arr.sort((a, b) => b - a);

  for (let i = 0; i < arrSorted.length - 1; i++) {
    sum += arrSorted[i] - arrSorted[i + 1];
    console.log(sum);
  }
  return sum;
}

console.log(sumOfDifferences([1, 2, 10]));
