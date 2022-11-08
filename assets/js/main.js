$(document).ready(() => {
  $('.navbar__burger').on('click', function () {
    $(this).toggleClass('active');
    $('.navbar__list').toggleClass('active');
  });
});