const maxScoreSightseeingPair = function(values) {
    let max = values[0];
    let current = values[0];
    for (let i = 1; i < values.length; i++) {
        current--;
        max = Math.max(max, current + values[i]);
        if (values[i] > current) {
            current = values[i];
        }
    }

    return max;
};