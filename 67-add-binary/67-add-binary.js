var addBinary = function(a, b) {
    if (a.length > b.length) {
        [a, b] = [b, a];
    }
    let idx1 = a.length - 1;
    let idx2 = b.length - 1;
    let sum = "";
    let carry = 0;
    
    while (idx1 >= 0) {
        let n1 = parseInt(a[idx1]) , n2 = parseInt(b[idx2]);
        let currDigitSum = carry + n1 + n2;
        if (currDigitSum > 1) {
            carry = 1;
        } else {
            carry = 0;
        }
        sum = (currDigitSum % 2) + sum;
        idx1--;
        idx2--;
    }
    
    while (idx2 >= 0) {
        let currDigitSum = carry + parseInt(b[idx2]);
        if (currDigitSum > 1) {
            carry = 1;
        } else {
            carry = 0;
        }
        sum = (currDigitSum % 2) + sum;
        idx2--;
    }
    
    return carry > 0 ? carry + sum : sum;
};