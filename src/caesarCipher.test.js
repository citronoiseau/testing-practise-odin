import { caesarCipher } from "./caesarCipher";

test("invalid string", () => {
  expect(caesarCipher("", 3)).toBe("invalid string");
});

test("one-word string with shift 3", () => {
  expect(caesarCipher("Hello", 3)).toBe("KHOOR");
});

test("string with shift 3", () => {
  expect(
    caesarCipher(
      "Whereas disregard and contempt for human rights have resulted",
      3
    )
  ).toBe("ZKHUHDV GLVUHJDUG DQG FRQWHPSW IRU KXPDQ ULJKWV KDYH UHVXOWHG");
});

test("string with punctuation and symbols with shift 3", () => {
  expect(caesarCipher("Hello, world! I'm happy to be here <3", 3)).toBe(
    "KHOOR, ZRUOG! L'P KDSSB WR EH KHUH <3"
  );
});

test("string with shift 15", () => {
  expect(caesarCipher("Hello", 15)).toBe("WTAAD");
});
