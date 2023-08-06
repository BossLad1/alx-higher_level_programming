#!/usr/bin/node

const updateHeader = $("#update_header");
const header = $("header");

updateHeader.on("click", function () {
  const text = "New Header!!!";
  header.text(text);
});
