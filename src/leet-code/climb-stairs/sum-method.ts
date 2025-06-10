/**
 * File: c:\naveen2\javascript-dsa\src\leet-code\climb-stairs\sum-method.ts
 * Project: c:\naveen2\javascript-dsa
 * Created Date: Tuesday, June 10th 2025, 5:11:43 pm
 * Author: Naveen Nazemutheen
 * -----
 * Last Modified: Tue Jun 10 2025
 * Modified By: Naveen Nazemutheen
 * -----
 * Copyright (c) 2025 Artificial Intelligence Center Limited
 * ------------------------------------
 */

export const climbStairs = (n: number): number => {
    if (n == 0) return 0
    let a = 2
    let b = 1
    if (n == a) return a
    if (n == b) return b
    let i = 2
    while (n > i) {
        let temp = a
        a = a + b
        b = temp
        i++
    }
    return a
};