// MODULES IN JAVASCRIPT:
const mathUtils = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b
  };
  
  const { add, subtract, multiply, divide } = mathUtils;
  
  console.log("Answer after Addition is = "+add(5, 3));       
  console.log("Answer after Subtraction is = "+subtract(8, 3));
  console.log("Answer after MUltiplication is = "+multiply(4, 6)); 
  console.log("Answer after Division is = "+divide(9, 3));  
  