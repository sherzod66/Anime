$(document).ready(function () {
   $('.header__burger').click(function (event) {
      $('.header__burger,.header__list').toggleClass('active');
   })
})

$(document).ready(function () {
   $('.dayandnight__bottom').click(function (event) {
      $('.dayandnight__bottom,.content__title,body,.header,.header__list,.header__burger,.content__items,.footer,.content__side-bar').toggleClass('day');
   })
})

$(document).ready(function () {
   $('.side-bar__join').click(function (event) {
      $('.side-bar__join,.side-bar__join-icon').toggleClass('join-icon');
   })
})

