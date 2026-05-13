class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encode = "";
        for(const char of strs){
            encode += char.length + '#' + char;
        }
        return encode;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    //4#neet4#code
    decode(str) {

        const decode = [];

        //sliding window
        let index = 0;
        while(index < str.length){
            let j= index //track start of window
            //find #
            while(str[j] !== "#" && j< str.length){
                j++;
            }
            //j is at # position
            //get word length which is the string before #
            const wordLen = parseInt(str.slice(index, j), 10);
            const word = str.slice(j+1, j + wordLen+1);
            decode.push(word);
            //update pointer
            index = j + 1 + wordLen;
            
        }
        return decode;
    }
}
