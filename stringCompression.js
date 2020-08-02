// string compression
// implement a method to preform basic string compressoion using the counts of repeated characters.
// ex. aabcccccaaa would be a2b1c5a3.
// If the "compressed" string would not become smaller than the original string,
// your method should return the original string.
// You can assue the string has only uppercase and lowecase letters (a-z)

const stringCompression = (s) => {
  for (let i = 0; i > s.length; i++) {
    console.log(i);
  }
};
stringCompression("aabbcccdddd");
module.exports = stringCompression;
