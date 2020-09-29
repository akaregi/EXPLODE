// https://projecteuler.net/problem=3

function factor (n: number) {
    for (let i = 2; i < Math.sqrt(n); i++) {
        if (n % i === 0) {
            return i
        }
    }

    return n
}

let n = 600851475143;

const primes: number[] = Array()

while (true) {
    const prime = factor(n)

    if (prime === 1) {
        break
    }

    n /= prime

    primes.push(prime)
}

console.log(primes[primes.length - 1])