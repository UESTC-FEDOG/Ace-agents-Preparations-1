[任务四十六](http://ife.baidu.com/task/detail?taskId=46)

### Ace-agents-Preparations-1 DOC
----
* **Class Agent**

	* **Methods**：

		* New Agent (posistionX, positionY): constructor

			- **parameters**:

				{Num} positionX;

				-X轴坐标

				{Num} positionY;

				-Y轴坐标；

				初始化特工位置

		 * setPosition (posistionX, positionY)：

			- **parameters**:

				{Num} positionX;

				-X轴坐标

				{Num} positionY;

				-Y轴坐标；

				更新特工位置

		* getPosition (): **Array**

			return [this.positionX, this.postitionY];

			返回特工当前位置

		* pathFinding (endPosition): **Array**

			- **parameters**:

				{Array} endPosition;

			return [[x1,y2]...[xn,yn]]

			返回由可前进最短路线数组，如果不可到达则返回null;

* **Class Wall**

	* **Methods**：

		* New Wall (): constructor

		* getWallPosition	(): **Array**

			return [...[positionX, positionY]];

			返回一组由算法生成的墙的位置（数组中每个小数组即为一个墙点）

* **Class File**

	* **Methods**：

		* New File (): constructor

		* getFilePosition	(): **Array**

			return [positionX, positionY];

			返回文件位置


* **Class Map**

	* **Methods**：

		* New Map (): constructor

			this.map = [];

		* createMap () :

			this.map = map;

			生成表示原始grid地图的矩阵

		* getMap (): **Array**

			return this.map;

			返回一个表示原始grid地图的矩阵

		* changeMap (Wall): **Array**

			- **parameters**:

				{Array} Wall;

				-表示墙的矩阵数组

			return this.map

			返回一个加上墙的数组矩阵
