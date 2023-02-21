# Functions

_Cyclomatic complexity (CC) measured with lizard_

| CC  | Function                                                                  |
| --- | ------------------------------------------------------------------------- |
| 26  | [`caesarCipherEncodeAndDecodeEngine`](#caesarcipherencodeanddecodeengine) |
| 20  | [`newGeneration`](#newgeneration)                                         |
| 18  | [`binaryToHex`](#binarytohex)                                             |
| 15  | [`integralEvaluation`](#integralevaluation)                               |
| 15  | [`flashSort`](#flashsort)                                                 |
| 13  | [`helper`](#helper)                                                       |
| 13  | [`convexHull`](#convexhull)                                               |
| 12  | [`Trie.prototype.remove`](#trieprototyperemove)                           |
| 12  | [`_shiftDown`](#_shiftdown)                                               |
| 11  | [`maxProductOfThree`](#maxproductofthree)                                 |

## [`caesarCipherEncodeAndDecodeEngine`](../Ciphers/KeyFinder.js)

### Cyclomatic Complexity

26

### Parameters

str (get the input of encrypted string)

### Return

the key number if founded

### Purpose

Find and retrieve the encryption key automatically

### Reasons of complexity

The function has nested loops and uses an auxiliary function which has a lot more branch statements. Both of them cause a high CC.

### Code

## [`newGeneration`](../Cellular-Automata/ConwaysGameOfLife.js)

### Cyclomatic Complexity

20

### Parameters

A two dimensional array of integers.

### Return

A two dimensional array of integers representing the next step in the game.

### Purpose

Generates the next generation for a given state of Conway's Game of Life.

### Reasons of complexity

The function is for generating next generation of Conway's Game of Life. It accepts an array and also returns an array. Besides, there are nested loop and many branch statements within the function, which significantly increases the cyclomatic complexity.

### Code

```js
export function newGeneration(cells) {
  const nextGeneration = []
  for (let i = 0; i < cells.length; i++) {
    const nextGenerationRow = []
    for (let j = 0; j < cells[i].length; j++) {
      // Get the number of living neighbours
      let neighbourCount = 0
      if (i > 0 && j > 0) neighbourCount += cells[i - 1][j - 1]
      if (i > 0) neighbourCount += cells[i - 1][j]
      if (i > 0 && j < cells[i].length - 1)
        neighbourCount += cells[i - 1][j + 1]
      if (j > 0) neighbourCount += cells[i][j - 1]
      if (j < cells[i].length - 1) neighbourCount += cells[i][j + 1]
      if (i < cells.length - 1 && j > 0) neighbourCount += cells[i + 1][j - 1]
      if (i < cells.length - 1) neighbourCount += cells[i + 1][j]
      if (i < cells.length - 1 && j < cells[i].length - 1)
        neighbourCount += cells[i + 1][j + 1]

      // Decide whether the cell is alive or dead
      const alive = cells[i][j] === 1
      if (
        (alive && neighbourCount >= 2 && neighbourCount <= 3) ||
        (!alive && neighbourCount === 3)
      ) {
        nextGenerationRow.push(1)
      } else {
        nextGenerationRow.push(0)
      }
    }
    nextGeneration.push(nextGenerationRow)
  }
  return nextGeneration
}
```

## [`binaryToHex`](../Conversions/BinaryToHex.js)

```js
const pad = (num, padlen) => {
  const pad = new Array(1 + padlen).join(0)
  return (pad + num).slice(-pad.length)
}

const hexLookup = (bin) => {
  let binary = bin
  if (binary.length < 4) {
    binary = pad(binary, 4)
  }
  switch (binary) {
    case '0000':
      return '0'
    case '0001':
      return '1'
    case '0010':
      return '2'
    case '0011':
      return '3'
    case '0100':
      return '4'
    case '0101':
      return '5'
    case '0110':
      return '6'
    case '0111':
      return '7'
    case '1000':
      return '8'
    case '1001':
      return '9'
    case '1010':
      return 'A'
    case '1011':
      return 'B'
    case '1100':
      return 'C'
    case '1101':
      return 'D'
    case '1110':
      return 'E'
    case '1111':
      return 'F'
  }
}
const binaryToHex = (binaryString) => {
  /*
  Function for converting Binary to Hex

  1. The conversion will start from Least Significant Digit (LSB) to the Most Significant Bit (MSB).
  2. We divide the bits into sections of 4-bits starting from LSB to MSB.
  3. If the MSB get less than 4 bits, then we pad 0s to the front of it.

  For Example:
  Binary String = '1001101'

  1. Divide it to 2 parts => ['100', '1101']
  2. Pad 0s the MSB so it'll be => ['0100', '1101']
  3. Use the lookup table and merge them, therefore the result is 4D.

  */

  let result = ''
  binaryString = binaryString.split('')
  for (let i = binaryString.length - 1; i >= 0; i = i - 4) {
    if (i >= 3) {
      result += hexLookup(binaryString.slice(i - 3, i + 1).join(''))
    } else {
      result += hexLookup(binaryString.slice(0, i + 1).join(''))
    }
  }
  return result.split('').reverse().join('')
}

export default binaryToHex
```

- CC: 18

- Parameters(1)

  - binaryString

- Return

  hex number(in array)

- Purpose

  Function for converting Binary to Hex

- Reasons of complexity

  The function has a switch statement block for converting binary to hex which creates many branches and thus increases complexity.

## [`integralEvaluation`](../Maths/SimpsonIntegration.js)

```js
function integralEvaluation(N, a, b, func) {
  // Check if N is an even integer
  let isNEven = true
  if (N % 2 !== 0) isNEven = false

  if (!Number.isInteger(N) || Number.isNaN(a) || Number.isNaN(b)) {
    throw new TypeError('Expected integer N and finite a, b')
  }
  if (!isNEven) {
    throw Error('N is not an even number')
  }
  if (N <= 0) {
    throw Error('N has to be >= 2')
  }

  // Check if a < b
  if (a > b) {
    throw Error('a must be less or equal than b')
  }
  if (a === b) return 0

  // Calculate the step h
  const h = (b - a) / N

  // Find interpolation points
  let xi = a // initialize xi = x0
  const pointsArray = []

  // Find the sum {f(x0) + 4*f(x1) + 2*f(x2) + ... + 2*f(xN-2) + 4*f(xN-1) + f(xN)}
  let temp
  for (let i = 0; i < N + 1; i++) {
    if (i === 0 || i === N) temp = func(xi)
    else if (i % 2 === 0) temp = 2 * func(xi)
    else temp = 4 * func(xi)

    pointsArray.push(temp)
    xi += h
  }

  // Calculate the integral
  let result = h / 3
  temp = 0
  for (let i = 0; i < pointsArray.length; i++) temp += pointsArray[i]

  result *= temp

  if (Number.isNaN(result)) {
    throw Error(
      "Result is NaN. The input interval doesn't belong to the functions domain"
    )
  }

  return result
}
```

- CC: 15

- Parameters(4)

  - N: the split number
  - a,b: endpoints of interval
  - func: math function used for integration

- Return

  Integration result

- Purpose

  Calculate Integration by implementing Simpson Integration method.

- Reasons of complexity

  It adds many conditional statements for validity of this function in the beginning, which increases CC of the code.

## [`flashSort`](../Sorts/FlashSort.js)

```js
export function flashSort(arr) {
  let max = 0
  let min = arr[0]
  const n = arr.length
  const m = ~~(0.45 * n)
  const l = new Array(m)

  for (let i = 1; i < n; ++i) {
    if (arr[i] < min) {
      min = arr[i]
    }
    if (arr[i] > arr[max]) {
      max = i
    }
  }

  if (min === arr[max]) {
    return arr
  }

  const c1 = (m - 1) / (arr[max] - min)

  for (let k = 0; k < m; k++) {
    l[k] = 0
  }

  for (let j = 0; j < n; ++j) {
    const k = ~~(c1 * (arr[j] - min))
    ++l[k]
  }

  for (let p = 1; p < m; ++p) {
    l[p] = l[p] + l[p - 1]
  }

  let hold = arr[max]
  arr[max] = arr[0]
  arr[0] = hold

  // permutation
  let move = 0
  let t
  let flash
  let j = 0
  let k = m - 1

  while (move < n - 1) {
    while (j > l[k] - 1) {
      ++j
      k = ~~(c1 * (arr[j] - min))
    }
    if (k < 0) break
    flash = arr[j]
    while (j !== l[k]) {
      k = ~~(c1 * (flash - min))
      hold = arr[(t = --l[k])]
      arr[t] = flash
      flash = hold
      ++move
    }
  }

  // insertion
  for (j = 1; j < n; j++) {
    hold = arr[j]
    let i = j - 1
    while (i >= 0 && arr[i] > hold) {
      arr[i + 1] = arr[i--]
    }
    arr[i + 1] = hold
  }
  return arr
}
```

- CC: 15

- Parameters(1)

  - arr

- Return

  arr(after sorting)

- Purpose

  Sort the array by flash sort algorithm.

- Reasons of complexity

  The function has many loops because there are corresponding steps in the algorithm, so it affects CC.

## [`helper`](../String/ScrambleStrings.js)

```js
const isScramble = (s1, s2) => {
  return helper({}, s1, s2)
}

const helper = function (dp, s1, s2) {
  const map = {}

  if (dp[s1 + s2] !== undefined) return dp[s1 + s2]
  if (s1 === s2) return true

  for (let j = 0; j < s1.length; j++) {
    if (map[s1[j]] === undefined) map[s1[j]] = 0
    if (map[s2[j]] === undefined) map[s2[j]] = 0
    map[s1[j]]++
    map[s2[j]]--
  }

  for (const key in map) {
    if (map[key] !== 0) {
      dp[s1 + s2] = false
      return false
    }
  }

  for (let i = 1; i < s1.length; i++) {
    if (
      (helper(dp, s1.substr(0, i), s2.substr(0, i)) &&
        helper(dp, s1.substr(i), s2.substr(i))) ||
      (helper(dp, s1.substr(0, i), s2.substr(s2.length - i)) &&
        helper(dp, s1.substr(i), s2.substr(0, s2.length - i)))
    ) {
      dp[s1 + s2] = true
      return true
    }
  }

  dp[s1 + s2] = false
  return false
}
```

- CC: 13

- Parameters(2)

  - s1
  - s2

- Return

  if s2 is a scrambled string of s1

- Purpose

  Given two strings s1 and s2 of the same length, return true if s2 is a scrambled string of s1, otherwise, return false. This code is for a problem on leetcode(87. Scramble String).

- Reasons of complexity

  The function uses three loops and many conditional statements, for dp and also recursion. It makes the function has a high CC.

## [`convexHull`](../Geometry/ConvexHullGraham.js)

```js
function compare(a, b) {
  // Compare Function to Sort the points, a and b are points to compare
  if (a.x < b.x) return -1
  if (a.x === b.x && a.y < b.y) return -1
  return 1
}
function orientation(a, b, c) {
  // Check orientation of Line(a,b) and Line(b,c)
  const alpha = (b.y - a.y) / (b.x - a.x)
  const beta = (c.y - b.y) / (c.x - b.x)

  // Clockwise
  if (alpha > beta) return 1
  // Anticlockwise
  else if (beta > alpha) return -1
  // Colinear
  return 0
}

function convexHull(points) {
  const pointsLen = points.length
  if (pointsLen <= 2) {
    throw new Error('Minimum of 3 points is required to form closed polygon!')
  }

  points.sort(compare)
  const p1 = points[0]
  const p2 = points[pointsLen - 1]

  // Divide Hull in two halves
  const upperPoints = []
  const lowerPoints = []

  upperPoints.push(p1)
  lowerPoints.push(p1)

  for (let i = 1; i < pointsLen; i++) {
    if (i === pointsLen - 1 || orientation(p1, points[i], p2) !== -1) {
      let upLen = upperPoints.length

      while (
        upLen >= 2 &&
        orientation(
          upperPoints[upLen - 2],
          upperPoints[upLen - 1],
          points[i]
        ) === -1
      ) {
        upperPoints.pop()
        upLen = upperPoints.length
      }
      upperPoints.push(points[i])
    }
    if (i === pointsLen - 1 || orientation(p1, points[i], p2) !== 1) {
      let lowLen = lowerPoints.length
      while (
        lowLen >= 2 &&
        orientation(
          lowerPoints[lowLen - 2],
          lowerPoints[lowLen - 1],
          points[i]
        ) === 1
      ) {
        lowerPoints.pop()
        lowLen = lowerPoints.length
      }
      lowerPoints.push(points[i])
    }
  }
  const hull = []
  for (let i = 1; i < upperPoints.length - 1; i++) {
    hull.push(upperPoints[i])
  }
  for (let i = lowerPoints.length - 1; i >= 0; i--) {
    hull.push(lowerPoints[i])
  }

  return hull
}
```

- CC: 13

- Parameters(1)

  - Points(array)

- Return

  Convex hull of points(array)

- Purpose

  Given a set of points in the plane. The Convex hull of the set is the smallest convex polygon that contains all the points of it.

- Reasons of complexity

  The function implements the Convex Hull algorithm, which needs to find the upper points and lower points of the polygon by calculating orientation of every sequence of three consecutive points. It creates loops and conditional statements and uses 2 auxiliary functions that higher complexity.

## [`Trie.prototype.remove`](../Data-Structures/Tree/Trie.js)

- CC: 12

- Parameters(0)

- An implementation of data structure trie.

- Purpose

  Trie is a type of k-ary search tree, a tree data structure used for locating specific keys from within a set.

- Reasons of complexity

  Such data structure needs many loops and branch statements to ensure the correctness of adding, updating and retrieving, which also lead to the high complexity.

## [`_shiftDown`](../Graphs/PrimMST.js)

- CC: 12

- Purpose

  The code implements PrimMST algorithm and creates two classes. One is to implement priority queue, the other is for storing edges and vertex of the graph. The algorithm is intended to generate the lowest weighted tree from a given graph.

- Reasons of complexity

  The primMST algorithm has to traverse priority queue and check if endpoint of the current edge is in the result graph, thus it has loops and conditional statements to achieve these goals and results in a high complexity.

## [`maxProductOfThree`](../Dynamic-Programming/MaxProductOfThree.js#L8-L38)

[code](https://github.com/DD2480-Group-23-2/JavaScript/blob/5ce828b3fe4e138c6da652bf03870e2c20e2f692/Dynamic-Programming/MaxProductOfThree.js#L8-L38)

- CC: 11

- Parameters(1)

  - {number[]} arrayItems

- Return

  number

- Purpose

  Given an array of numbers, return the maximum product of 3 numbers from the array

- Reasons of complexity

  Also, there are many conditional statements in one loop, which is unavoidable for finding 3 largest values and 2 smallest values.
