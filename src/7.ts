// https://projecteuler.net/problem=7

import { primes } from 'lib/Math.ts'

// NOTE: 素数定理、x=1,000,000, π(x)=78,498
let i = 1_000_000

while (true) {
    const p = primes(i)
    
    if (p.length >= 10000) {
        console.log(p[10000])
        break
    }

    i++
}
