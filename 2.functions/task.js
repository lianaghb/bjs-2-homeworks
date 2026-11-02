function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  let avg = 0;
  let sum = 0;
  
  for (let i = 0; i < arr.length; i++) {

    if (arr[i] > max) {
      max = arr[i];
    }

    if (arr[i] < min) {
      min = arr[i];
    }

    sum += arr[i];
  }
  avg = Number((sum/arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let sum = arr.reduce((now, num) => now + num, 0);
  return sum;
}

function differenceMaxMinWorker(...arr) {

  if (arr.length === 0) {
    return 0;
  }

  let max = Math.max(...arr);
  let min = Math.min(...arr);
  let difference = max - min;
  return difference;
}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]%2 === 0) {
      sumEvenElement += arr[i]; 
    } else {
      sumOddElement += arr[i]; 
    }
  }
  let difference = sumEvenElement - sumOddElement;
  return difference;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]%2 === 0) {
      sumEvenElement += arr[i]; 
      countEvenElement++;
    }
  }
    
  if (countEvenElement === 0) {
    return 0;
  }

  return (sumEvenElement/countEvenElement);
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    let result = func.apply(null, arrOfArr[i]);
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }
  return maxWorkerResult;
}
