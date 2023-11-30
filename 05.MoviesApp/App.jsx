import { useRef } from 'react'
import Movies from './Movies'

export default function App () {
  const inputRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()

    const value = inputRef.current.value
    console.log('value', value)

    const data = new window.FormData(e.target)
    const query = data.get('query')
    console.log(query)

    const fields = Object.fromEntries(new FormData(e.target))
    console.log(fields)
  }

  return (
    <div className='page'>
      <header>
        <h1>Movie Search App</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input name='query' ref={inputRef} type='search' placeholder='Star Wars, Avengers ...' />
          <input name='another' ref={inputRef} type='search' placeholder='Star Wars, Avengers ...' />
          <input name='test' ref={inputRef} type='search' placeholder='Star Wars, Avengers ...' />
          <input name='example' ref={inputRef} type='search' placeholder='Star Wars, Avengers ...' />
          <input name='checkbox' className='checkbox' type='checkbox' />
          <button type='submit' className='button'>Search movies</button>
        </form>
      </header>
      <section>
        <Movies />
      </section>
    </div>
  )
}
