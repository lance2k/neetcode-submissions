class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded = "";
        for(const word of strs){
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
        while(l < str.length){
            let i = l;
            while(str[i] !== "#"){
                i++;
            }
            const wordLen = parseInt(str.slice(l, i), 10);
            const word = str.slice(i+1, i+wordLen+1);
            decoded.push(word);
            l = i+wordLen+1;
        }
        return decoded;
    }
}
