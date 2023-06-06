function fibonacci(n) {
    const num = Number(n); // Convert the input to a number
    if (num === 0) return 0;
    if (isNaN(num)|| num < 0){
      return ("OOPS");
    }
  
    if (num <= 1) {
      return num;
    }
    
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
  
// Do not edit below this line
module.exports = fibonacci;
