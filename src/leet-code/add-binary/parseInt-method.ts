/**
 * File: c:\naveen2\javascript-dsa\src\leet-code\add-binary\parseInt-method.ts
 * Project: c:\naveen2\javascript-dsa
 * Created Date: Monday, June 9th 2025, 12:48:01 pm
 * Author: Naveen Nazemutheen
 * -----
 * Last Modified: Mon Jun 09 2025
 * Modified By: Naveen Nazemutheen
 * -----
 * Copyright (c) 2025 Artificial Intelligence Center Limited
 * ------------------------------------
 */

export const addBinary = (a: string, b: string) => {
    return (parseInt(a, 2) + parseInt(b, 2)).toString(2)
}
