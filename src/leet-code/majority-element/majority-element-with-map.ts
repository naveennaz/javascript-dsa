/**
 * File: c:\naveen2\javascript-dsa\src\leet-code\majority-element\majority-element-with-map.ts
 * Project: c:\naveen2\javascript-dsa
 * Created Date: Monday, June 16th 2025, 11:47:15 am
 * Author: Naveen Nazemutheen
 * -----
 * Last Modified: Mon Jun 16 2025
 * Modified By: Naveen Nazemutheen
 * -----
 * Copyright (c) 2025 Artificial Intelligence Center Limited
 * ------------------------------------
 */


export function majorityElement(nums: number[]): number {
    let map = new Map()
    map.set(nums[0], 1)
    let maxVal = nums[0]
    let numsElementHalf = Math.floor(nums.length/2)
    let i = 1
    while(i<nums.length){
        map.set(nums[i],  map.get(nums[i]) + 1 || 1)
        if(maxVal !== nums[i]){
            if(map.get(maxVal)<map.get(nums[i])) maxVal = nums[i]
        }
        if(map.get(nums[i])>numsElementHalf) return maxVal
        i++
    }
    return maxVal
};