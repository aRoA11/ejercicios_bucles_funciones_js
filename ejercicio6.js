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
const categorizedDecade = {}

for (const movie of starWarsMovies) {
  let decade
  if (movie.releaseYear < 1980) {
    decade = 1970
  } else if (movie.releaseYear < 1990) {
    decade = 1980
  } else if (movie.releaseYear < 2000) {
    decade = 1990
  } else if (movie.releaseYear < 2010) {
    decade = 2000
  } else {
    decade = 2010
  }
  if (!categorizedDecade[decade]) {
    categorizedDecade[decade] = []
  }
  categorizedDecade[decade].push(movie)
}
console.log(categorizedDecade)
