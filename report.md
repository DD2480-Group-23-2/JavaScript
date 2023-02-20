# Report for assignment 3

This is a template for your report. You are free to modify it as needed.
It is not required to use markdown for your report either, but the report
has to be delivered in a standard, cross-platform format.

## Project

Name:

URL:

One or two sentences describing it

## Onboarding experience

Did it build and run as documented?
    
See the assignment for details; if everything works out of the box,
there is no need to write much here. If the first project(s) you picked
ended up being unsuitable, you can describe the "onboarding experience"
for each project, along with reason(s) why you changed to a different one.


## Complexity

1. What are your results for ten complex functions?
   * Did all methods (tools vs. manual count) get the same result?
   * Are the results clear?
2. Are the functions just complex, or also long?
3. What is the purpose of the functions?
4. Are exceptions taken into account in the given measurements?
5. Is the documentation clear w.r.t. all the possible outcomes?

## Refactoring
 **Plan for refactoring complex code:**
there would not be huge differences to make with refactoring the code since a lot of it is broken down to as much as it could be.
However, in *caesarCipherEncodeAndDecodeEngine* there are three larger cases that can occur depending on the paramaters, these could be broken down into three smaller functions. 
You could probably also create a helper function for the last part of the *intefralEvaluation*.
The other top 5 functions are fairly optimized and there are not any good ways to refactor without sacraficing in other areas. 

**Estimated impact of refactoring (lower CC, but other drawbacks?)**
it would require more tests since a proper coverage would test each individual function. While lowering complexity it could also introduce new errors possibly. Also if you separate and refactor it too much it can become harder to read since you have to jump around to follow the code. 

## Coverage

### Tools


We used Lizard as a coverage tool to measure complexity. 
it was fairly simple and straitforward to use. Documentation was easily available and was clear in the steps that were needed in order to get the wanted view.
barely any integration was needed as everything ran rightaway from the command line. 

if anything googling information about it was a little inconvinient since the name brings up a lot of other results as well. 

### Your own coverage tool

link to branch: here
git command to obtain the patch:

We trach all the branches in the five most complex functions through a map that sees which branches were reached and then puts that information into a file.
The way we track each branch is through the unique number we assigned them which is listen in [this document](Assignment3.md)

Tool is quite accurate and will portray the branches taken well and will have a readable output file. 

it supports all constucts used in the JS code. 

### Evaluation

1. **How detailed is your coverage measurement?**
it is not too detailed, It achompishes showing what was run however it does not track the outputs or what has come before. It simply verifies that the code reached that point.

2. **What are the limitations of your own tool?**
The tool is in no way automatic, any changes to the code would require changes to the tool and manually adding each new branch as well as fixing numbers of branches that come after it. 

3. **Are the results of your tool consistent with existing coverage tools?**
the coverage tool seems fairly consistent however it does not check all the same things that Lizard checked

## Coverage improvement

Show the comments that describe the requirements for the coverage.

Report of old coverage: [link]

Report of new coverage: [link]

Test cases added:

git diff ...

Number of test cases added: two per team member (P) or at least four (P+).

## Self-assessment: Way of working

Current state according to the Essence standard: ...

Was the self-assessment unanimous? Any doubts about certain items?

How have you improved so far?

Where is potential for improvement?

## Overall experience

What are your main take-aways from this project? What did you learn?

Is there something special you want to mention here?
