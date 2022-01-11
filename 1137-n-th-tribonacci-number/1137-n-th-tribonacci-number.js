var tribonacci = function(n) {
    if (n <= 1) return n;
    if (n == 2) return 1;

    const dp = [0, 1, 1];

    for (let i = 4; i <= n; i++) {
        const currSum = dp.reduce((a, b) => a + b, 0);
        [dp[0], dp[1], dp[2]] = [dp[1], dp[2], currSum];
    }

    return dp.reduce((a, b) => a + b, 0);
}