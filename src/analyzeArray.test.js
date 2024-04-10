import { analyzeArray } from "./analyzeArray";

test("invalid array", () => {
  expect(analyzeArray([])).toBe("invalid array");
});

test("should return correct analysis object for array [1,8,3,4,2,6]", () => {
  const inputArray = [1, 8, 3, 4, 2, 6];
  const expectedOutput = {
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  };

  const result = analyzeArray(inputArray);
  expect(result).toEqual(expectedOutput);
});
