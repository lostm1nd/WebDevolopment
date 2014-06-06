(function snakeGame(){
	'use strict';

	var canvas = document.getElementById('game'),
		ctx = canvas.getContext('2d'),
		segmentSize = 10,
		snake,
		foodAvailable,
		food,
		direction,
		score;

	window.addEventListener('keydown', handleInput, false);

	function handleInput(ev) {
		// left - 37
		// up - 38
		// right - 39
		// down - 40

		if (ev.keyCode === 37 && direction !== 'right') {
			direction = 'left';
		} else if (ev.keyCode === 38 && direction !== 'down') {
			direction = 'up';
		} else if (ev.keyCode === 39 && direction !== 'left') {
			direction = 'right';
		} else if (ev.keyCode === 40 && direction !== 'up') {
			direction = 'down';
		}
	}

	function getRandomInt(min, max) {
		return Math.floor(Math.random() *
							(max - min + 1)) + min;
	}

	function newGame() {
		snake = [];
		snake.push({x: canvas.width/2 - 2*segmentSize, y: canvas.height/2 });
		snake.push({x: canvas.width/2 - segmentSize, y: canvas.height/2 });
		snake.push({x: canvas.width/2, y: canvas.height/2 });

		foodAvailable = false;
		food = {};
		direction = 'right';
		score = 0;
	}

	function snakeBitesItself() {
		var headX = snake[snake.length-1].x,
			headY = snake[snake.length-1].y;

		for (var i = 0; i < snake.length - 1; i++) {
			if (headX === snake[i].x && 
					headY === snake[i].y) {
				return true;
			}
		}

		return false;
	}

	function drawField() {
		var bricksPerWall = 25,
			brickSize = canvas.width / bricksPerWall,
			x = 0,
			y = 0;

		ctx.fillStyle = '#78c355';	
		ctx.fillRect(0, 0, canvas.width, canvas.height);

		ctx.fillStyle = '#b6482f';
		ctx.stokeStyle = '#612619';

		// vertical walls
		for (var i = 0; i < bricksPerWall; i+=1) {
			ctx.fillRect(0, y, brickSize, brickSize);
			ctx.strokeRect(0, y, brickSize, brickSize);

			ctx.fillRect(canvas.width - brickSize, y, brickSize, brickSize);
			ctx.strokeRect(canvas.width - brickSize, y, brickSize, brickSize);
			y += brickSize;
		}

		// horizontal wall
		for (var j = 0; j < bricksPerWall; j+=1) {
			ctx.fillRect(x, 0, brickSize, brickSize);
			ctx.strokeRect(x, 0, brickSize, brickSize);

			ctx.fillRect(x, canvas.height - brickSize, brickSize, brickSize);
			ctx.strokeRect(x, canvas.height - brickSize, brickSize, brickSize);
			x += brickSize;
		}
	}

	function drawSnake() {
		var bodyX,
			bodyY;

		// ctx.lineWidth = segmentSize;
		// ctx.strokeStyle = '#186600';
		ctx.fillStyle = '#186600';

		// ctx.beginPath();
		// ctx.moveTo(headX, headY);

		for (var i = snake.length - 1; i >= 0; i-=1) {
			bodyX = snake[i].x;
			bodyY = snake[i].y;

			ctx.fillRect(bodyX, bodyY, segmentSize, segmentSize);
		}

		// ctx.stroke();
		// ctx.lineWidth = 1;
	}	

	function generateFood() {
		if (!foodAvailable) {

			// trying to simulate a 10x10 grid
			// thats is why I want the food to
			// appear at coordinates divisible by 10
			food.x = getRandomInt(3, 46) * 10;
			food.y = getRandomInt(3, 46) * 10;
			foodAvailable = true;
		}

		ctx.fillStyle = '#ddccaa';
		ctx.fillRect(food.x, food.y, segmentSize, segmentSize);
	}

	function updateGame() {
		var headX = snake[snake.length-1].x,
			headY = snake[snake.length-1].y,
			newHead = snake.shift(),
			newSegment = {
				x: newHead.x,
				y: newHead.y
			};

		// check if the snake bumps into one of
		// the walls or eats itself
		// 20 is the size of the bricks that
		// form the walls
		// for right and bottom wall we deduct 
		// the segment size because the point of origin
		// is the top left corner of the rect
		if (headX <= 20 || headX >= 480 - segmentSize ||
				headY <= 20 || headY >= 480 - segmentSize ||
				snakeBitesItself()) {
			newGame();
			return;
		}



		// check if snake eats food
		if (headX === food.x && headY === food.y) {
			foodAvailable = false;
			snake.unshift(newSegment);
			score += 10;
		}

		// move snake - take the tail and place
		// it at last position as head
		if (direction === 'left') {
			newHead.x = headX - segmentSize;
			newHead.y = headY;
		} else if (direction === 'up') {
			newHead.x = headX;
			newHead.y = headY - segmentSize;
		} else if (direction === 'right') {
			newHead.x = headX + segmentSize;
			newHead.y = headY;
		} else if (direction === 'down') {
			newHead.x = headX;
			newHead.y = headY + segmentSize;
		}

		snake.push(newHead);

		drawField();
		generateFood();
		drawSnake();
	}

	newGame();
	setInterval(updateGame, 100);

}());