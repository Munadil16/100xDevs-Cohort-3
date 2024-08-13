/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs
  Once you've implemented the logic, test your code by running
*/

class Stack {
  constructor() {
    this.stack = [];
  }

  push(ch) {
    this.stack.push(ch);
  }

  pop() {
    return this.stack.pop();
  }

  length() {
    return this.stack.length;
  }
}

class Calculator {
  constructor() {
    this.result = 0;
  }

  add(number) {
    this.result += number;
  }

  subtract(number) {
    this.result -= number;
  }

  multiply(number) {
    this.result *= number;
  }

  divide(number) {
    if (number === 0) {
      throw new Error("Dividing by 0 is invalid");
    } else {
      this.result /= number;
    }
  }

  clear() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }

  calculate(expression) {
    if (!isValidExp(expression)) {
      throw new Error("Invalid expression: contains alphabets");
    }

    if (!isValidParentheses(expression)) {
      throw new Error("Invalid expression: contains wrong parentheses");
    }

    const cleanExp = expression.replace(/\s+/g, "");
    const evaluateExpression = eval(cleanExp);

    if (evaluateExpression === Infinity || evaluateExpression === -Infinity) {
      throw new Error("Dividing by 0 is invalid");
    }

    this.result = evaluateExpression;
  }
}

function isValidExp(exp) {
  return exp.search(/[a-zA-Z]/) === -1;
}

function isValidParentheses(exp) {
  const s = new Stack();

  for (let i = 0; i < exp.length; i++) {
    if (exp[i] === "(") {
      s.push(exp[i]);
    }

    if (exp[i] === ")" && s.pop() !== "(") {
      return false;
    }
  }

  return true;
}

module.exports = Calculator;
