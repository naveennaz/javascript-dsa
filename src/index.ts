/**
 * File: c:\naveen2\javascript-dsa\src\index.ts
 * Project: c:\naveen2\javascript-dsa
 * Created Date: Wednesday, June 4th 2025, 11:41:41 am
 * Author: Naveen Nazemutheen
 * -----
 * Last Modified: Tue Jun 17 2025
 * Modified By: Naveen Nazemutheen
 * -----
 * Copyright (c) 2025 Artificial Intelligence Center Limited
 * ------------------------------------
 */

import { maxProfit } from "./leet-code/max-profit/max-profit-with-two-pointers"
const runMaxProfitWithTwoPointers = async () => {
    const prices: number[] = [7, 1, 5, 3, 6, 4]
    const res: number = maxProfit(prices)
    console.log(res)
}
runMaxProfitWithTwoPointers()

// import { maxProfit } from "./leet-code/max-profit/max-profit-with-for-loop"
// const runMaxProfitWithMap = async () => {
//     const prices: number[] = [7, 1, 5, 3, 6, 4]
//     const res: number = maxProfit(prices)
//     console.log(res)
// }
// runMaxProfitWithMap()

// import { rotate } from "./leet-code/rotate-array/rotate-array"
// const runRotateArray = async () => {
//     const nums: number[] = [1, 2, 3, 4, 5, 6, 7]
//     const k: number = 3
//     rotate(nums, k)
//     console.log(nums)
// }
// runRotateArray()

// import { majorityElement } from "./leet-code/majority-element/majority-element-with-map"
// const runMajorityElementWithMap = async () => {
//     const nums: number[] = [3, 2, 3]
//     const res: number = majorityElement(nums)
//     console.log(res)
// }
// runMajorityElementWithMap()

// import { reduce } from "./leet-code/array-reduce-trannformation/without-In-built-reduce"
// const runArrayReduceTransformation = async () => {
//     const nums: number[] = [1, 2, 3, 4]
//     const fn: (accum: number, curr: number) => number = (accum, curr) => accum + curr
//     const init: number = 0
//     const res: number = reduce(nums, fn, init)
//     console.log(res)
// }
// runArrayReduceTransformation()

// import { climbStairs } from "./leet-code/climb-stairs/sum-method"
// const runClimbStairsSumMethod = async () => {
//     const n: number = 5
//     const res: number = climbStairs(n)
//     console.log(res)
// }
// runClimbStairsSumMethod()

// import { mySqrt } from "./leet-code/sqrt/binary-method"
// const runSqrtBinaryMethod = async () => {
//     const x: number = 8
//     const res: number = mySqrt(x)
//     console.log(res)
// }
// runSqrtBinaryMethod()

// import { addBinary } from "./leet-code/add-binary/array-method"
// const runAddBinaryArrayMethod = async () => {
//     const a: string = "1010"
//     const b: string = "1011"
//     const res: string = addBinary(a, b)
//     console.log(res)
// }
// runAddBinaryArrayMethod()

// import { addBinary } from "./leet-code/add-binary/parseInt-method"
// const runAddBinaryParseIntMethod = async () => {
//     const a: string = "1010"
//     const b: string = "1011"
//     const res: string = addBinary(a, b)
//     console.log(res)
// }
// runAddBinaryParseIntMethod()

// import { plusOne } from "./leet-code/plus-one/convert-to-string-method"
// const runPlusOneCovertToStringMethod = async () => {
//     const digits: number[] = [6, 1, 4, 5, 3, 9, 0]
//     const res: number[] = plusOne(digits)
//     console.log(res)
// }
// runPlusOneCovertToStringMethod()

// import { plusOne } from "./leet-code/plus-one/reduce-method"
// const runPlusOneReduceMethod = async () => {
//     const digits: number[] = [6, 1, 4, 5, 3, 9, 0]
//     const res: number[] = plusOne(digits)
//     console.log(res)
// }
// runPlusOneReduceMethod()







