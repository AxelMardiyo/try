// const canvas = document.getElementById("canvas");
// const canvasWidth = canvas.width;
// const canvasHeight = canvas.height;

// let context = canvas.getContext("2d");
// let lives = 3,
// 	score = 0,
// 	ballX = canvasWidth / 2,
// 	ballY = canvasHeight - 50,
// 	ballSize = 15,
// 	ballOffsetX = -2,
// 	ballOffsetY = -2,
// 	paddleWidht = 200,
// 	paddleHeight = 20,
// 	paddleX = canvasWidth / 2 - paddleWidht / 2,
// 	paddleY = canvasHeight - paddleHeight,
// 	paddleOffseet = 8,
// 	leftPassed = false,
// 	rightPassed = false,
// 	brickWidth = 80,
// 	brickHeight = 40,
// 	bricks = [];

// for (let y = 0; y < 3; y++) {
// 	for (let x = 0; x < 7; x++) {
// 		let brick = {
// 			level: Math.floor(Math.random() * 3 + 1),
// 			x: x * 90 + 70,
// 			y: y * 50 + 60,
// 		};
// 		bricks.push(brick);
// 	}
// }

// const renderGameEnd = (win, score, fill) => {
// 	context.font = "30px Bold, sans-serif";
// 	let text = "";
// 	if (win) {
// 		text = "You Win!!!";
// 	} else {
// 		text = "You Lose !!";
// 	}
// 	context.fillText(text, canvasWidth / 2, canvasHeight / 2 + 50, 200);
// 	context.fillText(
// 		`Score: ${score}`,
// 		canvasWidth / 2,
// 		canvasHeight / 2 + 100,
// 		200,
// 	);
// 	context.fillStyle = fill;
// };

// const gameWin = () => {
// 	renderGameEnd(true, score, "chartreuse");
// };

// const gameLose = () => {
// 	renderGameEnd(false, score, "crimson");
// };

// const renderBrick = (x, y, color) => {
// 	context.beginPath();
// 	context.rect(x, y, brickWidth, brickHeight);
// 	context.fillStyle = color;
// 	context.fill();
// 	context.closePath();
// };

// const renderBricks = () => {
// 	bricks.forEach((e) => {
// 		let color = "black";
// 		if (e.level == 1) color = "crimson";
// 		if (e.level == 2) color = "chartreuse";
// 		if (e.level == 3) color = "yellow";
// 		renderBrick(e.x, e.y, color);
// 	});
// };

// const renderPaddle = () => {
// 	context.beginPath();
// 	context.rect(paddleX, paddleY, paddleWidht, paddleHeight);
// 	context.fillStyle = "skyblue";
// 	context.fill();
// 	context.closePath();
// 	if (leftPassed && paddleX >= 0) {
// 		paddleX -= paddleOffseet;
// 	}
// 	if (rightPassed && paddleX <= canvasWidth - paddleWidht) {
// 		paddleX += paddleOffseet;
// 	}
// };

// const handleWhilePlay = () => {
// 	ballX += ballOffsetX;
// 	ballY += ballOffsetY;

// 	if (ballX >= canvasWidth - ballSize || ballX <= ballSize) {
// 		ballOffsetX = -ballOffsetX;
// 	}

// 	if (ballY <= ballSize) {
// 		ballOffsetY = -ballOffsetY;
// 	}

// 	if (ballY >= canvasHeight - ballSize - paddleHeight) {
// 		if (
// 			ballX + ballSize >= paddleX &&
// 			ballX + ballSize <= paddleX + paddleWidht
// 		) {
// 			ballOffsetY = -ballOffsetY;
// 		} else {
// 			lives -= 1;
// 			ballX = canvasWidth / 2;
// 			ballY = canvasHeight - 50;
// 			ballOffsetX = -2;
// 			ballOffsetY = -2;
// 			paddleX = canvasWidth / 2 - paddleWidht / 2;
// 			paddleY = canvasHeight - paddleHeight;
// 		}
// 	}

// 	bricks.forEach((e) => {
// 		if (
// 			e.level > 0 &&
// 			ballX >= e.x &&
// 			ballX <= e.x + brickWidth &&
// 			ballY >= e.y &&
// 			ballY <= e.y + brickHeight
// 		) {
// 			ballOffsetY = -ballOffsetY;
// 			e.level -= 1;
// 			score += 10;
// 		}
// 	});
// };

// const renderBall = () => {
// 	context.beginPath();
// 	context.arc(ballX, ballY, ballSize, 0, 3 + Math.PI);
// 	context.fillStyle = "fuchsia";
// 	context.fill();
// 	context.closePath();
// 	handleWhilePlay();
// };

// const handleKeyDown = (e) => {
// 	if (e.key == "ArrowLeft") {
// 		leftPassed = true;
// 	}
// 	if (e.key == "ArrowRight") {
// 		rightPassed = true;
// 	}
// };

// const handleKeyUp = (e) => {
// 	if (e.key == "ArrowLeft") {
// 		leftPassed = false;
// 	}
// 	if (e.key == "ArrowRight") {
// 		rightPassed = false;
// 	}
// };

// const renderGame = () => {
// 	context.clearRect(0, 0, canvasWidth, canvasHeight);
// 	let win = true;
// 	bricks.forEach((e) => {
// 		if (e.level != 0) {
// 			win = false;
// 		}
// 	});
// 	if (lives <= 0) {
// 		gameLose();
// 	} else {
// 		if (win) {
// 			gameWin();
// 		} else {
// 			context.font = "Bold 24px arial sans-serif";
// 			context.fillStyle = "crimson";
// 			context.fillText(`Lives : ${lives}`, 50, 50, 200);
// 			context.fillText(`Score : ${score}`, 250, 50, 200);
// 			renderBricks();
// 			renderPaddle();
// 			renderBall();
// 		}
// 	}
// };

// document.addEventListener("keydown", handleKeyDown);
// document.addEventListener("keyup", handleKeyUp);

// setInterval(() => {
// 	renderGame();
// }, 10);

// console.log(bricks);
