// "use strict";

let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');


let personalMovieDB = {
    "count": numberOfFilms, //передаеться ответ на первый вопрос
    "movies": {}, //пустой обьект
    "actors": {}, //пустой обьект
    "genres": [], //пустой массив
    "privat": false,  //логическое "ложное"
};
console.log("hello");

let lastFilm = prompt("один из последних просмотренных фильмов?", '');
let gradeFilm = prompt("на сколько оцените его?", '');
let lastFilmTwo = prompt("один из последних просмотренных фильмов?", '');
let gradeFilmTwo = prompt("на сколько оцените его?", '');

let movies = {
    [lastFilm]: gradeFilm,
};

personalMovieDB.movies[lastFilm] = gradeFilm;
personalMovieDB.movies[lastFilmTwo] = gradeFilmTwo;

console.log(personalMovieDB);