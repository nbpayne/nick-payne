console.log('Hello Sydney.');

$('#navbarSupportedContent').on('show.bs.collapse', function () {
  $('.hometron').removeClass('visible').addClass('hidden');
  $('header').removeClass('undarken').addClass('darken');
})

$('#navbarSupportedContent').on('hide.bs.collapse', function () {
  $('.hometron').removeClass('hidden').addClass('visible');
  $('header').removeClass('darken').addClass('undarken');
})
