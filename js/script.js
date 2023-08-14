const getData = ()=> {
	const pushItem = document.getElementById('push')
	date.forEach(anime=> {
		const newElem = document.createElement('div')
		newElem.classList.add('content__column')
		newElem.innerHTML = `
<a href=${anime.link}>
<div class="content__items">
<div class="content__img">
<img data-src=${anime.image}
src="img/1px1px.png" alt=${anime.name}>
</div>
<div class="content__title-anime">
<p class="name">${anime.name}</p>
<p>${anime.description}</p>
</div>
</div>
</a>`
		pushItem.prepend(newElem)
	})

}
getData()


window.addEventListener("load", (e) => {
	const die = document.querySelector('.die');
	die.classList.remove('die');
	die.remove();
	const loazyImages = document.querySelectorAll('img[data-src]');
	const windowHeight = document.documentElement.clientHeight;

	let loazyImagesPositions = [];
	if (loazyImages.length > 0) {
		loazyImages.forEach(img => {
			if (img.src) {
				loazyImagesPositions.push(img.getBoundingClientRect().top + scrollY);
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
			item => scrollY > item - windowHeight
		);
		if (imgIndex >= 0) {
			if (loazyImages[imgIndex].dataset.src) {
				loazyImages[imgIndex].src = loazyImages[imgIndex].dataset.src;
				loazyImages[imgIndex].removeAttribute('data-src');
			}
			delete loazyImagesPositions[imgIndex];
		}
	}
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

const header = document.querySelector('.header');
window.addEventListener("scroll", function (event) {
	if (scrollY > 100) {
		this.setTimeout(() => {
			header.classList.add('color');
		}, 200)

	}
	else {
		header.classList.remove('color');
	}
});

const mainForm = document.forms.main;
const mainFormInput = mainForm.input;
const mainFormButton = mainForm.nameButton;
let arr = [];


mainForm.addEventListener("submit", function sub(event) {
	event.preventDefault();
	if (mainFormInput.value) {
		//let text = mainFormInput.value;
		arr.unshift(mainFormInput.value);
		mainFormInput.value = "";
		const chatContainer = document.querySelector('.chat__container');
		chatContainer.insertAdjacentHTML(
			"beforeend",
			`<div class="coment"><p>${arr[0]}</p>
					</div>`
		);
		//const scroll = document.querySelector('.')
		chatContainer.scrollBy(0, 1000);
		console.log(arr)
	}
});





