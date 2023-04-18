/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// var majorityElement = function(nums) {
// 	const counts = []
// 	let majority = 0
// 	let cnt = 0
// 	for(let v of nums) {
// 		counts[v] = counts[v] ? counts[v] : 0
// 		counts[v]++
// 		if(counts[v] > cnt) {
// 			cnt = counts[v]
// 			majority = v
// 		}
// 	}
// 	return majority
// };

var majorityElement = function(nums) {
	while(true) {
		const cadidate = nums[Math.floor(Math.random() * nums.length)]
		let count = 0
		for (let v of nums) {
			if(v === cadidate) {
				count++
			}
		}
		if(count > nums.length / 2) return cadidate
	}
	return -1
};
// @lc code=end

