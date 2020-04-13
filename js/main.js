// БУРГЕР
$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

// СЛАЙДЕР
$(document).ready(function() {
	$('.features__item-title').click(function(event) {
		$(this).toggleClass('active').next().slideToggle(300);
		// $('body').toggleClass('lock');
	});
});