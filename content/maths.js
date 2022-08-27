/**
 * Return the factorial of n
 * @param {number} n - The range
 * @returns {number}
 */
 const factorial = (n) => {
    if (n === 0) {
        return 1;
    }
    let x = 1;
    for (let i = 0; i < n + 1; i++) {
        x *= i;
    }

    return x;
}