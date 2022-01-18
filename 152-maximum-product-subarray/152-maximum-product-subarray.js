const maxProduct = function(nums) {
    if (nums.length === 0) return 0;

    let currMax = nums[0];
    let currMin = nums[0];
    let max = currMax;

    for (let i = 1; i < nums.length; i++) {
        const currNum = nums[i];
        const tempMax = Math.max(currNum, currMax * currNum, currMin * currNum);
        currMin = Math.min(currNum, currMax * currNum, currMin * currNum);

        currMax = tempMax;

        max = Math.max(currMax, max);
    }

    return max;
};