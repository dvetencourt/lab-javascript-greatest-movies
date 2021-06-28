// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(array) {
  return array.map((eachMovie) => {
    return eachMovie.director;
  });
  
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const stevenMovies = moviesArray.filter((movies) => {
    return movies.director === "Steven Spielberg" && movies.genre.includes("Drama");
  }) 
  return stevenMovies.length;
}
// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (!movies.length) {
    return 0;
  }
  const sum = movies.reduce((accumulator, currentValue) => {
    if (currentValue.score) {
      return accumulator + currentValue.score; 
    }else{
      return accumulator;
    }
  }, 0);
  const avg = sum / movies.length;
  return Number(avg.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArr) {
  if (moviesArr.length === 0) {
    return 0;
  }

  const dramaMovies = moviesArr.filter((movie) => {
    return movie.score !== undefined;
  }).filter((movie) => {
    return movie.genre.includes("Drama");
  });

  if (dramaMovies.length === 0) {
    return 0;
  }

  const averageDrama = dramaMovies.reduce((acc, movie) => {
    return acc + movie.score;
  }, 0)
  return Math.round(100 * (averageDrama / dramaMovies.length)) / 100
}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
//const orderByYear = orderPerYear => {
  //const movieYear = orderPerYear.map(movies => movies);
 // const orderYaer = movieYear.sort((x, y) => {
 //   if (x.year !== y.year) {
 //     return x.year - y.year;
  //  } else x.title !== y.title
 // });

 // return orderYaer;
//}
function orderByYear(movieYear) {
  const orderedMovies = movieYear.map((movie) => {
    return movie
  })
  orderedMovies.sort(function(a, b) {
    if (a.year > b.year) {
      return 1;
    } else if (a.year < b.year) {
      return -1;
    } else {
      if (a.title < b.title) {
        return -1;
      } else {
        return 0;
      }
    }
  });
  return orderedMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically() {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
