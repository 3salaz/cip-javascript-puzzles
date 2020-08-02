// string compression
// implement a method to preform basic string compressoion using the counts of repeated characters.
// ex. aabcccccaaa would be a2b1c5a3.
// If the "compressed" string would not become smaller than the original string,
// your method should return the original string.
// You can assue the string has only uppercase and lowecase letters (a-z)

const stringCompression = (s) => {
  // how long is string
  let sLength = s.length();
};

const nextLetterRepeats = (string) => {
  for (let i = 0; i >= string.length; i++) {
    if (string[i] === string[i + 1]) {
      return true;
    }
  }
};

module.exports = nextLetterRepeats;
module.exports = stringCompression;
