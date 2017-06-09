var main = function(){
	
	
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





















































