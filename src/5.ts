// https://projecteuler.net/problem=5

import { sequence } from 'lib/Array.ts'
import { lcm } from 'lib/Math.ts'

let i = 1

for (const seq of sequence(20)) {
   i = lcm(i, seq)
}

console.log(i)
