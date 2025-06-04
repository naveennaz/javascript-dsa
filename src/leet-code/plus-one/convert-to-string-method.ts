/**
 * File: c:\naveen2\javascript-dsa\src\leet-code\plus-one\convert-to-string-method.ts
 * Project: c:\naveen2\javascript-dsa
 * Created Date: Wednesday, June 4th 2025, 12:05:09 pm
 * Author: Naveen Nazemutheen
 * -----
 * Last Modified: Wed Jun 04 2025
 * Modified By: Naveen Nazemutheen
 * -----
 * Copyright (c) 2025 Artificial Intelligence Center Limited
 * ------------------------------------
 */

export const plusOne = (digits: number[]): number[] => {
    const digitsToStr = digits.reduce((acc, each) => acc + each.toString(), "")
    return (BigInt(digitsToStr) + BigInt(1)).toString().split("").map(each => +each)
};