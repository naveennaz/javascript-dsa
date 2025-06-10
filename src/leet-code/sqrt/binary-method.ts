/**
 * File: c:\naveen2\javascript-dsa\src\leet-code\sqrt\binary-method.ts
 * Project: c:\naveen2\javascript-dsa
 * Created Date: Tuesday, June 10th 2025, 4:00:57 pm
 * Author: Naveen Nazemutheen
 * -----
 * Last Modified: Tue Jun 10 2025
 * Modified By: Naveen Nazemutheen
 * -----
 * Copyright (c) 2025 Artificial Intelligence Center Limited
 * ------------------------------------
 */


export const mySqrt = (x: number): number => {
     if(x==0) return 0
    let left = 1
    let right = x
    while(left<=right){
        let mid = Math.floor((left + right) / 2);
        let midSquare = mid * mid
        if(midSquare == x) return mid
        else if(midSquare>x) { right = mid-1 }
        else { left = mid+1 }
    }
    return right
}