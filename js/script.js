"use strict";
// zero

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// personalMovieDB: {
//     'count': numberOfFilms,
//     'movies': {},
//     'actors': {},
//     'genres': arr{},
//     'privet': false;
    
    
// };

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних прросмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);



