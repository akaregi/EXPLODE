// https://projecteuler.net/problem=6

import { sequence } from 'lib/Array.ts'
import { squareSum } from 'lib/Math.ts'

const sum = (accum: number, current: number) => accum + current

const a = squareSum(100)
const b = Math.pow(sequence(100).reduce(sum), 2);

console.log(b - a)
