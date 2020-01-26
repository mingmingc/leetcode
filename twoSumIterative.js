var twoSum = function(nums, target) {
    let a = 0;
    let b = 0;
    for (i=0; i<nums.length; i++) {
        a = nums[i];
        for (j=i+1; j<nums.length; j++) {
            b = nums[j];
            if (a + b === target) {
                return [i, j];
            }
        }
    }
};

console.log(twoSum([2, 7, 11, 15], 9));
