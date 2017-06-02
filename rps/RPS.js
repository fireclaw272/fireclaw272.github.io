$(document).ready(function(){
	
	$('<div>').appendTo('#body').addClass('menu-btn');
	$('<p>').appendTo('.menu-btn').text("Menu");
	$('<div>').appendTo('#body').addClass('menu');
	$('<ul>').appendTo('.menu');
	$('<li>').appendTo('.menu ul').addClass('menu-close').text('Close');
	$('<li>').appendTo('.menu ul').addClass('link1');
	$('<a>').appendTo('.link1').attr("href","http://cottonarmadillo.freetzi.com/").text('Home');
	$('<li>').appendTo('.menu ul').addClass('link2');
	$('<a>').appendTo('.link2').attr("href","http://cottonarmadillo.freetzi.com/smartbot/").text('About');
	$('<li>').appendTo('.menu ul').addClass('link3');
	$('<a>').appendTo('.link3').attr("href","http://cottonarmadillo.freetzi.com/smartbot/").text('Help');
	$('<li>').appendTo('.menu ul').addClass('link4');
	$('<a>').appendTo('.link4').attr("href","http://cottonarmadillo.freetzi.com/smartbot/").text('SmartBot');
	$('<li>').appendTo('.menu ul').addClass('link5');
	$('<a>').appendTo('.link5').attr("href","http://cottonarmadillo.freetzi.com/rps/").text('RPS');
	$('<li>').appendTo('.menu ul').addClass('link6');
	$('<a>').appendTo('.link6').attr("href","http://cottonarmadillo.freetzi.com/recipe/").text('Recipe');
	$('<li>').appendTo('.menu ul').addClass('link7');
	$('<a>').appendTo('.link7').attr("href","http://cottonarmadillo.freetzi.com/cashier/").text('Cashier');
	//$('<li>').appendTo('.menu ul').addClass('link____');
	//$('<a>').appendTo('.link____').attr("href","http://_______________").text('____');
	
	$('.menu-btn').click(function(){
		$('.menu').animate({
			left: "0px"
		}, 200);
		
		$('#container').animate({
			left: "150px"
		}, 200);
	});
	$('.menu-close').click(function(){
		$('.menu').animate({
			left: "-150px"
		}, 200);
		$('#container').animate({
			left: "0px"
		}, 200);
	});
	
	
	var userChoice = "rock"
	var selected = 0
	var btn_background = function(selected){
		if(selected === 0){
			$('.button p').css("display", "none");
		}
		else{
			$('.button p').css("display", "inline-block");
		}};
	var scoreUser = 0;
	var scoreComputer = 0;
	
	var ready = function(){
		if(selected === 1){
 
			var computerChoice = Math.random();
	
			if(computerChoice < 0.34){
				computerChoice = "rock"
			}
			else if(computerChoice <=0.67){
				computerChoice = "paper"
			}
			else{
				computerChoice = "scissors"
			}
			
			var userWin = function(scoreUser){
				return "scoreUser + 1"
			};
			var computerWin = function(scoreComputer){
				return "scoreComputer + 1"
			};
			
			$('<p>').text("Computer:" + " " + computerChoice).appendTo('#container').addClass('result');
		
			var compare = function(userChoice, computerChoice){
				if(userChoice === computerChoice){
					compare = "It's a tie!"
				}
				else if(userChoice === "rock"){
					if(computerChoice === "paper"){
						compare = "Paper beats rock, you lose."
						scoreComputer = scoreComputer + 1;
					}
					else{
						compare = "Rock beats scissors, you win!"
						scoreUser = scoreUser + 1;
					}
				}
				else if(userChoice === "paper"){
					if(computerChoice === "rock"){
						compare = "Paper beats rock, you win!"
						scoreUser = scoreUser + 1;
					}
					else{
						compare = "Scissors beats paper, you lose."
						scoreComputer = scoreComputer + 1;
					}
				}
				else{
					if(computerChoice === "rock"){
						compare = "Rock beats scissors, you lose."
						scoreComputer = scoreComputer + 1;
					}
					else{
						compare = "Scissors beats paper, you win!"
						scoreUser = scoreUser + 1;
					}
				}
			};

			$('#rock').attr("src", "Rock.png");
			$('#paper').attr("src", "Paper.png");
			$('#scissors').attr("src", "Scissors.png");
			compare(userChoice,computerChoice);
			$('<p>').text(compare).appendTo('#container').addClass('result');
			selected = 0;
			btn_background(selected);
			$('.User').text(scoreUser);
			$('.Computer').text(scoreComputer);
			if(scoreUser >= 10){
				$('.User').css("right", "78vw")
			}
			if(scoreComputer >= 10){
				$('.Computer').css("left", "78vw")
			}
		}
	};
	
	var pickRock = function(){
		$('#rock').attr("src", "Rock-Select.png");
		$('#paper').attr("src", "Paper.png");
		$('#scissors').attr("src", "Scissors.png");
		userChoice = "rock";
		$('.result').remove();
		selected = 1;
		btn_background(selected);
	};
	
	var pickPaper = function(){
		$('#paper').attr("src", "Paper-Select.png");
		$('#rock').attr("src", "Rock.png");
		$('#scissors').attr("src", "Scissors.png");
		userChoice = "paper";
		$('.result').remove();
		selected = 1;
		btn_background(selected);
	};
	
	var pickScissors = function(){
		$('#scissors').attr("src", "Scissors-Select.png");
		$('#paper').attr("src", "Paper.png");
		$('#rock').attr("src", "Rock.png");
		userChoice = "scissors";
		$('.result').remove();
		selected = 1;
		btn_background(selected);
	};
	
	
	$('#rock').click(function(){
		pickRock();
	});
	$('#paper').click(function(){
		pickPaper();
	});
	$('#scissors').click(function(){
		pickScissors();
	});	
	
	$('.button p').click(function(){
		ready();
	});
	
	$(document).keydown(function(event){
		if(event.which === 13){
			ready();
		}
		else if(event.which === 65){
			pickRock();
		}
		else if(event.which === 83){
			pickPaper();
		}
		else if(event.which === 68){
			pickScissors();
		}
	});
	
	var color = ["black","red","orange","yellow","green","blue","purple"];
	var counter =1
	$('.User').click(function(){
		$('.User').css("color",color[counter])
		counter = counter + 1
		if(counter === 7){
			counter = 0
		}
	});
	var counterComputer = 1
	$('.Computer').click(function(){
		$('.Computer').css("color",color[counterComputer])
		counterComputer = counterComputer + 1
		if(counterComputer === 7){
			counterComputer = 0
		}
	});
	
});