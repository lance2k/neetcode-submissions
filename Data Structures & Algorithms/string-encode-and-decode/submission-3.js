class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs) {
    let encodedStr = "";
    for (const str of strs) {
      encodedStr += str.length + "#" + str;
    }
    return encodedStr;
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str) {
    let strArray = [];
    let i = 0;
    while (i < str.length) {
      let j = i;
      // Find the position of the delimiter
      while (str[j] !== "#") {
        j++;
      }
      // Extract the length of the next string
      let length = parseInt(str.substring(i, j), 10);
      // Extract the actual string
      strArray.push(str.substring(j + 1, j + 1 + length));
      // Move to the next encoded string
      i = j + 1 + length;
    }
    return strArray;
  }
}