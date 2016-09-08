'use strict';

console.log('\'Allo \'Allo!');
/* global moment */
'use strict';

// Google calendar feed
$(function () {
  $.ajax({
    url: 'https://www.googleapis.com/calendar/v3/calendars/' + 
      'dearorphans.com_3b0g1nnoopdajd14cag057qdk8%40group.calendar.google.com' +
      '/events?' +
      'maxResults=3&' +
      'orderBy=startTime&' +
      'singleEvents=true&' +
      'timeMin=' + encodeURIComponent(moment().format()) + '&' +
      'fields=items(description%2Cend%2Clocation%2Cstart%2Csummary)&' + 
      'key=AIzaSyDFtpWPz-SxNrkmjpUuWVJq-tTIwJru72M'
  })
  .done(function (data) {
    for (var item in data.items) {

      var dt = document.createElement('dt');
      if (data.items[item].start.dateTime) {
        dt.innerHTML = moment(data.items[item].start.dateTime).format('LLL');
      } else {
        dt.innerHTML = moment(data.items[item].start.date).format('LL') + ' &ndash; ' + 
          moment(data.items[item].end.date).subtract(1, 'days').format('LL');
      }

      var dd = document.createElement('dd');
      $(dd).append(data.items[item].summary);

      $('dl#gigs-summary').append(dt);
      $('dl#gigs-summary').append(dd);
    }
  });
});
