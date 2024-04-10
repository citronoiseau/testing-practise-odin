import { reverseString } from "./reverse";

test("invalid string", () => {
  expect(reverseString("")).toBe("invalid string");
});

test("inverse one-word string", () => {
  expect(reverseString("puppy")).toBe("yppup");
});

test("inverse sentence string", () => {
  expect(reverseString("What a lovely puppy")).toBe("yppup ylevol a tahW");
});

test("inverse sentence string with symbols and ", () => {
  expect(reverseString("Wh@t lovely 34 puppies!!")).toBe(
    "!!seippup 43 ylevol t@hW"
  );
});
