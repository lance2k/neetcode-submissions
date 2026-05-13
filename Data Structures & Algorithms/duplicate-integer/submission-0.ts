class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {

        const visitedNum = new Set<number>();

        for(const num of nums){
            
            if(visitedNum.has(num)){
                return true;
            }
            visitedNum.add(num);
        }

        return false;
    }
}
