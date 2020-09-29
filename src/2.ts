// https://projecteuler.net/problem=2

let now = 3
let sum = 0

let fib = [1, 1]

while (true) {
    const next = fib[now - 3] + fib[now - 2];

    if (next > 400_0000) {
        break
    }

    if (next % 2 === 0) {
        sum += next
    }

    fib.push(next)

    now++
}

console.log(sum)
