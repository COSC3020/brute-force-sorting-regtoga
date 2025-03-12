# Brute-Force Sorting

We talked about the complexity of the sorting problem, and used an argument over
all permutations of a list to be sorted to determine its complexity. Implement
a function to sort a list by systematically trying all permutations of the input
list, using the template in `code.js`. Test your new function; I've provided
some basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

The return value should be the number of permutations that were tried until the
sorted list was "discovered". The unsorted list passed as an argument should be
sorted, i.e. do not copy the list and sort the copy.

## Runtime Analysis

What is the runtime complexity of the algorithm that you implemented? What does
a best case input for your implementation look like, what does a worst case
input look like? How would this complexity change if you generated permutations
randomly without memory instead of systematically trying them?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

The best case (for my implementation) looks like:
O(n!), its this because it is possible for it to be sorted first try... but the way i implemented it we still have to generate every permutation before we can check if thats the case.

the worst case looks like:
O(n!) because we had to try every single permutation of the input.

The complexity would change if it was generated randomly by not having a determined best or worst case. If we got unlucky the worst case for any input that needs to be sorted is the heat death of the universe and the best case is O(1) because it could just become sorted first try.


My algorithm first generates all the permutations which runs in $O(n!)$ then after thats is done i have another loop that will run though each permutation again and inside that loop is another loop that goes though each permutations of the list and checks if it is sorted. That means its is n! + n! * n. i could get rid of one of those n! by checking if the array is sorted when its generated... this could also make it possible for me to save on some memory by not storing the final batch of results asymtoptically however it would only be like storing (n-1)! so it wouldnt make a difference (asymtoptically). 
so my algorithm is n * n! = (n + 1)! $\in O(n!)$

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.