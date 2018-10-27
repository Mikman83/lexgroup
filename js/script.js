
$(document).ready(function() {

	$('.main-nav__toggle').on('click', function(e) {
		e.preventDefault;
		$(this).toggleClass('main-nav__toggle--active');
		$('.main-nav').toggleClass('main-nav--active');
	});
	

});