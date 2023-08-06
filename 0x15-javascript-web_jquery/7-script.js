#!/usr/bin/node

const character = $('#character');
const url = "https://swapi-api.alx-tools.com/api/people/5/?format=json";

$.get("https://swapi-api.alx-tools.com/api/people/5/?format=json", function(data) {
	character.text(data.name);
});
