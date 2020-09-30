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

/**
 * Judges if A, B, and C are pythagoren triple.
 * 
 * @param a A
 * @param b B
 * @param c C
 */
export function isPythagoreanTriple (a: number, b: number, c: number) {
    return c ** 2 === a ** 2 + b ** 2   
}

/**
 * Returns Nth number of Triangular Number.
 * 
 * @param n N
 */
export function triangularNumber (n: number) {
    return n * (n + 1) / 2
}

/**
 * Returns an array of divisors of N. 
 * @param n N
 */
export function divisors(n: number) {
    const divisors: number[] = Array()

    sequence(n).forEach(i => {
        if (n % i === 0) {
            divisors.push(i)
        }
    })

    return divisors
}

/**
 * Calculates a collatz sequence from N to 1.
 * 
 * @param n Beginning
 * @param memos Memo map
 */
export function collatz(n: number, memos?: Map<number, number[]>) {
    const list = [n]

    let now = n

    while (true) {
        if (now === 1) {
            break
        }

        const succ = now % 2 === 0
            ? now / 2
            : 3 * now + 1

        if (memos && memos.has(succ)) {
            return list.concat(memos.get(succ) as number[])
        }

        list.push(succ)
        now = succ
    }

    return list
}
