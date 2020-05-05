/**
 * @param {number} N
 * @return {number}
 */

var fib = function(N) {
      
    let arr = []
  
//   our recursive function def fib(x)
  getFibonacci(0, N, arr);
  return arr[arr.length-1];
   
};

function getFibonacci(x, N, arr) { 
    console.log(x);
  if(x <= N) {
    if (x===0 || x===1) {
        arr.push(x);
    } else {
        arr.push(arr[x-1] + arr[x-2])
    }
    getFibonacci(x+1, N, arr);
  }
    
}
