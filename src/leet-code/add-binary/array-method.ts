/**
 * File: c:\naveen2\javascript-dsa\src\leet-code\add-binary\array-method.ts
 * Project: c:\naveen2\javascript-dsa
 * Created Date: Monday, June 9th 2025, 2:50:09 pm
 * Author: Naveen Nazemutheen
 * -----
 * Last Modified: Mon Jun 09 2025
 * Modified By: Naveen Nazemutheen
 * -----
 * Copyright (c) 2025 Artificial Intelligence Center Limited
 * ------------------------------------
 */

export const addBinary = (a: string, b: string) => {
    const arrA: number[] = a.split("").map(Number)
    const arrB: number[] = b.split("").map(Number)
    let arrAlength = arrA.length
    let arrBlength = arrB.length
    let newArr: number[] = []
    let carry: number = 0
    while (arrAlength > 0 || arrBlength > 0) {
        let addedVal = (arrA[arrAlength - 1] || 0) + (arrB[arrBlength - 1] || 0) + carry
        carry = 0
        if (addedVal === 2) {
            carry = 1
            addedVal = 0
        }
        if (addedVal === 3) {
            carry = 1
            addedVal = 1
        }
        newArr.unshift(addedVal)
        arrAlength--
        arrBlength--
    }
    if (carry) newArr.unshift(carry)
    return newArr.join("")
}