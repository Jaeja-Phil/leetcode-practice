var fib = function(n) {
    if (n <= 1) return n;

    const dp = [0, 1];

    for (let i = 2; i <= n; i++) {
        const currFib = dp[0] + dp[1];
        dp[0] = dp[1];
        dp[1] = currFib;
    }

    return dp[1];
}
