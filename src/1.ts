// https://projecteuler.net/problem=1

let sum = 0;

[...Array(1000).keys()].forEach(i => {
    const now = i + 1

    if (now % 3 === 0 || now % 5 === 0) {
        sum += now
    }
})

console.log(sum)
