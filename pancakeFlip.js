/*969. Pancake Sorting
Medium

Given an array of integers arr, sort the array by performing a series of pancake 
flips.

In one pancake flip we do the following steps:

Choose an integer k where 1 <= k <= arr.length.
Reverse the sub-array arr[1...k].
For example, if arr = [3,2,1,4] and we performed a pancake flip choosing k = 3, 
we reverse the sub-array [3,2,1], so arr = [1,2,3,4] after the pancake flip at 
k = 3.

Return the k-values corresponding to a sequence of pancake flips that sort arr. 
Any valid answer that sorts the array within 10 * arr.length flips will be judged
 as correct.

 

Example 1:

Input: arr = [3,2,4,1]
Output: [4,2,4,3]
Explanation: 
We perform 4 pancake flips, with k values 4, 2, 4, and 3.
Starting state: arr = [3, 2, 4, 1]
After 1st flip (k = 4): arr = [1, 4, 2, 3]
After 2nd flip (k = 2): arr = [4, 1, 2, 3]
After 3rd flip (k = 4): arr = [3, 2, 1, 4]
After 4th flip (k = 3): arr = [1, 2, 3, 4], which is sorted.
Notice that we return an array of the chosen k values of the pancake flips.
Example 2:

Input: arr = [1,2,3]
Output: []
Explanation: The input is already sorted, so there is no need to flip anything.
Note that other answers, such as [3, 3], would also be accepted.
 

Constraints:

1 <= arr.length <= 100
1 <= arr[i] <= arr.length
All integers in arr are unique (i.e. arr is a permutation of the integers from 
1 to arr.length).
Time complexity: O(2N) --> O(N)

Approach: 
1) Find max value
2) Get max value to either beginning or end
3) Flip pancake until max is at the end of our subarray
4) Repeat this process, decrementing to 1
5) return our K values
*/

function pancakeSort(arr) {
    //Reverse function: O(i-j)/2 = O(N) time
    function reverse(i, j) {
        while (i<j) {
            arr[i], arr[j] = arr[j], arr[i];
            i += 1;
            j -= 1;
        }
    }
    
    let size = arr.length; 
    let kResult = [];

    //O(N) loop, plus calling O(N) reverse function inside, our solution is O(N^2)
    for (let end = size - 1; end >= 0; end--) {
        let maxIndex = arr.indexOf(max);

        //reverse element to front position
        if (max !== arr[size - 1]) {
            reverse(0, max);
            kResult = kResult.concat(maxIndex + 1);
        }

        //reverse element to correct position
        reverse(0, end);
        kResult = kResult.concat(end+1);
        max -= 1;
    }

    return kResult;
}

pancakeSort([3, 2, 1, 4])

/*
in Python:
def pancakeSort(self, arr: List[int]) -> List[int]:
        
if not arr: return None

# Time O((j-i)//2) = O(N) Space O(1)
def reverse(i, j):
    while i<j:
        arr[i], arr[j] = arr[j], arr[i]
        i += 1
        j -= 1
    
#  array[::-1]     Space O(N)

size = len(arr)
max_value = size
k_result = []

# O(N)
for end in range(size-1, 0, -1):

    # find cur max value in the array
    max_index = arr.index(max_value)

    # reverse the element to the fornt position
    if max_index != end:
        if max_index != 0:
            reverse(0, max_index)
            k_result.append(max_index+1)

        # reverse the element to the correct position
        reverse(0,end)
        k_result.append(end+1)
        
    max_value -= 1
        
return k_result
*/
