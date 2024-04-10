import { Calculator } from "./calculator";
let calculator = new Calculator();

test("invalid numbers", () => {
  expect(() => calculator.add("a", "b")).toThrowError("invalid numbers");
});

test("add with positive numbers", () => {
  expect(calculator.add(5, 4)).toBe(9);
});

test("add with negative numbers", () => {
  expect(calculator.add(-5, -4)).toBe(-9);
});

test("add with negative and positive number", () => {
  expect(calculator.add(5, -4)).toBe(1);
});

test("subtract from bigger number", () => {
  expect(calculator.subtract(10, 5)).toBe(5);
});

test("subtract from smaller number", () => {
  expect(calculator.subtract(5, 10)).toBe(-5);
});

test("subtract two negatives number", () => {
  expect(calculator.subtract(-5, -10)).toBe(5);
});

test("divide positive whole numbers", () => {
  expect(calculator.divide(10, 2)).toBe(5);
});

test("divide negative whole numbers", () => {
  expect(calculator.divide(-10, -2)).toBe(5);
});

test("divide negative by positive number", () => {
  expect(calculator.divide(-10, 2)).toBe(-5);
});

test("divide decimals", () => {
  expect(calculator.divide(0.5, 2)).toBe(0.25);
});

test("divide by zero", () => {
  expect(calculator.divide(2, 0)).toBe("you can't divide by zero!");
});
test("multiply positive whole numbers", () => {
  expect(calculator.multiply(10, 2)).toBe(20);
});

test("multiply negative whole numbers", () => {
  expect(calculator.multiply(-10, -2)).toBe(20);
});

test("multiply negative by positive number", () => {
  expect(calculator.multiply(-10, 2)).toBe(-20);
});

test("multiply decimals", () => {
  expect(calculator.multiply(0.5, 2)).toBe(1);
});
