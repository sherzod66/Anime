$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger,.header__list').toggleClass('active');
		$('body').toggleClass('lock');
	})
});

/*const nameUser = prompt("Ведите имя");
const userName = document.querySelector('.block__title');
const userNameElement = userName.innerHTML;
userName.innerHTML = `${userNameElement} <p>${nameUser}</p>`;*/