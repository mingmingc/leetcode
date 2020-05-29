/* 516. Longest Palindromic Subsequence
Given a string s, find the longest palindromic subsequence's length in s. You may assume that the maximum length of s is 1000.

Example 1:
Input:

"bbbab"
Output:
4
One possible longest palindromic subsequence is "bbbb".
Example 2:
Input:

"cbbd"
Output:
2
One possible longest palindromic subsequence is "bb".
*/

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
    function traverse(start, end) {
        if (start > end) {
            return 0;
        } 
        
        if (start === end) {
            return 1;
        } 
        if (s[start]===s[end]) {
            return 2 + traverse(start+1, end -1);
        }
        else {
            return Math.max(traverse(start+1, end), traverse(start, end-1))
        }
    }
    
    return traverse(0, s.length-1)
};