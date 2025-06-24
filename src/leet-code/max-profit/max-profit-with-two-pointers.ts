/**
 * File: c:\naveen2\javascript-dsa\src\leet-code\max-profit\max-profit-with-two-pointers.ts
 * Project: c:\naveen2\javascript-dsa
 * Created Date: Tuesday, June 17th 2025, 12:56:29 pm
 * Author: Naveen Nazemutheen
 * -----
 * Last Modified: Tue Jun 17 2025
 * Modified By: Naveen Nazemutheen
 * -----
 * Copyright (c) 2025 Artificial Intelligence Center Limited
 * ------------------------------------
 */

export function maxProfit(prices: number[]): number {
    let maxVal = 0
    let min = prices[0]
    
    for(let price of prices){
        if(price<min){
            min = price
        } else {
            maxVal = Math.max(maxVal, price-min)
        }
    }

    return maxVal
}
