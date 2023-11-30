import responseMovies from './mocks/with-results.json'
import noResponse from './mocks/no-results.json'

const moviesFromMock = responseMovies.Search
const noMovies = noResponse.Error
const mappedMovies = moviesFromMock?.map(movie => ({
  id: movie.imdbID,
  title: movie.Title,
  year: movie.Year,
  poster: movie.Poster
}))

const API_KEY = '4287ad07'
const DefaultSearch = 'Avengers'
const URL = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${DefaultSearch}&page=1`

function ListOfMovies () {
  return (
    <ul className='movies'>
      {
        mappedMovies.map((movie) => (

          <li className='movie' key={movie.id}>
            <h3>{movie.title}</h3>
            <h3>{movie.year}</h3>
            <img src={movie.poster} alt={movie.Title} />
          </li>

        ))
      }

    </ul>

  )
}

function NoMovieResults () {
  return (
    <p>{noMovies}</p>
  )
}

export default function Movies () {
  const hasMovies = mappedMovies?.length > 0

  return (
    hasMovies
      ? <ListOfMovies />
      : <NoMovieResults />
  )
}
