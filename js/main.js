// БУРГЕР
$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

// СЛАЙДЕР
// $(document).ready(function() {
// 	$('.features__item-title').click(function(event) {
// 		$(this).toggleClass('active').next().slideToggle(300);
// 	});
// });

// $(document).ready(function(windowSize()) {
// 	if ($(window).width() > '765'){
// 		$('.features__item-text').slideUp(300);
// 	}
// }

// АККОРДЕОН
$(document).ready(function() {
	$('.features__item-title').click(function(event) {
		if ($(window).width() <= '765'){
			$('.features__item-title').not($(this)).removeClass('active');
			$('.features__item-text').not($(this).next()).slideUp(300);
			$(this).toggleClass('active').next().slideToggle(300);
		}
	});


});

