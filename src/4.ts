// https://projecteuler.net/problem=4

import { sequence } from 'lib/Array.ts'
import { isPalindromic } from 'lib/Math.ts'



// 1 * 1 ではなく 999 * 999 から始めるようにする
const seq = sequence(999).reverse()
let max = 0

for (const s1 of seq) {
    for (const s2 of seq) {
        const mult = s1 * s2

        // 積が回文数の最大値より小さいなら、
        // 回文数の計算は不要
        if (max > mult) {
            continue
        }

        if (isPalindromic(mult)) {
            max = mult
        }
    }
}

console.log(max)
