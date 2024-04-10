export function reverseString(string) {
  if (string.length === 0) {
    return "invalid string";
  }
  let newStr = "";
  for (let i = string.length - 1; i >= 0; i--) {
    newStr += string[i];
  }
  return newStr;
}
