function slidingWindow (fullString, chars) {
  //count - hash map
  let count = {};
  for (let i = 0; i<chars.length; i++) {
    count[chars[i]] = 0;
  }

  //missing - integer
  let missing = chars.length;
  //out - array of indices of minimum substring
  let out = [0, Infinity];
  //initialize l and r
  let l = 0;
  
  //Run while R is within length of full string
  for (r=0; r<fullString.length; r++) {
    let current = fullString[r];
    //Hunting phase
    while (missing > 0) {
      //If count exists (if it's one of our target letters)
      if (count[current]) {
        //if currentcount is currently 0, decrement missing
        if (count[current] === 0) {
            missing--;
          }
        //increment by 1
        count[current] += 1
      } 
      
      //increment R while missing > 0
      r++;
    }  
    
    //Catchup phase
    while (missing===0) {
      //replace out if diff btwn r and l is less than our current out
      if(r-l<out[1]-out[0]) {
        out[0] = l;
        out[1] = r;
        console.log(out);
      }
      current = fullString[l];
      //if incrementing L and it exists in count, decrement
      if (count[current]) {
        count[current] -= 1;
      //if the count[current] is now 0, increment missing
      } if (count[current]===0) {
        missing++;
      }
      //Incremnt L while missing ===0
      l++;
    }
  } 

  if (out[1]===Infinity) {return ""};
  return fullString.slice(out[0], out[1]+1);
}

console.log(slidingWindow("ADOBECODEBANC", "ABC"));
// console.log(Infinity);

/* 
LOGIC FOR DUPLICATES IN TARGET (chars)
Change count to needed {F:1, O:2}
now decrement when we find 0
and if we decrement count[r] and count[r]> 0, missing --
*/
