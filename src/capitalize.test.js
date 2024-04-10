import { capitalize } from "./capitalize";

test("first letter in one-word string should be capitalized", () => {
  expect(capitalize("puppy")).toBe("Puppy");
});

test("invalid string", () => {
  expect(capitalize("")).toBe("invalid string");
});

test("first capitalized letter in one-word string shouldn't be changed", () => {
  expect(capitalize("Puppy")).toBe("Puppy");
});

test("capitalized string shouldn't be changed", () => {
  expect(capitalize("PUPPY")).toBe("PUPPY");
});

test("first letter in sentence string should be capitalized", () => {
  expect(capitalize("look a puppy")).toBe("Look a puppy");
});

test("symbols and numbers should not be an obstacle", () => {
  expect(capitalize("!!!239look!!!a puppy!!!")).toBe("!!!239Look!!!a puppy!!!");
});
