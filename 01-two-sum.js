// https://leetcode.com/problems/two-sum/description/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
  var hash = [];

  for (var i = 0, length = nums.length; i < length; i++) {
    var tmp = target - nums[i];

    if (hash[tmp] !== undefined) {
      return [hash[tmp], i];
    }

    hash[nums[i]] = i;
  }
};