(function() {
	var canv = document.getElementById('canvas');
	ctx = canv.getContext('2d');
	var canvas = {
		width: 500,
		height: 500,
		unit: 10,
		ctx: ctx
	}

     function dfsMap(r, c) {
		"use strict";

		//生成数组a 形如
		// 010101010
		// 111111111
		// 010101010
		// 111111111
		// 010101010
		let a = [],
		row = 2 * r - 1,
		col = 2 * r - 1;
		for (let i = 0; i < row; i++) {
			let b = new Array(col).fill(1);
			a.push(b);
		}
		for (let i = 0; i < r; i++) {
			for (let j = 0; j < c; j++) {
				a[i * 2 ][j * 2 ] = 0;
			}
		}

		//生成监察数组temp,用来判断是否找到旁边未经历过的0点
		//temp[r][c] 与 a[2 * r][2 * c] 一一对应
		let temp = [];
		for (let i = 0; i < r; i++) {
			let d = new Array(c).fill(1);
			temp.push(d);
		}
		//入口直接设置为经历过
		temp[0][0] = 0;
		console.log(temp);
		//用DFS生成一个简易迷宫，即包含所有0点的连通图
		function dfs(x, y) {
			let dx = [2, -2, 0, 0],
				dy = [0, 0, 2, -2],
				way = [0, 1, 2, 3];

			for (let m = 4; m > 0; m--) {
				let num = Math.floor(Math.random() * m),
					pos = way[num],
					nx = x + dx[pos],
					ny = y + dy[pos],
					nx2 = x + dx[pos]/2,
					ny2 = y + dy[pos]/2,
					x2 = parseInt(nx/2),
					y2 = parseInt(ny/2);
				way.splice(num,1);
				if(x2 < 0 || x2 > r - 1|| y2 < 0 || y2 > c - 1) continue;
				if (temp[x2][y2] === 1) {
					temp[x2][y2] = 0;
					a[nx2][ny2] = 0;
					dfs(nx, ny);
				}
			}
		}
		dfs(0,0);
		// 处理数组，使得生成的地图矩阵更加符合一般游戏,math.random 比较参数可调整生成石块的疏密
		for (let i = 0; i < row; i++) {
			for (let j = 0; j < col; j++) {
				if(j === 0 ||  j === col -1)
					a[i][j] = 0;
				if(a[i][j] === 1 && Math.random() < 0)
					a[i][j] = 0;
			}
		}
		return a;
	}
    /**
     * @param {object} canvas - 需要渲染的canvas对象.
     */
	function drawMap(canvas) {
		this.ctx = canvas.ctx;
		this.width = canvas.width;
		this.height = canvas.height;
		this.unit = canvas.unit;
		this.beginPoint = {};
	}
	/**
     * 生成地图地图矩阵
     */
	drawMap.prototype.init = function() {
		let r = Math.floor((this.width/this.unit + 1)/2),
			c = Math.floor((this.height/this.unit + 1)/2);
		this.beginPoint.x = Math.floor((this.width - (2 * r - 1) * this.unit)/2);
		this.beginPoint.y = Math.floor((this.height - (2 * c - 1) * this.unit)/2);
		let map = dfsMap(r, c);
		return map;
	}
	/**
     * 渲染地图
     * @param {array} map - 地图矩阵.
     */
     drawMap.prototype.draw = function(map) {
     	let row = map.length,
     		col = map[0].length,
     		x = this.beginPoint.x,
     		y = this.beginPoint.y,
     		ctx = this.ctx,
     		unit = this.unit;
     		for (let i = 0; i < row; i++) {
     			for (let j = 0; j< col; j++) {
     				if(map[i][j] === 0)
     					ctx.fillStyle = 'yellow';
     				else if(map[i][j] === 1)
     					ctx.fillStyle = 'black';
     				ctx.fillRect(x + i * unit, y + j * unit, unit, unit);
     			}
     		}
     }


	var drawMap = new drawMap(canvas);
	var map = drawMap.init();
	drawMap.draw(map);
})()
