#!/usr/bin/node

const header = $('header');
const divHeader = $('#red_header');

divHeader.on('click', function () {
  header.addClass('red');
});
