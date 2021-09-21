console.log('Hello Sydney.');

$('#navbarSupportedContent').on('show.bs.collapse', function () {
  $('.hometron').removeClass('visible').addClass('hidden');
  $('header').removeClass('undarken').addClass('darken');
})

$('#navbarSupportedContent').on('hide.bs.collapse', function () {
  $('.hometron').removeClass('hidden').addClass('visible');
  $('header').removeClass('darken').addClass('undarken');
})

// Get Songkick gigs
$.getJSON(
  'https://api.songkick.com/api/3.0/artists/mbid:e794939d-318d-47af-b253-2994d09330da/calendar.json?apikey=hRGXicugpn2NSNFF',
  renderGigs
)

// Render Songkick gigs
function renderGigs(data) {
  var events = data.resultsPage.results.event;
  if(events.length) {
    for (var i = events.length - 1; i >= 0; i--) {
      $('#gigs').append(
        '<dt>' + moment(events[i].start.date).format('MMM Do, YYYY') + '</dt>' +
        '<dd><a href="/tour/">' + events[i].displayName + '</a></dd>'
      );
    }  
  } else {
    $('#gigs').replaceWith('<p>No upcoming dates</p>');
  }
}
