#!/usr/bin/node

onst apiUrl = 'https://hellosalut.stefanbohacek.dev/?lang=fr';

$.get(apiUrl, function (data) {
  const divHello = $('#hello');
  divHello.text(data.hello);
});
