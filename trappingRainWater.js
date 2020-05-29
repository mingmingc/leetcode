/*
Given an array of integers representing the elevations of rocks, 
determine the total amount of water that can be trapped between rocks.

Input: 	 Array of integers
Output: 	Integer
*/

/*          
 Input: [3, 0, 2, 0, 4]      
 Output: 7
                          i            
Input: [3, 0, 2, 0, 4, 2, 5]   
ml      3  3  3  3  4  4  5  
mr      5  5  5  5  5  5  5
Output: 9
        3
*/

/*                        |___|
 ___              |___|   |___|    
|___|    ___      |___|___|___|
|___|   |___|     |___|___|___|
|___|   |___|     |___|___|___|   
    max:3    max: 3       max 4
        sub 2         sub 2
*/   

//max of column: MAXIMUM LEFT, MAXIMUM RIGHT, 

function trappingRainWater(rocks) {
  let water = 0;
  let maxLeft = [rocks[0]];
  let maxRight = new Array(rocks.length);

  maxRight.fill(0);
  maxRight[rocks.length - 1] = rocks[rocks.length-1];
  //loop thru rocks
  //get max left of each rock
  for (let i=1; i<rocks.length; i++) {
    // let max = maxLeft[i-1] > rocks[i] ? maxLeft[i-1] : rocks[i];
    // maxLeft.push(max);
    maxLeft[i] = Math.max(maxLeft[i - 1], rocks[i]);
  }
  
  //maxRight
  for (let j = rocks.length - 2; j >= 0; j--) {
    // let max = maxLeft[i-1] > rocks[i] ? maxLeft[i-1] : rocks[i];
    // maxLeft.push(max);
    maxRight[j] = Math.max(maxRight[j + 1], rocks[j]);
  }
  
  //amt of water: Math.min(MAX LEFT , RIGHT) - col height
  for (let k=0; k<rocks.length; k++) {
    water += Math.min(maxLeft[k], maxRight[k]) - rocks[k];
  }

  return water;
}

console.log(trappingRainWater([3, 0, 2, 0, 4])); //expect 7
console.log(trappingRainWater([3, 0, 2, 0, 4, 2, 5])); //9
