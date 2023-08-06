#!/usr/bin/node

const addItem = $('#add_item');
const myList = $('ul.my_list');

addItem.on('click', function () {
  const newElement = $('<li></li>').text('Item');
  myList.append(newElement);
});
