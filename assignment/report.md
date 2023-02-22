# Report for assignment 3

This is a template for your report. You are free to modify it as needed.
It is not required to use markdown for your report either, but the report
has to be delivered in a standard, cross-platform format.

## 1 Project

Name: [TheAlgorithms/JavaScript](https://github.com/TheAlgorithms/JavaScript)

URL: <https://github.com/DD2480-Group-23-2/JavaScript>

The project is a library of algorithms and data structures implemented in JavaScript.

## 2 Onboarding experience

### 2.1 [Swati4star/Images-to-PDF](https://github.com/Swati4star/Images-to-PDF)

For this project we had to install Android Studio in order to build the project. Android Studio is thoroughly documented and the project could be built without errors. The program could then be run smoothly on a simulated mobile device. In the end we decided not to continue with this project because the testing would require a lot of extra steps. Since it was a mobile application, work-arounds would be required to test on-click functions to name one example.

### 2.2 [TheAlgorithms/JavaScript](https://github.com/TheAlgorithms/JavaScript)

We decided to continue with this project. The project is a library of functions and data structures, so no building was required. However in order to run the JavaScript code, an interpreter such as Node.js was needed. Furthermore, the entire test suite for the project completed in 24 seconds without error.

## 3 Complexity measurement

_**Run a complexity measurement tool such as lizard on the code base.**_

_**Count the [cyclomatic complexity](https://en.wikipedia.org/wiki/Cyclomatic_complexity) of large functions of the code.**_

### 3.1 What are your results for ten complex functions?

_Cyclomatic complexity (CC) as measured by `lizard`, lines without comments (NLOC) measured by lizard. MCC is the complexity when counted by hand._

The ten most complex functions can be seen in the table bellow. When counting manually we drew up the flow graph for the function and count the nodes and edges to plug into the formula `CCN = E - N + 2`.

| Functions                                                      | NLOC | CC  | MCC |
| -------------------------------------------------------------- | ---- | --- | --- |
| [`caesarCipherEncodeAndDecodeEngine`](../Ciphers/KeyFinder.js) | 71   | 26  |     |
| [`newGeneration`](../Cellular-Automata/ConwaysGameOfLife.js)   | 25   | 20  |     |
| [`hexLookup`](#315-hexlookup)                                  | 24   | 18  | 18  |
| [`integralEvaluation`](#313-integralevaluation)                | 26   | 15  | 15  |
| [`flashSort`](../Sorts/FlashSort.js)                           | 58   | 15  |     |
| [`isScramble`](#312-isScramble)                                | 30   | 13  | 13  |
| [`convexHull`](../Geometry/ConvexHullGraham.js)                | 37   | 13  |     |
| [`remove`](#314-remove)                                        | 23   | 12  | 12  |
| [`_shiftDown`](../Graphs/PrimMST.js)                           | 39   | 12  |     |
| [`maxProductOfThree`](#311-maxproductofthree)                  | 30   | 11  | 11  |

Below follows a more detailed analysis of the complexity recorded by `lizard` the manual count for five of the ten functions.

#### 3.1.1 [`maxProductOfThree`](../Dynamic-Programming/MaxProductOfThree.js)

_Given an array of numbers, return the maximum product of 3 numbers from the array._

- Counting with lizard: AvgCCN = 11
- Counting manually: CCN = 11

This function has an initial if-statement that catches an error(n=1, e=2). We start with a for-loop(n=2, e =4), then we have an single if-statement followed by two if-else statements with one OR each(n=7, e=12). Then we have a final if-statement followed by an if-else-statement with an OR (n=10, e= 19). If we count the cyclomatic complexity using the formula CCN = E - N + 2 we get an CCN of 19 - 10 + 2 = 11.

#### 3.1.2 [`isScramble`](../String/ScrambleStrings.js)

_Given two strings s1 and s2 of the same length, return true if s2 is a scrambled string of s1, otherwise, return false._

- Counting with lizard: AvgCCN = 13
- Counting manually: CCN = 13

This function starts with two inital if-statements followed by a for-loop(n=3,e=6). The for-loop has two if-statements(n=6, e=13). Then follows another for-loop with a single if-statement(n=8,e=19). Lastly we have another for-loop with a (OR) else (OR) statement (n=14, e=25). We use the same formula as in the function above and we get 25 - 14 + 2 = 13.

#### 3.1.3 [`integralEvaluation`](../Maths/SimpsonIntegration.js)

_Calculate definite integrals using composite Simpson's numerical method._

- Counting with lizard: AvgCCN = 15
- Counting manually: CCN = 15

The function has 6 initial if-statements that have a direct path to an end node(n=6, e=12). Then comes a for-loop with 2 if-statements (n=9,e=18). Lastly we have a for-loop with no additional complexity followed by a final if-statement(n=11, e=24). The formula gives us CCN of 24 - 11 + 2 = 15.

#### 3.1.4 [`remove`](../Data-Structures/Tree/Trie.js)

_Removes a key-value pair from the trie._

- Counting with lizard: AvgCCN = 12
- Counting manually: CCN = 12

The function has 5 intial if-statements(n=5,e=10). One of the if-statements lead to an for-loop with a single if-statement(n=7, e=16). Lastly we have an if-statement that leads to two declarations and an if-statement that leads to a single declaration(n=9, e=19). The formula gives us a CCN of 19 - 9 + 2 = 12.

#### 3.1.5 [`hexLookup`](../Conversions/BinaryToHex.js)

_Lookup for converting a binary number to hexadecimal._

- Counting with lizard: AvgCCN = 18
- Counting manually CCN = 18

The function starts with an if statement(n=1, e=2) then a switch case with 16 cases(n=2, e=18). The forumla gives us a CCN of 18 - 2 + 2 = 18.

### 3.2 Are the functions just complex, or also long?

Sometimes they are related but not always, like function _newGeneration_ in _ConwaysGameOfLife.js_ has around 30 lines of code but with CC of 20, mainly because of a bunch of conditional statements within the function.

### 3.3 What is the purpose of the functions?

Those functions all implement some kind of algorithm to solve different kinds of problems and they are classified by different folders.

### 3.4 Are exceptions taken into account in the given measurements?

There is no exception to catch in functions we measured, so we didn't take exceptions into account.

### 3.5 Is the documentation clear about all the possible outcomes?

The documentation describes some of the possible outcomes, but still may miss some scenarios. The document can be improved by further detailed tests.

## 4 Refactoring

### 4.1 Plan for refactoring complex code

There would not be huge differences to make with refactoring the code since a lot of it is broken down to as much as it could be.

However, in _caesarCipherEncodeAndDecodeEngine_ there are three larger cases that can occur depending on the paramaters, these could be broken down into three smaller functions.

You could probably also create a helper function for the last part of the _intefralEvaluation_. The other top 5 functions are fairly optimized and there are not any good ways to refactor without sacraficing in other areas.

### 4.2 Estimated impact of refactoring (lower CC, but other drawbacks?)

It would require more tests since a proper coverage would test each individual function. While lowering complexity it could also introduce new errors possibly. Also if you separate and refactor it too much it can become harder to read since you have to jump around to follow the code.

## 5 Coverage

### 5.1 Tools

In order to test coverage we used [`Jest`](https://jestjs.io/) since it was allready used for running all of the tests.

### 5.2 Your own coverage tool

The tool can be found on the `d/coverage_measurement` branch.

git command to obtain the patch:

The tool runs alongside the Jest tests which means that `npm test` runs the tool.

#### 5.2.1 Usage

To use the tool one has to call the `logDataToTestFile` function which in turn logs the id and a value as a key-value pair to a `.json` file.

```js
// Usage in code
if (i > 0) {
  logDataToTestFile('newGeneration-2', true)
  neighbourCount += cells[i - 1][j]
}
```

At the end of the program the contents of the `.json` file is printed to standard out. A `test.json` file is also produced. Note that the `test.json` contains duplicates since everytime a branch is taken it is also logged.

```sh
# Sample terminal output
{
  'flashSort-1': true,
  'flashSort-2': true,
  'newGeneration-5': true,
  'newGeneration-7': true,
  'newGeneration-8': true,
}
```

### 5.3 Evaluation

#### 5.3.1 How detailed is your coverage measurement?

Our coverage tool is not too detailed, It achompishes showing what was run however it does not track the outputs or what has come before. It simply verifies that the code reached that point.

#### 5.3.2 What are the limitations of your own tool?

The tool is in no way automatic, any changes to the code would require changes to the tool and manually adding each new branch as well as fixing numbers of branches that come after it.

#### 5.3.3 Are the results of your tool consistent with existing coverage tools?

The coverage tool is consistent with `Jest` and covers the same lines.

## 6 Coverage improvement

[Report of old coverage](./coverage-original.md)

[Report of new coverage](./coverage-improved.md)

### 6.1 [`hexLookup`](../Conversions/test/BinaryToHex.test.js)

#### 6.1.1 Test cases added

The test cases added are are to ensure that all parts of the lookup functions are used.

#### 6.1.2 Git diff

```sh
git diff original-state Conversions/test/BinaryToHex.test.js
```

```diff
diff --git a/Conversions/test/BinaryToHex.test.js b/Conversions/test/BinaryToHex.test.js
index 85679bb..73c9c72 100644
--- a/Conversions/test/BinaryToHex.test.js
+++ b/Conversions/test/BinaryToHex.test.js
@@ -14,6 +14,18 @@ describe('BinaryToHex', () => {
   })

   it('expects to return correct hexadecimal value, matching (num).toString(16)', () => {
-    expect(binaryToHex('1111')).toBe(parseInt('1111', 2).toString(16).toUpperCase())
+    expect(binaryToHex('1111')).toBe(
+      parseInt('1111', 2).toString(16).toUpperCase()
+    )
+  })
+
+  it('expects to return correct hexadecimal value for letters', () => {
+    expect(binaryToHex('101010111100110111101111')).toBe('ABCDEF')
+  })
+
+  it('expects to return correct hexadecimal value for numbers', () => {
+    expect(binaryToHex('1001000110100010101100111100010010000')).toBe(
+      '1234567890'
+    )
   })
 })
```

### 6.2 [`integralEvaluation`](../Maths/test/SimpsonIntegration.test.js)

#### 6.2.1 Test cases added

Add test cases that checks so that 0 is returned if the interval is 0 and tests that assures that the function throws an error if N is too small.

#### 6.2.2 Git diff

```sh
git diff original-state Maths/test/SimpsonIntegration.test.js
```

```diff
diff --git a/Maths/test/SimpsonIntegration.test.js b/Maths/test/SimpsonIntegration.test.js
index c5ebf6a..6041b22 100644
--- a/Maths/test/SimpsonIntegration.test.js
+++ b/Maths/test/SimpsonIntegration.test.js
@@ -14,3 +14,15 @@ test('Should return the integral of f(x) = log(x) + Pi*x^3 in [5, 12] to be equa
   const result = integralEvaluation(128, 5, 12, (x) => { return Math.log(x) + Math.PI * Math.pow(x, 3) })
   expect(Number(result.toPrecision(12))).toBe(15809.9141543)
 })
+
+test('Should return 0 since the interval is between the same numbers', () => {
+  const result = integralEvaluation(128, 5, 5, (x) => { return Math.log(x) + Math.PI * Math.pow(x, 3) })
+  expect(Number(result)).toBe(0)
+})
+
+test('Should return a error since N is too small', () => {
+  expect(() => {
+    const result = integralEvaluation(0, 5, 5, (x) => { return Math.log(x) + Math.PI * Math.pow(x, 3) })
+    Number(result)
+  }).toThrow('N has to be >= 2')
+})
```

### 6.3 [`maxProductOfThree`](../Dynamic-Programming/tests/MaxProductOfThree.test.js)

#### 6.3.1 Test cases added

Add testcases that make sure that the order the elements are in doesn't matter.

#### 6.3.1 Git diff

```sh
git diff original-state Dynamic-Programming/tests/MaxProductOfThree.test.js
```

```diff
diff --git a/Dynamic-Programming/tests/MaxProductOfThree.test.js b/Dynamic-Programming/tests/MaxProductOfThree.test.js
index 32aaec5..ba031eb 100644
--- a/Dynamic-Programming/tests/MaxProductOfThree.test.js
+++ b/Dynamic-Programming/tests/MaxProductOfThree.test.js
@@ -14,4 +14,13 @@ describe('MaxProductOfThree', () => {
   it('expects to return 300 as the maximum product', () => {
     expect(maxProductOfThree([10, -6, 5, 3, 1, -10])).toBe(600)
   })
+
+  // max product works no matter the order
+  it('expects to return 24 as the maximum product', () => {
+    expect(maxProductOfThree([-1, 2, 3, 4])).toBe(24)
+  })
+
+  it('expects to return 24 as the maximum product', () => {
+    expect(maxProductOfThree([-1, 4, 3, 2])).toBe(24)
+  })
 })
```

### 6.4 [`flashSort`](../Sorts/test/FlashSort.test.js)

#### 6.4.1 Test cases added

Add test cases that the function doesn't fail if the array only contains 0 as well as a test that ensures that FlashSort sorts from smallest to largest.

#### 6.4.2 Git diff

```sh
git diff original-state Sorts/test/FlashSort.test.js
```

```diff
diff --git a/Sorts/test/FlashSort.test.js b/Sorts/test/FlashSort.test.js
index 7fd24cc..dff40b5 100644
--- a/Sorts/test/FlashSort.test.js
+++ b/Sorts/test/FlashSort.test.js
@@ -23,3 +23,15 @@ test('The flash sort of the array [-3, 0, -2, -5, -1, -4, -1, -2] is [-5, -4, -3
   const res = flashSort(array)
   expect(res).toEqual([-5, -4, -3, -2, -2, -1, -1, 0])
 })
+
+test('The flash sort of the array [0] is [0]', () => {
+  const array = [0]
+  const res = flashSort(array)
+  expect(res).toEqual([0])
+})
+
+test('The flash sort of the array ...', () => {
+  const array = [-9999, 9999]
+  const res = flashSort(array)
+  expect(res).toEqual([-9999, 9999])
+})
```

### 6.5 [`caesarCipherEncodeAndDecodeEngine`](../Ciphers/test/KeyFinder.test.js)

#### 6.5.1 Test cases added

Add test cases for testing if the function can decode valid and invalid input.

#### 6.5.2 Git diff

```sh
git diff original-state Ciphers/test/KeyFinder.test.js
```

```diff
diff --git a/Ciphers/test/KeyFinder.test.js b/Ciphers/test/KeyFinder.test.js
new file mode 100644
index 0000000..bed5e29
--- /dev/null
+++ b/Ciphers/test/KeyFinder.test.js
@@ -0,0 +1,20 @@
+import { keyFinder } from '../KeyFinder.js'
+
+describe('Testing keyFinder function', () => {
+  it('Test - 1, Testing for invalid types', () => {
+    expect(() => keyFinder(-1)).toThrow()
+  })
+
+  it('Test - 2, Testing for encrypted input', () => {
+    // expect(keyFinder("Rfkkjwi, oekh xcdktgizoutz, tge zqyv.")).toBe(20)
+    expect(keyFinder('L fdph, L vdz, L frqtxhuhg.')).toBe(23)
+    expect(keyFinder('Lzwespj pfl zljyla pz uvwlxlyepl.')).toBe(19)
+    expect(keyFinder('Oy zmk zmciaxu kgixz.')).toBe(20)
+  })
+
+  it('Test - 3, Testing for random input', () => {
+    // expect(keyFinder("Rfkkjwi, oekh xcdktgizoutz, tge zqyv.")).toBe(20)
+    expect(keyFinder('aaaa')).toBe(0)
+    expect(keyFinder('bcde')).toBe(0)
+  })
+})
```

## 7 Self-assessment: Way of working

We are currently in the "foundation established" state according to our evaluation. We have established the tools for work and communications (e.g., Git and Discord) and they are integrated into our workflow in order to perform our work. In order to fully reach the next state, "in use", we would need to regularly inspect our tools and practices. In addition, we would need to put procedures into place to handle feedback.

## 8 Overall experience

In this project we learned how to empirically measure software complexity, and how to refactor code into smaller functions in order to reduce said complexity. Some main takeaways are keeping complexity in mind while writing software, as well as writing tests in a more systematic way in order to achieve better coverage. Furthermore, we learned how about how to productively contribute to open-source projects which is an important skill.
