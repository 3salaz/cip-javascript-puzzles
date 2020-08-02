const stringCompression = require("../stringCompression");
const nextLetterRepeats = require("../stringCompression");

test("compresses string to template", () => {
  expect(nextLetterRepeats("aabbcccd")).toBe(a2b2c3d);
});
