/**
 * Returns a sequence of N length.  
 * e.g. `[1, 2, 3, 4, ..., 10]`
 * 
 * @param n Length of array
 */
export function sequence(n: number) {
    return [...Array(n).keys()].map((i) => i + 1);
}

/**
 * Convers a number to digit array.  
 * e.g. if `12345` is given, returns `[1, 2, 3, 4, 5]`.
 * 
 * @param n Number
 */
export function toNumberArray (n: number) {
    return Array.from(String(n), Number)
}
