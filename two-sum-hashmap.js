
var twoSum = function(nums, target) {
    //initialize hashmap
    const map = new Map();
    //loop through nums array
    for (let i=0; i<nums.length; i++) {
    //set variable for currVal
        let currVal = nums[i];
        //
        if (map.has(currVal)) {
            return[map.get(currVal), i]
        }
        //declare difference variable
        let difference = target - currVal;
        // add difference and index to hashmap
        map.set(difference, i)
    }    
}


// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
