// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.






const nums = [2,2,1,1,1,2,2,1,1,1];

var majorityElement = function(nums) {
    let map = new Map();
    let n = nums.length;
    for (let i = 0; i < n; i++) {
        let count = map.get(nums[i]) || 0;
        count++;
        if (count > n / 2) {
            return nums[i];
        }
        map.set(nums[i], count);
    }
};


console.log(majorityElement(nums));