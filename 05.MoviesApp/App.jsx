import { useEffect, useRef, useState } from 'react'
import Movies from './Movies'

export default function App () {
  const inputRef = useRef()
  // Validacion de forma controlada del formulario, utiliza un stado, es decir, Controlado por react, vs no controlador por react
  const [query, setQuery] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  const counter = useRef(0)

  let i = 0
  i++
  console.log(i, counter.current++)

  // Validacion de formularios se puede hacer a través de la funcion o mediante un efecto
  const handleChange = (e) => {
    const newQuery = e.target.value
    setQuery(newQuery)

    if (isFirstInput.current) {
      isFirstInput.current = query === ''
      return
    }

    if (newQuery === '') {
      setError('No se puede buscar una pelicula vacia')
      return
    }
    if (newQuery.match(/^\d+$/)) {
      setError('No se puede buscar una pelicula por numero')
      return
    }
    if (newQuery.length < 3) {
      setError('La busqueda debe tener al menos 3 caracteres')
      return
    }

    setError(null)
  }

  // Validacion mediante effecto
  // useEffect(() => {
  //   if (query === '') {
  //     setError('No se puede buscar una pelicula vacia')
  //     return
  //   }
  //   if (query.match(/^\D+$/)) {
  //     setError('No se puede buscar una pelicula por numero')
  //     return
  //   }
  //   if (query.length < 3) {
  //     setError('La busqueda debe tener al menos 3 caracteres')
  //     return
  //   }

  //   setError(null)
  // }, [query])

  const handleSubmit = (e) => {
    e.preventDefault()

    // Different ways to get data from a FORM

    // With useRef
    const value = inputRef.current.value
    console.log('value from using useRef ', value)

    // // With FormData and using the DOM
    // const data = new window.FormData(e.target)
    // const query = data.get('query')
    // console.log('Value with form Data Instance', query)

    // // When we have several fields we can do it though an object
    // const fields = Object.fromEntries(new FormData(e.target))
    // console.log('Object created with object Entries and form data', fields)
  }

  return (
    <div className='page'>
      <header>
        <h1>Movie Search App</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input
            name='query' onChange={handleChange} ref={inputRef} placeholder='Star Wars...'
          />
          {/* <input
            name='another' ref={inputRef} placeholder='Star Wars...'
          />
          <input
            name='test' ref={inputRef} placeholder='Star Wars ...'
          />
          <input
            name='example' ref={inputRef} placeholder='Star Wars ...'
          /> */}
          <input name='checkbox' className='checkbox' type='checkbox' />
          <button type='submit' className='button'>Search movies</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>
      <section>
        <Movies />
      </section>
    </div>
  )
}
