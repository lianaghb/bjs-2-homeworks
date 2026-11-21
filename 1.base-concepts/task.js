"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = (b**2) - (4*a*c);
  if (d === 0){
    let result = (b*(-1))/(2*a);
    arr.push(result);
  }

  if (d > 0){
    let result1 =  (-1*b + Math.sqrt(d) )/(2*a);
    let result2 = (-1*b - Math.sqrt(d) )/(2*a);
    arr.push(result1);
    arr.push(result2);
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  const monthlyPercent = percent / 100 / 12;
  const loanBody = amount - contribution;
  const monthlyPayment = loanBody * (monthlyPercent + monthlyPercent / (((1 + monthlyPercent) ** countMonths) - 1));
  const totalAmount = monthlyPayment * countMonths;
  return Math.round(totalAmount * 100) / 100;
}