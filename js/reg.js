window.addEventListener("load", (e) => {
	const die = document.querySelector('.die');
	die.classList.remove('die');
	die.remove();
})

/*$(document).ready(function () {
	$('.login,.registration').click(function (event) {
		$('.form,.login,.form-login').toggleClass('akt');
	});
});
*/
const logIn = document.querySelector('.login');
const reg = document.querySelector('.registration');

reg.addEventListener("click", function (event) {
	const formLogin = document.querySelector('.form-login');
	const form = document.querySelector('.form');
	formLogin.classList.add('ackt');
	form.classList.add('ackt');
	reg.classList.add('ackt');
	logIn.classList.add('ackt');
});

logIn.addEventListener("click", function (event) {
	const formLogin = document.querySelector('.form-login');
	const form = document.querySelector('.form');
	formLogin.classList.remove('ackt');
	form.classList.remove('ackt');
	reg.classList.remove('ackt');
	logIn.classList.remove('ackt');
});