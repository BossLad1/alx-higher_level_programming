#!/usr/bin/node

const listMovies = $("#list_movies");

$.get(
  "https://swapi-api.alx-tools.com/api/films/?format=json",
  function (data) {
    const results = data.results;
    for (i = 0; i < results.length; i++) {
      const title = results[i].title;
      const newElement = $("<li></li>").text(title);
      listMovies.append(newElement);
    }
  }
);
