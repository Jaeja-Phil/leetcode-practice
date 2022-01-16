var jump = function(nums) {
    let jumps = 0, currentJumpEnd = 0; furthest = 0;
    
    for (let i = 0; i < nums.length - 1; i++) {
        furthest = Math.max(furthest, i + nums[i]);
        if (i === currentJumpEnd) {
            jumps++;
            currentJumpEnd = furthest;
        }
    }

    return jumps;
};