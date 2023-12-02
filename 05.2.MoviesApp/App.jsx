import { useState, useRef, useEffect, useMemo, useCallback } from 'react'
import noResponseJSON from './mocks/noResponse.json'
import debounce from 'just-debounce-it'

function useSearch () {
  const [search, setSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  // console.log('Search =', search)
  // console.log('isFirstInput =', isFirstInput.current)

  // This functions returns the search value comming from input when the submit bottom is pressed

  // Every time the search value changes when submit button is clicked, this "form" is evaluated
  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      // console.log('isFirstInput inside useEffect =', isFirstInput.current)
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

function useMovies ({ search, sort }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const previousSearch = useRef()
  // console.log('useState 1', search)
  // console.log('useRef 1 ', previousSearch.current)

  const fetchMovies = async () => {
    if (search === '') return []

    try {
      const API_KEY = '4287ad07'
      const URL = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}&page=1`
      const response = await fetch(URL)
      const data = await response.json()
      const moviesFetched = data.Search
      return moviesFetched
    } catch (error) {
      throw new Error('Error searching movies')
    }
  }

  const getMovies = async () => {
    if (search === previousSearch.current) return
    try {
      setLoading(true)
      previousSearch.current = search

      const newMovies = await fetchMovies()
      setMovies(newMovies)
    } catch (error) {
      throw new Error('Error during fetching')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getMovies()
  }, [search])

  const sortedMovies = useMemo(() => {
    console.log('memoSortedmovies')
    return sort
      ? [...movies].sort((a, b) => a.Title.localeCompare(b.Title))
      : movies
  }, [sort, movies])

  console.log('render', sortedMovies)

  return { movies: sortedMovies, getMovies, loading }
}

export default function App () {
  const [sort, setSort] = useState(false)

  const { search, setSearch, error } = useSearch()
  const { movies, getMovies, loading } = useMovies({ search, sort })

  const inputRef = useRef() // this is just used as an example than a value from input can be taken using useRef

  const debouncedGetMovies = useCallback(
    debounce((e) => {
      const newSearch = e.target.value
      setSearch(newSearch)
      console.log('debounce')
      getMovies()
    }, 2500)
  )

  const handleChange = (e) => {
    debouncedGetMovies(e)

    // console.log('Onchange function, search Value', newSearch)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const value = inputRef.current.value
    setSearch(value)
    getMovies()

    const data = new FormData(e.target)
    data.get('query')
    // console.log('From Form Data ', data.get('query'))

    // console.log('Search Value when submit button click =', value)
  }

  const handleSort = () => {
    setSort(!sort)
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
        <input name='checkbox' onChange={handleSort} type="checkbox" checked={sort}/>
        <button type="submit" >SEARCH</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </header>

    <main>
      <ul>
      {loading
        ? <p>Loading data.......</p>
        : movies?.length > 1
        // Pending Create a component of movies
          ? movies.map((result) => (
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
