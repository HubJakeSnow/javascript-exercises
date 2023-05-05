const sumAll = function(firstNum, secondNum) {
    if (typeof firstNum !== 'number'|| typeof secondNum !== 'number' || firstNum < 0 || secondNum < 0) {
        return "ERROR";
    } else if (firstNum > secondNum) {
        let sum = 0
        for (let i = secondNum; i <= firstNum; i++) {
            sum += i;
        } 
        return sum;
    } else {
        let sum = 0
        for (let i = firstNum; i <= secondNum; i++) {
            sum += i;
        } 
        return sum;
    }
};

module.exports = sumAll;

// THIS IS THE SOLUTION CODE. BOTH WORK THE SAME, BUT THIS CODE IS MORE EFFICIENT:
// const sumAll = function (min, max) {
//   if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
//   if (min < 0 || max < 0) return "ERROR";
//   if (min > max) {
//     const temp = min;
//     min = max;
//     max = temp;
//   }
//   let sum = 0;
//   for (let i = min; i < max + 1; i++) {
//     sum += i;
//   }

//   return sum;
// };

// module.exports = sumAll;