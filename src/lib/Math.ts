import { toNumberArray, sequence } from './Array.ts'

/**
 * Judges if n is palindromic number.
 * 
 * @param n Number
 */
export function isPalindromic (n: number) {
    const array = toNumberArray(n).map(n => String(n))

    const normal = array.join('')
    const reversal = array.reverse().join('')
    
    return normal === reversal
}

/**
 * Calculates the great common divisor(G.C.D.).
 * 
 * @param a Number
 * @param b Number
 */
export function gcd (a: number, b: number) {
    while (true) {
        const quotient = a % b

        if (quotient === 0) {
            return b
        }

        a = b
        b = quotient
    }
}

/**
 * Calculates the least common multiple(L.C.M.).
 * 
 * @param a Number
 * @param b Number
 */
export function lcm (a: number, b: number) {
    const G = gcd(a, b)

    return (a * b) / G
}

/**
 * Calculates 1^2 + 2^2 + 3^2 + ... + n^2.
 * 
 * @param n numbers
 */
export function squareSum (n: number) {
    return (n * (n + 1)) * ((2 * n) + 1) / 6
}

/**
 * Generates a prime number's table from 2 to n.
 * @param n Max
 */
export function primes (n: number) {
    let search = sequence(n)
    search.shift()

    const primes: number[] = Array()
    const max = Math.sqrt(n)

    while (true) {
        const n = search.shift() as number

        primes.push(n);

        search = search.filter(s => s % n !== 0)

        if (n > max) {
            break
        }
    }

    return primes.concat(search)
}
