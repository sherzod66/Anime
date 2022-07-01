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


const siteBarBurger = document.querySelector('.site-bar__burger');
const contentBar = document.querySelector('.content__side-bar');
const siteBarBody = document.querySelector('.site__burger-body')

siteBarBurger.addEventListener("click", burger);

function burger(event) {
	siteBarBurger.classList.toggle('click');
	contentBar.classList.toggle('click');
	siteBarBody.classList.toggle('click');
	//document.body.classList.toggle('lock');
}


siteBarBody.addEventListener("click", content);

function content(event) {
	siteBarBurger.classList.remove('click');
	contentBar.classList.remove('click');
	siteBarBody.classList.remove('click');
}


document.querySelector('#elastic').oninput = function () {
	let val = this.value.trim();
	const elasticItems = document.querySelectorAll('.content__column, .name');
	if (val != '') {
		elasticItems.forEach(function (elem) {
			if (elem.innerText.search(val) == -1) {
				elem.classList.add('hide');
			}
			else {
				elem.classList.remove('hide');
			}
		});
	}
	else {
		elasticItems.forEach(function (elem) {
			elem.classList.remove('hide');
		});
	}
}

