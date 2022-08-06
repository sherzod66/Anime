window.addEventListener("load", (e) => {
	const die = document.querySelector('.die');
	die.classList.remove('die');
	die.remove();
})

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
siteBarBody.addEventListener("click", function (event) {
	siteBarBurger.classList.remove('click');
	contentBar.classList.remove('click');
	siteBarBody.classList.remove('click');
});




/*document.querySelector('#elastic').oninput = function () {
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
*/

const input = document.querySelector('#elastic');

input.oninput = function () {
	let val = input.value.toLowerCase();
	const elasticItems = document.querySelectorAll('.content__column, .name');
	if (val != '') {
		elasticItems.forEach(function (elem) {
			if (elem.innerText.toLowerCase().search(val) === -1) {
				elem.classList.add('hide');
			} else {
				elem.classList.remove('hide');
			}
		});
	} else {
		elasticItems.forEach(function (elem) {
			elem.classList.remove('hide');
		});
	}
}


window.addEventListener("scroll", function (event) {
	if (scrollY > 100) {
		const header = document.querySelector('.header');
		header.classList.add('color');
	}
	else {
		const header = document.querySelector('.header');
		header.classList.remove('color');
	}
});

const mainForm = document.forms.main;
const mainFormInput = mainForm.input;
const mainFormButton = mainForm.nameButton;

mainForm.addEventListener("submit", function (event) {
	event.preventDefault();
	//let text = mainFormInput.value;
	arr = [mainFormInput.value,]
	mainFormInput.value = "";
	const chatContainer = document.querySelector('.chat__container');
	chatContainer.insertAdjacentHTML(
		"beforeend",
		`<div class="coment"><p>${arr}</p>
		</div>`
	);
	//const scroll = document.querySelector('.')
	chatContainer.scrollBy(0, 1000);
});

const loazyImages = document.querySelectorAll('img[data-src]');
const windowHeight = document.documentElement.clientHeight;

let loazyImagesPositions = [];
if (loazyImages.length > 0) {
	loazyImages.forEach(img => {
		if (img.src) {
			loazyImagesPositions.push(img.getBoundingClientRect().top + pageYOffset);
			lazyScrollChek()
		}
	});
}

window.addEventListener("scroll", lazyScroll);

function lazyScroll() {
	if (document.querySelectorAll('img[data-src]').length > 0) {
		lazyScrollChek();
	}

}

function lazyScrollChek() {
	let imgIndex = loazyImagesPositions.findIndex(
		item => pageYOffset > item - windowHeight
	);
	if (imgIndex >= 0) {
		if (loazyImages[imgIndex].dataset.src) {
			loazyImages[imgIndex].src = loazyImages[imgIndex].dataset.src;
			loazyImages[imgIndex].removeAttribute('data-src');
		}
		delete loazyImagesPositions[imgIndex];
	}
}








