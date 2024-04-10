export function caesarCipher(string, key) {
  if (string.length === 0) {
    return "invalid string";
  }
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const capitalizedStr = string.toUpperCase();
  const cryptedArr = [];

  for (let i = 0; i < string.length; i++) {
    let char = capitalizedStr[i];
    if (!alphabet.includes(char)) {
      cryptedArr.push(char);
    } else {
      let index = alphabet.indexOf(char);
      let cryptedIndex = (index + key) % alphabet.length;
      let cryptedLetter = alphabet[cryptedIndex];
      cryptedArr.push(cryptedLetter);
    }
  }
  return cryptedArr.join("");
}
