import { useState } from 'react'
import responseJSON from './mocks/response.json'
import noResponseJSON from './mocks/noResponse.json'

export default function App () {
  const [search, setSearch] = useState('Avengers')
  const API_KEY = '4287ad07'
  const URL = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}&page=1`
  const mockResults = responseJSON.Search

  return (
  <div className="page">
    <header>
      <h1>Search movies App</h1>
      <form >
        <input name='search' type="text" placeholder="Avatar, Fast & Furious ..." />
        <input name='checkbox' type="checkbox" />
        <button type="submit" >SEARCH</button>
      </form>
    </header>

    <main>
      <ul>
        {mockResults.length > 1

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
