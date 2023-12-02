import { useState, useRef, useEffect } from 'react'
import responseJSON from './mocks/response.json'
import noResponseJSON from './mocks/noResponse.json'

const mockResults = responseJSON.Search

export default function App () {
  const API_KEY = '4287ad07'
  const temporalSearch = 'Avengers'
  const URL = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${temporalSearch}&page=1`

  const [search, setSearch] = useState(null)
  const [error, setError] = useState(null)
  const inputRef = useRef()
  const isFirstInput = useRef(true)

  console.log('Search =', search)
  console.log('isFirstInput =', isFirstInput.current)

  // This functions returns the search value comming from input when the submit bottom is pressed
  const handleSubmit = async (e) => {
    e.preventDefault()

    const data = new FormData(e.target)
    data.get('query')
    // console.log('From Form Data ', data.get('query'))

    const value = inputRef.current.value
    console.log('Search Value when submit button click =', value)

    return setSearch(value)
  }

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

  const handleChange = (e) => {
    const newSearch = e.target.value
    setSearch(newSearch)
    console.log('Onchange function, search Value', newSearch)
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
        {mockResults.length > 1
        // Pending Create a component of movies
          ? mockResults.map((result) => (
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
