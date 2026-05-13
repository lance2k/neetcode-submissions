class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
      let encodedStr = "";
      for (const word of strs) {
        encodedStr += word.length + "#"  + word;
      }
      
      return encodedStr;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
      const decodedStr = [];
      let l = 0;

      while (l < str.length) {
        let i = l;
        //find delimeter
        while (str[i] !== '#') {
          i++;
        }
        //get length of string
        const strLength = parseInt(str.slice(l, i), 10);
        //find whole word using the length
        const strWord = str.slice(i+1, i + strLength + 1);
        //push the word to the result
        decodedStr.push(strWord)

        //update pointer
        l = i + strLength + 1;


      }
      return decodedStr;
    }
}
