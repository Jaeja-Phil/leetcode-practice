var maxSubArray = function(nums) {
    let totalMax = nums[0];
    let currSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        const currNum = nums[i];
        currSum += currNum;
        // if contiguous sum of array is positive, it is worth keeping
        if (currSum < 0) {
            currSum = currNum;
        } else {
            // if contiguous sum of array becomes negative, abandon it, make current number current max
            currSum = Math.max(currSum, currNum);
        }
        
        totalMax = Math.max(totalMax, currSum);
    }

    return totalMax;
};