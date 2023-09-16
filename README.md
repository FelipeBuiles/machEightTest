## Task
​
The task is to write a function that finds pairs of integers from a list that
sum to a given value. The function will take as input the list of numbers as
well as the target sum.
​
The algorithm to find the pairs must be faster than O(n^2). All edge cases
should be handled appropriately. This is _not_ a closed book test. You are
encouraged to reach out with any questions that you come across.
  
## Usage

First install node packages with `npm install`.

Get usage help by running `npm run help`.

Check for pairs that sum a value by running `npm run findPairs <target> <list>`

Example: 
```
npm run findPairs 12 1,9,5,0,20,-4,12,16,7
> [[0,12], [-4,16], [5,7]]
```