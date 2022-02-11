$(document).ready(function () {
   $('.header__burger').click(function (event) {
      $('.header__burger,.header__list').toggleClass('active');
   })
})

$(document).ready(function () {
   $('.dayandnight__bottom').click(function (event) {
      $('.dayandnight__bottom,.content__title,body,.header,.header__list,.header__burger,.content__items,.footer').toggleClass('day');
   })
})
