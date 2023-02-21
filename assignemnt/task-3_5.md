# 3.5 Part 2: Coverage measurement & improvement

## 3.5.1 Task 1: DIY

_**Implement branch coverage by manual instrumentation of the source code for five functions with high cyclomatic complexity.** Use a separate development branch or repo for this, as this code is not permanent._

See the `d/coverage_measurement` branch.

### 3.5.1.1

_What is the quality of your own coverage measurement? Does it take into account ternary operators (condition ? yes : no) and exceptions, if available in your language?_

The is very poor since it requires a lot of manual setup to use effectivley since it, for all intents and purposes just is a logger. It is probably possible to use it in all scenarios to check all branches, but it would be very impractical to do so.

### 3.5.1.2

_What are the limitations of your tool? How would the instrumentation change if you modify the program?_

The largest limitations of the tool is that to use it one has to set the points to check manually and keep track of the value set in the specific branch.

Another limitation of the tool is that it dosent support grouping logpoints for functions or files (this could however be added pretty easily since it stores the data in json).

### 3.5.1.3

_If you have an automated tool, are your results consistent with the ones produced by existing tool(s)?_

Yes they are. Both Jest and our tool reports that the branches that aren't covered by any tests aren't taken.

## 3.5.2 Task 2: Coverage improvement

### 3.5.2.1

_Identify the requirements that are tested or untested by the given test suite._

### 3.5.2.2

_Document the requirements (as comments), and use them later as assertions._

### 3.5.2.3

_Create new test cases as needed to improve branch coverage in the given functions. Can you call the function directly? Can you expand on existing tests? Do you have to add additional interfaces to the system (as public methods) to make it possible to set up test data structures?_

### 3.5.2.4

_If you have 100 % branch coverage, you can choose other functions or think about path coverage. You may cover all branches in a function, but what does this mean for the combination of branches? Consider the existing tests by hand and check how they cover the branches (in which combinations)._

## 3.5.3 Task 3: Refactoring plan

## 3.5.4 Task 4: Self-assessment
