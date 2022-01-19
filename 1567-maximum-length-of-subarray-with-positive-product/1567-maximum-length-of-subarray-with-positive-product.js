const getMaxLen = function(nums) {
    let pos = 0, neg = 0, res = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            pos = 0;
            neg = 0;
        } else if (nums[i] > 0) {
            pos += 1;
            if (neg != 0) {
                neg += 1;
            }
            res = Math.max(res, pos);
        } else {
            [pos, neg] = [neg, pos];
            neg += 1;
            if (pos != 0) {
                pos += 1;
            }
            res = Math.max(res, pos);
        }
    }

    return res;
}