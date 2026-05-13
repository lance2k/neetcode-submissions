class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {

        if(s.length !== t.length){
            return false;
        }

        const countS = new Map<string, number>();
        const countT = new Map<string, number>();

        for(let i = 0; i < s.length; i++){
            countS.set(s[i], (countS.get(s[i]) ?? 0) + 1);
            countT.set(t[i], (countT.get(t[i]) ?? 0) + 1);
        }

        for(const key of countS.keys()){
            if(countT.get(key) !== countS.get(key)){
                return false;
            }
        }

        return true;

    }
}
