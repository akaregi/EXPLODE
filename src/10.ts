// https://projecteuler.net/problem=10  

import { primes } from 'lib/Math.ts'

const p = primes(2_000_000)
    .reduce((a, b) => a + b)

console.log(p)
