#!/usr/bin/node

const header = $('header');
const divHeader = $('#toggle_header');

divHeader.on('click', function () {
  if (header.hasClass('green')) {
    $(header).removeClass('green').addClass('red');
  } else {
    $(header).removeClass('red').addClass('green');
  }
});
