class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
      let res = "";
      
      for (const word of strs) {
        res += word.length +"#"+word;
      }
      console.log(res);
      
      return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
      let res = [];
      let i = 0;

      while (i < str.length) {
        let j = i;

        //find the end of separator #
        while (str[j] !== '#') {
          j++;
        }
        //j is at # position
        // i to j exclusive is word length
        const wordLength = parseInt(str.slice(i, j), 10);
        // get the word
        const word = str.slice(j+1, wordLength+j+1);
        console.log(wordLength);
        console.log(word);
        
        
        //push the word to result
        res.push(word)
        //update the pointers
        i = j+1+wordLength;

      }

      return res;
    }
}
