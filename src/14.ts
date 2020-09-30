// https://projecteuler.net/problem=14

import { sequence } from 'lib/Array.ts'
import { collatz } from 'lib/Math.ts'

const memos = new Map<number, number[]>()

for (const n of sequence(1_000_000)) {
    const seq = collatz(n, memos)

    if (!memos.has(n)) {
        memos.set(n, seq)
    }
}

let largest = 0
let length = 0

memos.forEach((array, n) => {
    if (array.length > length) {
        largest = n
        length = array.length
    }
})

console.log(largest)
