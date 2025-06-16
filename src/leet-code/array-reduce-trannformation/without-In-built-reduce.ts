/**
 * File: c:\naveen2\javascript-dsa\src\leet-code\array-reduce-trannformation\without-In-built-reduce.ts
 * Project: c:\naveen2\javascript-dsa
 * Created Date: Wednesday, June 11th 2025, 12:41:28 pm
 * Author: Naveen Nazemutheen
 * -----
 * Last Modified: Wed Jun 11 2025
 * Modified By: Naveen Nazemutheen
 * -----
 * Copyright (c) 2025 Artificial Intelligence Center Limited
 * ------------------------------------
 */

type Fn = (accum: number, curr: number) => number

export function reduce(nums: number[], fn: Fn, init: number): number {
    for(let num of nums){
        init = fn(init, num)
    }
    return init
};