var main = function(){
	
	
	$('.button').click(function(){
		var questions = $('.thought-box').val();
		var current = $('.current');
		var next = current.next();
		$('<ul>').appendTo('.list').addClass('current').addClass('question');
		$('<li>').text(questions).appendTo('.current').addClass('question-list-format');
		$('ul').removeClass('current');
		$('<ul>').appendTo('.list').addClass('reply').addClass('current');
		$('<li>').text('Shut up!').addClass('reply-list-format').appendTo('.current');
		$('ul').removeClass('current');
		$('.thought-box').val("");
	});
	
	
	$('.thought-box').keyup(function(event){
		if(event.which===13) {
			var questions = $('.thought-box').val();
			var current = $('.current');
			var next = current.next();
			$('<ul>').appendTo('.list').addClass('current').addClass('question');
			$('<li>').text(questions).appendTo('.current').addClass('question-list-format');
			$('ul').removeClass('current');
			$('<ul>').appendTo('.list').addClass('reply').addClass('current');
			$('<li>').text('Shut up!').addClass('reply-list-format').appendTo('.current');
			$('ul').removeClass('current');
			$('.thought-box').val("");
		};
	});

};
$(document).ready(main);