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
	$('<li>').appendTo('.menu ul').addClass('link8');
	$('<a>').appendTo('.link8').attr("href","http://cottonarmadillo.freetzi.com/").text('Timer');
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
};

$(document).ready(main);