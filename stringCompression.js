// string compression
// implement a method to preform basic string compressoion using the counts of repeated characters.
// ex. aabcccccaaa would be a2b1c5a3.
// If the "compressed" string would not become smaller than the original string,
// your method should return the original string.
// You can assue the string has only uppercase and lowecase letters (a-z)

const stringCompression = (s) => {
  let nString = "";
  for (let i = 0; i < s.length; i++) {
    let prevChar = s[i - 1];
    let currentChar = s[i];
    let nextChar = s[i + 1];
    let charDoubleAmount = 1;

    nString += currentChar;

    if (currentChar === nextChar) {
      charDoubleAmount++;
    }

    if (currentChar === prevChar) {
      nString = nString.substring(0, s.length - 1);
    }

    if (charDoubleAmount > 1) {
      let doubleAmount = charDoubleAmount.toString();
      nString += doubleAmount;
    }
  }
  return nString;
};
console.log(stringCompression("aabbcccd"));

module.exports = stringCompression;
