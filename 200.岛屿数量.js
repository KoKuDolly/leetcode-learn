/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
var dfs = function(grid, r, c) {
	const nr = grid.length
	const nc = grid[0].length

	grid[r][c] = '0'
	if(r - 1 >= 0 && grid[r - 1][c] === '1') dfs(grid, r - 1, c)
	if(r + 1 < nr && grid[r + 1][c] === '1') dfs(grid, r + 1, c)
	if(c - 1 >= 0 && grid[r][c - 1] === '1') dfs(grid, r, c - 1)
	if(c + 1 < nc && grid[r][c + 1] === '1') dfs(grid, r, c + 1)
}
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
	const nr = grid.length
	if(nr === 0) return 0
	const nc = grid[0].length
	let numIslands = 0
	for(let r = 0; r < nr; r++) {
		for(let c = 0; c < nc; c++) {
			if(grid[r][c] === '1') {
				numIslands++
				dfs(grid, r, c)
			}
		}
	}

	return numIslands
};
// @lc code=end

