class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        
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
    decode(str: string): string[] {
        
        const decoded: string[] = [];

        //two pointer technique
        let l = 0;
        while(l < str.length){
            let i = l;
            while(str[i] !== '#'){
                i++;
            }
            //get word len
            const len = parseInt(str.slice(l, i), 10);
            const word = str.slice(i+1, i+len+1);
            console.log(word);
            decoded.push(word);
            l = i + len +1;
        }
        return decoded;
    }
}
