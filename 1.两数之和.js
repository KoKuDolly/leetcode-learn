/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
	const hash = new Map()
	for(let [i, k] of nums.entries()) {
		hash.set(k, i)
	}
	for(let [i, k] of nums.entries()) {
		let cha = target - k
		if(hash.has(cha) && hash.get(cha) !== i) {
			return [i, hash.get(cha)]
		}
	}
};
// @lc code=end

