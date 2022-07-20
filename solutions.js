function validateCreditCard(ccNum) {
  const numStr = "0123456789-";
  const numStr2 = "0123456789";
  const numArr = ccNum.split("");
  let sum = 0;

  for (let i = 0; i < numArr.length; i++) {
    if (numStr2.includes(numArr[i])) {
      sum += Number(numArr[i]);
    }
  }

  for (let i = 0; i < ccNum.length; i++) {
    if (ccNum.length == 16 + 3) {
      if (numArr.every((el) => numStr.includes(el))) {
        if (!numArr.every((el) => el == numArr[0])) {
          if (numArr[numArr.length - 1] % 2 == 0) {
            if (sum > 16) {
            } else {
              return `Invalid, number: ${ccNum}, error: sum of all the number should exceed 16`;
            }
          } else {
            return `Invalid, number: ${ccNum}, error: last cc number doesn't container an even number`;
          }
        } else {
          return `Invalid, number: ${ccNum}, error: cc number contains the same numbers`;
        }
      } else {
        return `Invalid, number: ${ccNum}, error: cc number includes other character`;
      }
    } else {
      return `Invalid, number: ${ccNum}, error: cc number is longer or shorter`;
    }
  }

  return `valid Credit card number`;
}
