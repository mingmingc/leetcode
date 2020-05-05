function getFibonnaci(n) {
  let fib = Array(n+1).fill(0)
  for(let i=1; i <= n; i++) {
    if(i <= 2) {
      fib[i] = 1
    } else{
      fib[i] = fib[i-2] + fib[i-1]
    }
  }
    
  return fib[n]
}
