/**
 * @param {number[][]} obstacleGrid
 * @return {number}
    
  [0,0,0],
  [0,1,0],
  [0,0,0]
  
  Base cases: 
  1. Out of bounds --> return 0
  2. Reaching end --> return 1
  3. Obstacle  (===1) --> return 0
  
  Recursive case: 
  Within bounds --> sum(call once on right + call once on left)
  
  expression ? true : false
  dp[j] += j > 0 ? add val from left : 0
  
 */

var uniquePathsWithObstacles = function(obstacleGrid) {
    let rows = obstacleGrid.length;
    let columns = obstacleGrid[0].length;
    
    let dp = Array(columns + 1).fill(0);
    dp[0] = 1; //initialize with robot's first position
    
    for (let i=0; i<rows; i++) {
        for (let j=0; j<columns; j++) {
            //only update when it is empty
            if (obstacleGrid[i][j]===0) {
                //at first column?
                dp[j] += j > 0 ? dp[j-1] : 0;
            } else {
                dp[j] = 0;
            }
        }
    }
    
    return dp[columns - 1]
};
