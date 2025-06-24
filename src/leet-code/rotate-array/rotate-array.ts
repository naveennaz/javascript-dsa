/**
 * File: c:\naveen2\javascript-dsa\src\leet-code\rotate-array\rotate-arryay.ts
 * Project: c:\naveen2\javascript-dsa
 * Created Date: Monday, June 16th 2025, 2:14:55 pm
 * Author: Naveen Nazemutheen
 * -----
 * Last Modified: Mon Jun 16 2025
 * Modified By: Naveen Nazemutheen
 * -----
 * Copyright (c) 2025 Artificial Intelligence Center Limited
 * ------------------------------------
 */

export function rotate(nums: number[], k: number): void {
    while(k>0){
        let current : any = nums.pop()
        nums.unshift(current)
        k--
    }
};