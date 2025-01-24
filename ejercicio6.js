const starWarsMovies = [
  { title: 'A New Hope', releaseYear: 1977 },
  { title: 'The Empire Strikes Back', releaseYear: 1980 },
  { title: 'Return of the Jedi', releaseYear: 1983 },
  { title: 'The Phantom Menace', releaseYear: 1999 },
  { title: 'Attack of the Clones', releaseYear: 2002 },
  { title: 'Revenge of the Sith', releaseYear: 2005 },
  { title: 'The Force Awakens', releaseYear: 2015 },
  { title: 'The Last Jedi', releaseYear: 2017 },
  { title: 'The Rise of Skywalker', releaseYear: 2019 },
  { title: 'Rogue One', releaseYear: 2016 },
  { title: 'Solo', releaseYear: 2018 }
]

let decada70s = []
let decada80s = []
let decada90s = []
let decada00s = []
let decada10s = []
for (const movie of starWarsMovies) {
  if (movie.releaseYear < 1980) {
    decada70s.push(movie)
  } else if (movie.releaseYear < 1990) {
    decada80s.push(movie)
  } else if (movie.releaseYear < 2000) {
    decada90s.push(movie)
  } else if (movie.releaseYear < 2010) {
    decada00s.push(movie)
  } else {
    decada10s.push(movie)
  }
}
console.log('Películas de StarWars de la década de los 70:', decada70s)
console.log('Películas de StarWars de la década de los 80:', decada80s)
console.log('Películas de StarWars de la década de los 90:', decada90s)
console.log('Películas de StarWars de la década de los 00:', decada00s)
console.log('Películas de StarWars de la década de los 10:', decada10s)
