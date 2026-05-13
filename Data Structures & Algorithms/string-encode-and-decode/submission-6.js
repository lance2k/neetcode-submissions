class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedStr = "";
        for(const str of strs){
            encodedStr += `${str.length}#${str}`
        }
        console.log(encodedStr)
        return encodedStr;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let decodedStr = [];
        let i = 0 //pointer to track length
        while(i < str.length){
            let j = i //pointer to track #
            //find #
            while(str[j] !== "#"){
                j++
            }
            //find str int length by slicing i to j since i is next to j
            const length = parseInt(str.slice(i, j), 10)
            //get str by slicing after # until length
            decodedStr.push(str.slice(j+1, j+1+length))
            //move i to the next segment
            i = j+1+length
        }
        return decodedStr;
    }
}
