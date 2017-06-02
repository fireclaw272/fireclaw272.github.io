var canvas;
var canvasContext;
var ballX =50;
var ballSpeedX = 10;
var ballY =50;
var ballSpeedY = 4;

var paddle1Y = 250;
var paddle2Y = 250;
var paddleHeight = 100;
var paddleThickness = 15;

var playerScore = 0;
var computerScore =0;
var winScore = 3;
var showingWin = false;

var calculateMousePosition = function(evt){
	var rect = canvas.getBoundingClientRect();
	var root = document.documentElement;
	var mouseX = evt.clientX - rect.left - root.scrollLeft;
	var mouseY = evt.clientY - rect.top - root.scrollTop;
	return {
		x:mouseX,
		y:mouseY
	};
};

var ballReset = function(){
	if(playerScore >= winScore || computerScore >= winScore){
		showingWin =true;
	}
	ballSpeedX = -ballSpeedX;
	ballSpeedY /= -2;
	ballX = canvas.width/2;
	ballY =canvas.height/2;
	
};

var colorRect = function(topLeftX,topLeftY,width,height,color){
	canvasContext.fillStyle = color;
	canvasContext.fillRect(topLeftX,topLeftY,width,height);
};

var colorCircle = function(centerX,centerY,radius,color){
	canvasContext.fillStyle = color;
	canvasContext.beginPath();
	canvasContext.arc(centerX,centerY,radius,0,Math.PI*2,true);
	canvasContext.fill();
};

var drawNet = function(){
	for(var i=0; i< canvas.height; i+=30){
		colorRect(canvas.width/2-1,i,2,20,'white');
	}
};

var drawEverything = function(){
	colorRect(0,0,canvas.width,canvas.height,'black');
	canvasContext.fillStyle = 'white';
	if(showingWin){
		if(playerScore >= 3){
			canvasContext.fillText("Left Player won!", 360, 175)
		}
		else{
			canvasContext.fillText("Right Player won!", 360,175)
		}
		
		canvasContext.fillText("Click to continue", 360,250);
	}
	drawNet();
	colorRect(0,paddle1Y,paddleThickness,paddleHeight,'white');
	colorRect(canvas.width-paddleThickness,paddle2Y,paddleThickness,paddleHeight);
	colorCircle(ballX,ballY,10,"red");
	canvasContext.fillStyle = 'white';
	canvasContext.fillText("PlayerScore",175,50);
	canvasContext.fillText(playerScore,200,75);
	canvasContext.fillText("ComputerScore",575,50);
	canvasContext.fillText(computerScore,610,75);
};

var computerMovement = function(){
	if(paddle2Y+ (paddleHeight/2) < ballY -30){
		paddle2Y+=8;
	}
	else if(paddle2Y+ (paddleHeight/2) > ballY +30){
		paddle2Y -=8;
	}
};

var moveEverything = function(){
	if(showingWin){
		return
	}
	computerMovement();
	ballX += ballSpeedX;
	ballY += ballSpeedY;
	if(ballY >= canvas.height-10){
		ballSpeedY = -ballSpeedY;
	}
	if(ballY <=10){
		ballSpeedY = -ballSpeedY;
	}
	
	if(ballX > 770  && ballX <canvas.width && ballY > paddle2Y&& ballY < paddle2Y+paddleHeight){
		ballSpeedX = -ballSpeedX;
		var deltaY = ballY - (paddle2Y+(paddleHeight/2));
		ballSpeedY = deltaY*0.35
	}
	
	if(ballX >= canvas.width-10){
			playerScore += 1;
			ballReset();

	}
	
	if(ballX < paddleThickness+10 && ballX > 0 && ballY > paddle1Y && ballY < paddle1Y+paddleHeight){
		ballSpeedX =-ballSpeedX;
		var deltaY = ballY - (paddle1Y+(paddleHeight/2));
		ballSpeedY = deltaY*0.35
	}
	
	if(ballX <=00){
		computerScore+=1;
		ballReset();
	}
	
};

var handleClick = function(){
	playerScore =0;
	computerScore =0;
	showingWin =false;
	
};

window.onload = function(){
	var FPS = 30;
	canvas = document.getElementById('gameCanvas');
	canvasContext = canvas.getContext('2d');
	setInterval(function(){drawEverything();moveEverything();},1000/FPS);
	canvas.addEventListener('mousedown',handleClick);
	canvas.addEventListener('mousemove', function(evt){
			var mousePosition = calculateMousePosition(evt);
			paddle1Y = mousePosition.y -(paddleHeight/2);
		});
	
};


/*var ballXMomentum = 5;
var ballYMomentum = 3;

var moveEverything = function(){
	
	ballX += ballXMomentum;
	if(ballX === 790){
		ballXMomentum = -5;
	}
	else if(ballX === 0){
		ballXMomentum = 5;
	}
	
	ballY += ballYMomentum;
	if(ballY === 0){
		ballYMomentum = 5;
	}
	else if (ballY === 590){
		ballYMomentum = -5;
	}
};*/
