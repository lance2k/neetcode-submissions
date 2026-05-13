class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded = "";
        for(let word of strs){

            encoded += word.length + "#" + word;
        }
        return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const decoded = [];
        let l = 0;
        while(l < str.length) {
            let i = l;
            //find #
            while(str[i] !== "#") {
                i++;
            }
            //get word length
            const wordLen = parseInt(str.slice(l, i).toString(), 10);
            const word = str.slice(i+1, i+wordLen+1);
            decoded.push(word);
            l = i+wordLen+1;
        }
        return decoded;
    }
}
