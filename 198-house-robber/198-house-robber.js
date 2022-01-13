var rob = function(nums) {
    if (nums.length === 0) return 0;
    if (nums.length <= 2) return Math.max(...nums);

    let maxTwoBefore = nums[0];
    let maxOneBefore = Math.max(nums[0], nums[1]);

    for (let i = 2; i < nums.length; i++) {
        const currMax = Math.max(nums[i] + maxTwoBefore, maxOneBefore);

        maxTwoBefore = maxOneBefore;
        maxOneBefore = currMax;
    }

    return maxOneBefore;
}