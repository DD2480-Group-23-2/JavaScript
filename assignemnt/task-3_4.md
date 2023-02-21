# 3.4 Part 1: Complexity measurement

_**Run a complexity measurement tool such as lizard on the code base**. If you cannot find a tool for your platform, run `wc -l` to measure the lines of code per file, and count the lines of code for some large functions using a text editor._

_**Count the [cyclomatic complexity](https://en.wikipedia.org/wiki/Cyclomatic_complexity) of large functions of the code** (not necessarily the largest ones, in case you cannot sort them automatically by size). Exclude third-party code and generated code in this. If you have a tool, list ten (10) functions or methods with high complexity. In addition to that (or if you have no tool), count the cyclomatic complexity of five complex functions by hand, either by choosing five out of the ten functions shown by the tool, or, if no tool was available, five functions that appear to be complex._

_**Note**: This document assumes your group has five members; if your group is smaller, total numbers scale with the group size: 8 functions with four active group members, or six with three active members._

_**Note**: Use at least two group members to count the complexity separately, to get a reliable results. Use a third member if the two counts differ._

## 3.4.1

_What are your results? Did everyone get the same result? Is there something that is unclear? If you have a tool, is its result the same as yours?_

## 3.4.2

_Are the functions/methods with high CC also very long in terms of LOC?_

## 3.4.3

_What is the purpose of these functions? Is it related to the high CC?_

## 3.4.4

_If your programming language uses exceptions: Are they taken into account by the tool? If you think of an exception as another possible branch (to the catch block or the end of the function), how is the CC affected?_

## 3.4.5

_Is the documentation of the function clear about the different possible outcomes induced by different branches taken?_
