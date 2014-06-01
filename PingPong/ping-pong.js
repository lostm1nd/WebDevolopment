(function pingPong() {
	'use strict';

	var canvas = document.getElementById('table'),
		context = canvas.getContext('2d'),
		ball = { x: canvas.width / 2,
				y: canvas.height / 2,
				radius: 22,
				velX: 0,
				velY: 0 },
		paddleHeight = 100,
		paddleWidth = 10,
		leftPaddleY = canvas.height / 2 - paddleHeight/2,
		rightPaddleY = canvas.height / 2 - paddleHeight/2,
		leftPaddleVelocity = 0,
		rightPaddleVelocity = 0,
		scoreLeft = 0,
		scoreRight = 0;

	window.addEventListener('keydown', onKeyDown, false);
	window.addEventListener('keyup', onKeyUp, false);

	function drawTable() {
		context.fillStyle = '#000000';
		context.fillRect(0, 0, canvas.width, canvas.height);

		// draw table lines
		context.beginPath();
		context.lineWidth = 2;
		context.strokeStyle = '#ffffff';
		context.moveTo(10, 0);
		context.lineTo(10, canvas.height);

		context.moveTo(canvas.width-10, 0);
		context.lineTo(canvas.width-10, canvas.height);

		context.moveTo(canvas.width/2, 0);
		context.lineTo(canvas.width/2, canvas.height);
		context.stroke();

		// draw paddles
		context.beginPath();
		context.lineWidth = paddleWidth;
		context.moveTo(paddleWidth/2, leftPaddleY);
		context.lineTo(paddleWidth/2, leftPaddleY + paddleHeight);

		context.moveTo(canvas.width - paddleWidth/2, rightPaddleY);
		context.lineTo(canvas.width - paddleWidth/2, rightPaddleY + paddleHeight);
		context.stroke();

		// draw score
		context.fillStyle = '#ffffff';
		context.font = '30px sans-serif';
		context.fillText('' + scoreLeft, canvas.width / 2 - 40, 40);
		context.fillText('' + scoreRight, canvas.width / 2 + 40, 40);
	}

	function drawBall() {
		context.fillStyle = '#ffffff';
		context.beginPath();
		context.arc(ball.x, ball.y, ball.radius, 0, 2*Math.PI, false);
		context.fill();
	}

	function onKeyDown(ev) {
		// up arrow -> 38
		// down arrow -> 40
		// W -> 87
		// S -> 83
		// check if velocity is zero beacuse we dont want
		// the velocity to increase more than once
		if (ev.keyCode === 38 && rightPaddleVelocity === 0) {
			rightPaddleVelocity -= 5;
		} else if (ev.keyCode === 40  && rightPaddleVelocity === 0) {
			rightPaddleVelocity += 5;
		} else if (ev.keyCode === 87 && leftPaddleVelocity === 0) {
			leftPaddleVelocity -= 5;
		} else if (ev.keyCode === 83  && leftPaddleVelocity === 0) {
			leftPaddleVelocity += 5;
		}
	}

	function onKeyUp(ev) {
		// up arrow -> 38
		// down arrow -> 40
		// W -> 87
		// S -> 83
		if (ev.keyCode === 38) {
			rightPaddleVelocity = 0;
		} else if (ev.keyCode === 40) {
			rightPaddleVelocity = 0;
		} else if (ev.keyCode === 87) {
			leftPaddleVelocity = 0;
		} else if (ev.keyCode === 83) {
			leftPaddleVelocity = 0;
		}
	}

	function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	function newGame() {
		// reset all positions
		// to the default state
		ball.x = canvas.width / 2;
		ball.y = canvas.height / 2;
		ball.velX = 0;
		ball.velY = 0;
		leftPaddleY = canvas.height / 2 - paddleHeight/2;
		rightPaddleY = canvas.height / 2 - paddleHeight/2;
		leftPaddleVelocity = 0;
		rightPaddleVelocity = 0;

		// if we get a number less than 0.5
		// we spawn the ball to the left
		// otherwise to the right
		var rnd = getRandomInt(1, 10);

		if (rnd < 5) {
			ball.velX = getRandomInt(-5, -1);
			ball.velY = getRandomInt(-5, -1);
		} else {
			ball.velX = getRandomInt(1, 5);
			ball.velY = getRandomInt(1, 5);
		}
	}

	function updateGame() {
		drawTable();
		drawBall();

		// update the vertical position
		// of the paddles
		if (leftPaddleY + leftPaddleVelocity >= 0 &&
				leftPaddleY + paddleHeight + leftPaddleVelocity <= canvas.height) {

			leftPaddleY += leftPaddleVelocity;
		}

		if (rightPaddleY + rightPaddleVelocity >= 0 &&
				rightPaddleY + paddleHeight + rightPaddleVelocity <= canvas.height) {

			rightPaddleY += rightPaddleVelocity;
		}

		// update ball position
		ball.x += ball.velX;
		ball.y += ball.velY;

		// if the ball is flying out from the top or
		// bottom of the field inverse its vertical velocity
		if (ball.y + ball.radius >= canvas.height ||
				ball.y <= ball.radius) {

			ball.velY = -ball.velY;
		}

		// check if a paddle is hitting the ball
		if (ball.x + ball.radius >= canvas.width - paddleWidth) {

			if (ball.y >= rightPaddleY &&
					ball.y <= rightPaddleY + paddleHeight) {
				ball.velX = -ball.velX;
			} else {

				// the ball is out the right side
				// so the left player scores
				scoreLeft += 1;
				newGame();
			}

		} else if (ball.x <= ball.radius + paddleWidth) {
			if (ball.y >= leftPaddleY &&
					ball.y <= leftPaddleY + paddleHeight) {
				ball.velX = -ball.velX;
			} else {

				// the ball is out the left side
				// so the right player scores
				scoreRight += 1;
				newGame();
			}
		}

		requestAnimationFrame(updateGame);
	}

	newGame();
	updateGame();
}());