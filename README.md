[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/bHkMPWBv)
# Tail Recursion

In the lectures, we've seen code for a recursive implementation for computing
the Fibonacci numbers. Make this implementation tail-recursive. I have not
provided a template; depending on how you choose to implement the function, it
will have a different signature.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

Hint: It may help to have a look at the iterative dynamic programming
implementation. What changes between iterations of the loop?

## Runtime Analysis

Is the asymptotic complexity of tail-recursive Fibonacci different from the
non-tail-recursive version? Why, or why not, and what is the complexity
(worst-case $\Theta$)? Add your answer, including your reasoning, to this
markdown file.

Answer:

The asymptotic complexity of the tail-recursive version is $\Theta (n)$.

The asymptotic complexity of the non-tail-recursive version is $\Theta (2^n)$.

In the tail-recursive version, the amount of times the function is recursively called is equal to the input $n$.

So, the asymptotic complexity of the tail-recursive version is $\Theta (n)$.

In the non-tail-recursive version, each call to the function results in two more recursive function calls, one for $(n - 1)$ and one for $(n - 2)$ which results in exponential growth.

So, the asymptotic complexity of the non-tail-recursive version is $\Theta (2^n)$.

The difference between the two versions comes from the fact that with tail-recursion, the function is recursively called at the end which results in a linear complexity similar to iteration. In the non-tail-recursion version, two recursive calls are allowed which results in an exponential time complexity.

Referenced my graph-search repository to create the testing file.
