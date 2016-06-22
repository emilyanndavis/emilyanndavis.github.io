$(document).ready(function() {
	
	$('.menu-link').on('click', function(event) {
		event.preventDefault();
		var target = this.hash;		
		$('html, body').animate({
			scrollTop: $(target).offset().top
		}, 700, function() {
			window.location.target = target;
		});
	});
	
	$('.collapsed').on('click', function() {
		if ($('h1').hasClass('room-for-menu')) {
			$('h1').animate(
				{paddingTop: '160px'}, 500, function() {
					$('h1').removeClass('room-for-menu');
				});
		}
		else {		
			$('h1').animate(
				{paddingTop: '160px'}, 300, function() {
					$('h1').addClass('room-for-menu');
				});
		}
	});

	$('.fa, .fcc-logo').on('mouseenter focusin', function () {
		$(this).animate({opacity: 0.7}, 50);	
        $(this).closest('div').find('p').slideDown();
	});
	
	$('.fa, .fcc-logo').on('mouseleave focusout', function () {
		$(this).animate({opacity: 1}, 50);	
        $(this).closest('div').find('p').slideUp();
	});
	
});
   
		
