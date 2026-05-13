class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {

        const group = new Map<string, string[]>(); // key -> anagrams

        for(const word of strs){

            //normalize key by using buckets
            const bucket = new Array(26).fill(0);

            for(const char of word){

                bucket[char.charCodeAt(0) - 97]++;
            }

            const key = bucket.join(",");
            if(!group.has(key)) group.set(key, []);
            group.get(key).push(word);
        }
        return [...group.values()];
    }
}
