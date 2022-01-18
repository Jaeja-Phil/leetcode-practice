const maxSubarraySumCircular = function(nums) {
    const maxSubArraySum = (arr) => {
        let max = arr[0];
        let prevMax = 0;

        for (let num of arr) {
            if (prevMax > 0) {
                prevMax += num;
            } else {
                prevMax = num;
            }
            max = Math.max(max, prevMax);
        }

        return max;
    }

    const nonCircularMax = maxSubArraySum(nums);
    const total = nums.reduce((a, c) => a + c);

    // minimum contiguous subarray
    const minSubArraySum = maxSubArraySum(nums.map(num => num * -1));
    // max sum of circular subarray === total sum of subarray - minimum sum of subarray
    const circularMax = total + minSubArraySum;

    if (circularMax === 0) {
        return nonCircularMax;
    }

    return Math.max(circularMax, nonCircularMax);
};