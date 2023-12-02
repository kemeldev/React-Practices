import { useState, useRef, useEffect } from 'react'
import noResponseJSON from './mocks/noResponse.json'

function useSearch () {
  const [search, setSearch] = useState(null)
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  console.log('Search =', search)
  console.log('isFirstInput =', isFirstInput.current)

  // This functions returns the search value comming from input when the submit bottom is pressed

  // Every time the search value changes when submit button is clicked, this "form" is evaluated
  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = false
      console.log('isFirstInput inside useEffect =', isFirstInput.current)
      return
    }

    if (search === '') {
      setError('Cannot search for a movie with a blank space')
      return
    }
    if (search.match(/^\d+$/)) {
      setError('Cannot seach for a movie by just using numbers')
      return
    }
    if (search.length < 3) {
      setError('Must contain at least 3 characters')
      return
    }
    setError(null)
  }, [{ search }])

  return { search, setSearch, error }
}

// function useMovies ({ search }) {
//   console.log(search)
// }

export default function App () {
  const { search, setSearch, error } = useSearch()

  const [responseMovies, setResponseMovies] = useState([])

  const inputRef = useRef() // this is just used as an example than a value from input can be taken using useRef

  const fetchMovies = async () => {
    if (search === null) return []

    try {
      const API_KEY = '4287ad07'
      const URL = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}&page=1`
      const response = await fetch(URL)
      const data = await response.json()
      const moviesFetched = data.Search
      setResponseMovies(moviesFetched)
    } catch (error) {
      throw new Error('Error searching movies')
    }
  }

  const handleChange = (e) => {
    const newSearch = e.target.value
    setSearch(newSearch)
    fetchMovies()

    console.log('Onchange function, search Value', newSearch)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    fetchMovies()

    const data = new FormData(e.target)
    data.get('query')
    // console.log('From Form Data ', data.get('query'))

    const value = inputRef.current.value
    // console.log('Search Value when submit button click =', value)

    return setSearch(value)
  }

  return (
  <div className="page">
    <header>
      <h1>Search movies App</h1>
      <form onSubmit={handleSubmit}>
        <input name='query'
              ref={inputRef}
              onChange={handleChange}
              placeholder="Avatar, Fast & Furious ..." />
        <input name='checkbox' type="checkbox" />
        <button type="submit" >SEARCH</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </header>

    <main>
      <ul>

        {responseMovies?.length > 1
        // Pending Create a component of movies
          ? responseMovies.map((result) => (
            <li className='movie'
                key={result.imdbID}>
                <h3>{result.Title}</h3>
                <p>{result.Year}</p>
                <img src={result.Poster} alt={result.Title}/>
            </li>
          ))
          : noResponseJSON.Error
        }
      </ul>
    </main>
  </div>
  )
}
