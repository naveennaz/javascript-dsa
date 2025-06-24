/*
 * File: c:\naveen2\javascript-dsa\src\leet-code\max-profile\max-profit-with-for-loop
 * Project: c:\naveen2\javascript-dsa
 * Created Date: Monday, June 16th 2025, 2:29:06 pm
 * Author: Naveen Nazemutheen
 * -----
 * Last Modified: 
 * Modified By: 
 * -----
 * Copyright (c) 2025 Artificial Intelligence Center Limited
 * 
 * All shall be well and all shall be well and all manner of things shall be well.
 * Nope...we're doomed!
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	----------------------------------------------------------
 */


export function maxProfit(prices: number[]): number {
    let maxVal = 0
    let pricesLength =  prices.length
    for(let i = 0; i<pricesLength; i++){
        for(let j = i; j<pricesLength; j++){
            console.log(prices[i], "------" ,prices[j])
            if(prices[i]<prices[j]){
                let newVal = prices[j] - prices[i]
                if(maxVal<newVal) maxVal = newVal
            }
        }
    }
    return maxVal
};



