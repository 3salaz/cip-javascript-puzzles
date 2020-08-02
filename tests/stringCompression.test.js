const stringCompression = require("../stringCompression");
const nextLetterRepeats = require("../stringCompression");

test("If the compressed string would not become smaller than the original string,your method should return the original string", () => {
  expect(stringCompression("aabbcccd")).toBe("a2b2c3d");
});

test("does first letter repeat", () => {
  expect(nextLetterRepeats("aabbcccd")).toBeTruthy();
});
