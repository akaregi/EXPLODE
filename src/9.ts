// https://projecteuler.net/problem=9

import { sequence } from 'lib/Array.ts'
import { isPythagoreanTriple } from 'lib/Math.ts'

function getTriple() {
    const seq = sequence(1000)

    for (const a of seq) {
        for (const b of seq) {
            const c = 1000 - a - b

            if (isPythagoreanTriple(a, b, c)) {
                return [a, b, c]
            }
        }
    }
}

console.log(getTriple()?.reduce((a, b) => a * b))
