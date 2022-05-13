$(document).ready(function () {
	$('.slider').slick({
		dots: true,
		easing: 'leniar',
		autoplay: true,
		speed: 500,
		autoplaySpeed: 3000,
		pauseOnFocus: true,
		pauseOnHover: true,
		pauseOnDotsHover: true,
		waitForAnimate: true,
		touchThreshold: 10
	});
});



$(document).ready(function () {
	$('.header__burger,.header__link').click(function (event) {
		$('.header__burger,.header__list').toggleClass('active');
		$('body').toggleClass('lock');
	});
});
