var main = function(){
	
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
	
	
	$('.nextarrow').click(function(){
		var currentSlide = $('.slide-active');
		var nextSlide = currentSlide.next();
		var currentDot = $('.dot-active');
		var nextDot = currentDot.next();
		
		if(nextSlide.length === 0){
			nextSlide = $('.slide').first();
			nextDot = $('.dot').first();
		}
		
		currentSlide.fadeOut(500).removeClass('slide-active');
		nextSlide.fadeIn(500).addClass('slide-active');
		currentDot.removeClass('dot-active');
		nextDot.addClass('dot-active');
	});
	
	$('.prevarrow').click(function(){
		var currentSlide = $('.slide-active');
		var prevSlide = currentSlide.prev();
		var currentDot = $('.dot-active');
		var prevDot = currentDot.prev();
		
		if(prevSlide.length === 0){
			prevSlide = $('.slide').last();
			prevDot = $('.dot').last();
		}
		
		currentSlide.fadeOut(500).removeClass('slide-active');
		prevSlide.fadeIn(500).addClass('slide-active');
		currentDot.removeClass('dot-active');
		prevDot.addClass('dot-active');
	});
	
	
};
$(document).ready(main);





















































