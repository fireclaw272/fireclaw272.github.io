$(document).ready(function(){
	
	var tensMinute = 0
	var minute = 5
	var tensSecond = 0
	var second = 0
	var totalTime = 0

	
	$('#tensMinuteUp').after('<p>');
	$('#tensMinute p').addClass('tensMinuteCounter').text(tensMinute);
	
	$('#minuteUp').after('<p>');
	$('#minute p').addClass('minuteCounter').text(minute);
	
	$('#tensSecondUp').after('<p>');
	$('#tensSecond p').addClass('tensSecondCounter').text(tensSecond);
	
	$('#secondUp').after('<p>');
	$('#second p').addClass('secondCounter').text(second);
	
	var listAll = function(){
		$('.tensMinuteCounter').text(tensMinute);
		$('.minuteCounter').text(minute);
		$('.tensSecondCounter').text(tensSecond);
		$('.secondCounter').text(second);
	};
	
	

	$('#tensMinuteUp').click(function(){
		if (tensMinute >= 5){
			tensMinute = 6;
			minute = 0;
			tensSecond =0;
			second =0;
			listAll();
		}
		else{
		tensMinute += 1;
		listAll();
		};
	});
	
	$('#minuteUp').click(function(){
		if(tensMinute === 6){
			minute = 0;
			tensSecond =0;
			second =0;
		}
		else if (minute >= 9){
			minute = 0;
			tensMinute +=1;
			listAll();
		}
		else{
		minute += 1;
		listAll();
		};
	});
	
	$('#tensSecondUp').click(function(){
		if(tensMinute === 6){
			minute = 0;
			tensSecond =0;
			second =0;
		}
		
		else if(minute ===9 && tensSecond === 5){
			minute = 0;
			tensSecond =0;
			tensMinute +=1;
			listAll();
		}
		
		else if(tensSecond >= 5){
			tensSecond = 0;
			minute += 1;
			listAll();
		}
		else{
		tensSecond += 1;
		listAll();
		};
	});
	
	$('#secondUp').click(function(){
		if(tensMinute === 6){
			minute = 0;
			tensSecond =0;
			second =0;
		}
		
		else if(tensMinute === 5 && minute === 9 && tensSecond === 5 && second >= 9){
			tensMinute = 6;
			minute = 0;
			tensSecond =0;
			second =0;
			listAll();
		}
		
		else if(minute >= 9 && tensSecond >= 5 && second >=9 ){
			second =0;
			tensSecond =0;
			minute =0;
			tensMinute +=1;
			listAll();
		}
		
		else if(tensSecond >= 5 && second >=9  ){
			second = 0;
			tensSecond = 0;
			minute += 1;
			listAll();
		}
		
		else if(second >= 9){
			second = 0;
			tensSecond += 1;
			listAll();
		}
		else{
		second += 1;
		listAll();
		console.log(second)
		};
	});
	
	
	
	
	$('#tensMinuteDown').click(function(){
		if(tensMinute <= 0){
			tensMinute = 0
		}
		else{
		tensMinute -= 1;
		$('.tensMinuteCounter').text(tensMinute);
		console.log(tensMinute)
		};
	});
	
	$('#minuteDown').click(function(){
		if(minute <= 0){
			minute = 0
		}
		else{
		minute -= 1;
		$('.minuteCounter').text(minute);
		console.log(minute)
		};
	});
	
	$('#tensSecondDown').click(function(){
		if(tensSecond <= 0){
			tensSecond =0
		}
		else{
		tensSecond -= 1;
		$('.tensSecondCounter').text(tensSecond);
		console.log(tensSecond)
		};
	});
	
	$('#secondDown').click(function(){
		if(second <= 0){
			second = 0
		}
		else{
		second -= 1;
		$('.secondCounter').text(second);
		console.log(second)
		};
	});
	
	$('.reset').click(function(){
		tensMinute =0;
		minute =5;
		tensSecond =0;
		second =0;
		listAll();
		$('.start').removeClass('active');
		clearInterval(startTimer);
		clearInterval(startChecker);
	});
	
	
	
	
	var calcTimeRemaining = function(){
		totalTime = tensMinute*600 + minute*60 + tensSecond*10 + second;
		totalTime -= 1;
		console.log(totalTime);
		tensMinute = (totalTime - totalTime%600)/600;
		console.log("tensMinute:" + tensMinute);
		minute =  ((totalTime - totalTime%60)-(tensMinute*600))/60;
		console.log("minute:" + minute);
		tensSecond = ((totalTime - totalTime%10)-(tensMinute*600)-(minute*60))/10;
		console.log("tensSecond:" + tensSecond);
		second = totalTime - (tensMinute*600)-(minute*60)-(tensSecond*10);
		console.log("Second:" + second);
		listAll();
	};
	
	
	$('.start').click(function(){
		if(tensMinute <= 0 && minute <=0 && tensSecond <=0 && second <= 0){
			return false
		}
		else if ($(this).hasClass('active')){
			return false;
		}
		else{
		console.log(totalTime);
		var checker = function(){
			if(tensMinute <= 0 && minute <=0 && tensSecond <=0 && second <= 0){
				clearInterval(startTimer);
				tensMinute =0;
				minute =0;
				tensSecond =0;
				second =0;
				listAll();
				selectedAudio.loop = true;
				selectedAudio.play();
				$('#stop').css('visibility','visible');
			}
		};
		var startTimer = setInterval(calcTimeRemaining,1000);
		var startChecker = setInterval(checker,1000);
		window.startTimer = startTimer;
		window.startChecker = startChecker;
		$(this).addClass('active')
		};
	});
	
	
	$('.pause').click(function(){
		clearInterval(startTimer);
		clearInterval(startChecker);
		$('.start').removeClass('active');
	});
	
	$('#stop').click(function(){
		selectedAudio.pause();
		selectedAudio.loop =false;
		$(this).css('visibility','hidden');
		clearInterval(startTimer);
		clearInterval(startChecker);
		minute = 5;
		listAll();
		$('.start').removeClass('active');
	});
	
	//-----------------------------Alarm Sounds-------------------------//
	var audioAlarmClock = new Audio('alarmClock.wav');
	var audioBeep = new Audio('beep.wav');
	var audioFireAlarm = new Audio('fireAlarm.wav');
	var selectedAudio = audioAlarmClock;
	
	$('#alarmClock').click(function(){
		$(this).addClass("currentSound");
		$('#beep').removeClass("currentSound");
		$('#fireAlarm').removeClass("currentSound");
		selectedAudio = audioAlarmClock;
		selectedAudio.play();
		
	});
	
	$('#beep').click(function(){
		$(this).addClass('currentSound');
		$('#alarmClock').removeClass("currentSound");
		$('#fireAlarm').removeClass("currentSound");
		selectedAudio = audioBeep;
		selectedAudio.play();
		
	});
	
	$('#fireAlarm').click(function(){
		$(this).addClass('currentSound');
		$('#alarmClock').removeClass("currentSound");
		$('#beep').removeClass("currentSound");
		selectedAudio = audioFireAlarm;
		selectedAudio.play();
	});
	//------------------------------Alarm Menu Movement-------------------//
	
	var menuPosition = 0 // 0 means menu is closed, 1 means menu is open
	
	
	
	$('.alarmOpen').click(function(){
		
		if(menuPosition === 0){
		$(this).animate({
			right: "140px"
		},200);
		
		$('.alarmMenu').animate({
			right:"0px"
		}, 200);
		$('#leftArrow').text(">");
		menuPosition = 1;
		}
		else{
		$(this).animate({
			right:"0px"
		}, 200);
		$('.alarmMenu').animate({
			right:"-140px"
		}, 200);
		$('#leftArrow').text("<");
		menuPosition = 0;
		}
	});
	
	//---------------Switching between timer and stopwatch---------------//
	
	var selectedMode = 0 // 0 means timer and 1 means stopwatch
	
	$('.overallStopwatch').hide();
	
	$('#timerButton').click(function(){
		$(this).addClass("currentMode");
		$('#stopwatchButton').removeClass('currentMode');
		$('.overallTimer').fadeIn(1000);
		$('.overallStopwatch').hide();
		$('#head h1').text("Timer");
	});
	
	$('#stopwatchButton').click(function(){
		$(this).addClass("currentMode");
		$('#timerButton').removeClass('currentMode');
		$('.overallTimer').hide(10);
		$('.overallStopwatch').fadeIn(1000);
		$('#head h1').text("Stopwatch");
	});
	
	//-------------------Setting up Stopwatch------------------------------//
	
	var stopwatchMinute = 0
	var stopwatchTensSecond = 0
	var stopwatchSecond =0
	var stopwatchMs = "00"

	$('#stopwatchMinute').append('<p>');
	$('#stopwatchMinute p').addClass('stopwatchMinuteCounter').text(stopwatchMinute);
	$('#stopwatchTensSecond').append('<p>');
	$('#stopwatchTensSecond p').addClass('stopwatchTensSecondCounter').text(stopwatchTensSecond);
	$('#stopwatchSecond').append('<p>');
	$('#stopwatchSecond p').addClass("stopwatchSecondCounter").text(stopwatchSecond);
	$('#stopwatchMs').append('<p>');
	$('#stopwatchMs p').addClass('stopwatchMsCounter').text(stopwatchMs);
	
	//------------------Programming stopwatch------------------------//
	
	var startOrStop = 0 //0 means not on, 1 means on
	
	var stopwatchListAll = function(){
		$('.stopwatchMinuteCounter').text(stopwatchMinute);
		$('.stopwatchTensSecondCounter').text(stopwatchTensSecond);
		$('.stopwatchSecondCounter').text(stopwatchSecond);
		$('.stopwatchMsCounter').text(stopwatchMs);
	};
	var startStopwatch;
	var stopwatchChecker;
	var currentTime = 0
		
	
	var calcTime = function(){
		currentTime +=1;
		console.log(currentTime);
		stopwatchSecond = (currentTime - currentTime%100)/100;
		stopwatchMs = (currentTime -stopwatchSecond*100)
		stopwatchListAll();
		if(stopwatchTensSecond === 5 && stopwatchSecond === 9 && stopwatchMs === 99){
			stopwatchTensSecond = 0;
			stopwatchSecond =0;
			stopwatchMs = 0;
			currentTime =0;
			stopwatchMinute +=1;
			
		}
		else if(stopwatchSecond ===9 && stopwatchMs === 99){
			currentTime =0;
			stopwatchTensSecond +=1;
		}
	};
	
	$('#startStop').click(function(){ 
		if(startOrStop === 0){ 										
			$(this).text('Stop');									
			startStopwatch = setInterval(calcTime,10);	
			startOrStop = 1;										
		}
			else if(startOrStop === 1){							
			clearInterval(startStopwatch);							
			$(this).text('Start');									
			startOrStop = 0;	
		};
	});
	$('#restart').click(function(){
		clearInterval(startStopwatch);
		startOrStop = 0;
		$('#startStop').text('Start');
		currentTime = 0;
		stopwatchMinute =0;
		stopwatchTensSecond =0;
		stopwatchSecond =0;
		stopwatchMs = "00";
		stopwatchListAll();
	});
	
	
	
	
	
	
	
	
});