export class Calculator {
  add(x, y) {
    checkValidity(x, y);
    return x + y;
  }
  subtract(x, y) {
    checkValidity(x, y);
    return x - y;
  }
  divide(x, y) {
    checkValidity(x, y);
    if (y === 0) {
      return "you can't divide by zero!";
    }
    return x / y;
  }
  multiply(x, y) {
    checkValidity(x, y);
    return x * y;
  }
}
function checkValidity(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    throw new Error("invalid numbers");
  }
}
