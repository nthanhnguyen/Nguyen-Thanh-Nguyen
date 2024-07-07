// Problem 4: Three ways to sum to n

// Using Arithmetic Series Formula
function sum_to_n_a(n: number): number {
    return (n * (n + 1)) / 2;
}
// Complexity and Efficiency: 
// - This implementation has a time complexity of O(1) because it uses a constant-time arithmetic formula to compute the sum. 
// - The space complexity is also O(1) as it only uses a constant amount of space.



// Iterative Approach
function sum_to_n_b(n: number): number {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
// Complexity and Efficiency: 
// - This implementation has a time complexity of O(n) because it iterates through all numbers from 1 to 𝑛 n. 
// - The space complexity is O(1) since it only uses a constant amount of space for the variables sum and i.



// Iterative Approach
function sum_to_n_c(n: number): number {
    if (n <= 1) {
        return n;
    }
    return n + sum_to_n_c(n - 1);
}

// Complexity and Efficiency:
// - This implementation has a time complexity of 𝑂 ( 𝑛 ) O(n) due to the 𝑛 n recursive calls.
// - The space complexity is also 𝑂 ( 𝑛 ) O(n) because each recursive call adds a new frame to the call stack.