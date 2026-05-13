class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {

        // target = a + b
        // b = target - a

        const visited = new Map<number,number>() //num -> index

        for(const [index, num] of nums.entries()){

            const diff = target - num;
            if(visited.has(diff)){
                if(index < visited.get(diff)) return [index, visited.get(diff)];
                return [visited.get(diff), index];
            }
            visited.set(num, index);
        }

        return [-1, -1];

    }
}
