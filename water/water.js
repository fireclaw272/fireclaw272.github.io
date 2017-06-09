//----------shows toolTip----------//
var x;
var y;
var toolTip = function(){
	var tTY = y-70 + "px";
	var tTX = x+20 + "px"
	document.getElementById('toolTip').style.top=tTY;
	document.getElementById('toolTip').style.left=tTX;
};
var tTDisappear = function(){
	document.getElementById('toolTip').style.visibility="visible"
	var tTGone= setTimeout(function(){document.getElementById('toolTip').style.visibility="hidden"},9000);
	window.tTGone = tTGone;
};


//----------Set water amount ----------//
var waterTotal = "--oz";
var waterCurrent = "0";








window.onload = function(){
	//----------shows tooltip----------//
	var weight = document.getElementById('weight');
	
	var mousePos = function(event){
		 x = event.clientX;
		 y = event.clientY;
		var position = "X:"+ x + ",Y:"+y;
	}

	weight.addEventListener('mousemove', mousePos);
	weight.addEventListener('mousemove', toolTip);
	weight.addEventListener('mouseenter', tTDisappear);
	weight.addEventListener('mouseleave', function(){clearTimeout(tTGone)});
	
	//----------Set water amount----------//
	var calculatePercent = function(){
		if(isNaN(waterCurrent)===false && isNaN(waterTotal)===false){
			var percent = 100-(Math.floor(waterCurrent/waterTotal*100));
			console.log(percent);
			document.getElementById('waterGlassPercent').innerHTML = percent+"% Left";
			var waterImage = document.getElementById('image');
			switch(true){
				case (percent <= 0):
					waterImage.src = "0%.png";
					break
				case (percent <= 5):
					waterImage.src = "5%.png";
					break;
				case (percent <= 10):
					waterImage.src = "10%.png";
					break;
				case (percent <= 15):
					waterImage.src = "15%.png";
					break;
				case (percent <= 20):
					waterImage.src = "20%.png";
					break;
				case (percent <= 25):
					waterImage.src = "25%.png";
					break;
				case (percent <= 30):
					waterImage.src = "30%.png";
					break;
				case (percent <= 35):
					waterImage.src = "35%.png";
					break;
				case (percent <= 40):
					waterImage.src = "40%.png";
					break;
				case (percent <= 45):
					waterImage.src = "45%.png";
					break;
				case (percent <= 50):
					waterImage.src = "50%.png";
					break;
				case (percent <= 55):
					waterImage.src = "55%.png";
					break;
				case (percent <= 60):
					waterImage.src = "60%.png";
					break;
				case (percent <= 65):
					waterImage.src = "65%.png";
					break;
				case (percent <= 70):
					waterImage.src = "70%.png";
					break;
				case (percent <= 75):
					waterImage.src = "75%.png";
					break;
				case (percent <= 80):
					waterImage.src = "80%.png";
					break;
				case (percent <= 85):
					waterImage.src = "85%.png";
					break;
				case (percent <= 90):
					waterImage.src = "90%.png";
					break;
				case (percent <= 95):
					waterImage.src = "95%.png";
					break;
				case (percent <= 100):
					waterImage.src = "100%.png";
					break;
				default:
					waterImage.src = "50%.png"
					
			}
		}
		else{
			console.log("something is not a number")
		}
		
	};
	
	var setTotal =function(event){
		if(event.keyCode ===13){
		var weightInput = document.getElementById('weightInputId').value;
		if(isNaN(weightInput)){
			alert("This is not a valid number!");
		}
		else{
			waterTotal = Math.floor(weightInput*2/3);
			console.log(waterTotal);
			document.getElementById('waterTotal').innerHTML= waterTotal+" oz"
			calculatePercent();
		}};
		
	};
	
	var setDrank = function(event){
		if(event.which === 13 || event.keyCode === 13){
			waterCurrent = Math.floor(waterHad.value)*1 + waterCurrent*1;
			waterDrank.innerHTML = waterCurrent+" oz";
			calculatePercent();
		}
		else{
			return
		}
		
	};
	
	var waterDrank = document.getElementById('waterDrank');
	
	var weightInputId = document.getElementById('weightInputId');
	var waterHad = document.getElementById("alreadyDrankForm");
	
	weightInputId.addEventListener('keypress',function(){setTotal(event)});
	waterHad.addEventListener('keypress',function(){setDrank(event)});
	
	//----------Add Alert from button----------//
	var promptAnswer;
	var add = document.getElementById('manualAddButton');
	var alertTime = function(){
		promptAnswer = +prompt("How many ounces of water did you drink?");
		console.log(promptAnswer);
		if(isNaN(promptAnswer) === false){
			waterCurrent = waterCurrent*1 + promptAnswer*1;
			waterDrank.innerHTML = waterCurrent+" oz";
			calculatePercent();
			console.log("Hello");
		}
		else{
			alert("It seems you did not enter a number.")
			alertTime();
			console.log("Bye");
		}
	};
	add.addEventListener('click',alertTime);
	
	//----------Add Alert every hour----------//

	var timeChecker = function(){
		var date = new Date();
		if(date.getMinutes()===0 && date.getSeconds()===0 && date.getMilliseconds()===0){
			alertTime();
		}
	};
	
	setInterval(timeChecker,1);
	
	//----------When goal is reached----------//
	var setPercentTo0 = function(){
		if(waterCurrent>=waterTotal){
			document.getElementById('waterGlassPercent').innerHTML = "0% Left";
			
		}
		
	};
	
	setInterval(setPercentTo0, 100);
	
	
	
	
	
	
	
	
	
};