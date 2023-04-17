/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

//　@lc code=start

// DFS
// var dfs = function(grid, r, c) {
// 	const nr = grid.length
// 	const nc = grid[0].length

// 	grid[r][c] = '0'
// 	if(r - 1 >= 0 && grid[r - 1][c] === '1') dfs(grid, r - 1, c)
// 	if(r + 1 < nr && grid[r + 1][c] === '1') dfs(grid, r + 1, c)
// 	if(c - 1 >= 0 && grid[r][c - 1] === '1') dfs(grid, r, c - 1)
// 	if(c + 1 < nc && grid[r][c + 1] === '1') dfs(grid, r, c + 1)
// }
// /**
//  * @param {character[][]} grid
//  * @return {number}
//  */
// var numIslands = function(grid) {
// 	const nr = grid.length
// 	if(nr === 0) return 0
// 	const nc = grid[0].length
// 	let numIslands = 0
// 	for(let r = 0; r < nr; r++) {
// 		for(let c = 0; c < nc; c++) {
// 			if(grid[r][c] === '1') {
// 				numIslands++
// 				dfs(grid, r, c)
// 			}
// 		}
// 	}

// 	return numIslands
// };

// BFS
// var numIslands = function(grid) {
// 	const nr = grid.length
// 	if(nr === 0) return 0
// 	const nc = grid[0].length

// 	let numIslands = 0
// 	for(let r = 0; r < nr; r++) {
// 		for(let c = 0; c < nc; c++) {
// 			if(grid[r][c] === '1') {
// 				numIslands++
// 				grid[r][c] = '0'
// 				const neighbors = []
// 				neighbors.push({r, c})
// 				while(neighbors.length) {
// 					const rc = neighbors.shift()
// 					const { r, c } = rc
// 					if(r - 1 >= 0 && grid[r - 1][c] === '1') {
// 						neighbors.push({ r: r - 1, c })
// 						grid[r - 1][c] = '0'
// 					}
// 					if(r + 1 < nr && grid[r + 1][c] === '1') {
// 						neighbors.push({ r: r + 1, c })
// 						grid[r + 1][c] = '0'
// 					}
// 					if(c - 1 >= 0 && grid[r][c - 1] === '1') {
// 						neighbors.push({ r, c: c - 1 })
// 						grid[r][c - 1] = '0'
// 					}
// 					if(c + 1 < nc && grid[r][c + 1] === '1') {
// 						neighbors.push({ r, c: c + 1 })
// 						grid[r][c + 1] = '0'
// 					}
// 				}
// 			}
// 		}
// 	}

// 	return numIslands
// };

// UnionFind
function UnionFind() {
	this.count = 0
	this.parent = []
	this.rank = []
}
UnionFind.prototype.UnionFind = function(grid) {
	this.count = 0
	const m = grid.length
	const n = grid[0].length
	for(let i = 0; i < m; i++) {
		for(let j = 0; j < n; j++) {
			if(grid[i][j] === '1') {
				this.parent[i * n + j] = i * n + j
				this.count++
			}
			this.rank[i * n + j] = 0
		}
	}
}

UnionFind.prototype.find = function(index) {
	if(this.parent[index] !== index) this.parent[index] = this.find(this.parent[index])
	return this.parent[index]
}

UnionFind.prototype.union = function(x, y) {
	const rootx = this.find(x)
	const rooty = this.find(y)
	if(rootx !== rooty) {
		if(this.rank[rootx] > this.rank[rooty]) {
			this.parent[rooty] = rootx
		} else if (this.rank[rootx] > this.rank[rooty]) {
			this.parent[rootx] = rooty
		} else {
			this.parent[rooty] = rootx
			this.rank[rootx]++
		}
		this.count--
	}
}

UnionFind.prototype.getCount = function(){
	return this.count
}

var numIslands = function(grid) {
	const nr = grid.length
	if(!nr) return 0
	const nc = grid[0].length

	const uf = new UnionFind(grid)

	for(let r = 0; r < nr; r++) {
		for (let c = 0; c < nc; c++) {
			if(grid[r][c] === '1') {
				grid[r][c] = '0'
				if(r - 1 >= 0 && grid[r - 1][c] === '1') uf.union(r * nc + c, (r - 1) * nc + c)
				if(r + 1 < nr && grid[r + 1][c] === '1') uf.union(r * nc + c, (r + 1) * nc + c)
				if(c - 1 >= 0 && grid[r][c - 1] === '1') uf.union(r * nc + c, r * nc + c - 1)
				if(c + 1 < nc && grid[r][c + 1] === '1') uf.union(r * nc + c, r * nc + c + 1)
			}
		}
	}

	return uf.getCount()
}
// @lc code=end
