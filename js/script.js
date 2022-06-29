$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger,.header__list').toggleClass('active');
		$('body').toggleClass('lock');
	})
})

$(document).ready(function () {
	$('.dayandnight__bottom').click(function (event) {
		$('.dayandnight__bottom,.content__title,body,.header,.header__list,.header__burger,.content__items,.footer,.content__side-bar,.site-bar__burger').toggleClass('day');
	})
})

$(document).ready(function () {
	$('.site-bar__burger').click(function (event) {
		$('.site-bar__burger,.content__side-bar').toggleClass('click');
		$('body').toggleClass('lock');
	})
})



function burger(event) {
	if(!event.target.closest('.click')) {
		const saidBar = document.querySelector('.content__side-bar');
		const saidBarBurger = document.querySelector('.site-bar__burger');
		saidBar.classList.remove('click');
		saidBarBurger.classList.remove('click');
	}
}
document.addEventListener("click", burger);