// https://projecteuler.net/problem=1

import { sequence } from 'lib/Array.ts'

const s = sequence(999)
    .filter(n => n % 3 === 0 || n % 5 === 0)
    .reduce((a, b) => a + b);

console.log(s)
