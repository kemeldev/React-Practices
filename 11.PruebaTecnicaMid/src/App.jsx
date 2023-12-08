import { useEffect, useMemo, useRef, useState } from 'react'
import './App.css'
// eslint-disable-next-line no-unused-vars
import UsersFilter from './component/UserFilter'

function App () {
  const [users, setUsers] = useState([])
  const [showColor, setColor] = useState(false)
  const [sortCountry, serSortCountry] = useState(false)
  const originalUsers = useRef(users)
  const [inputCountry, setInputCountry] = useState(null)

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  // pagination
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    const URL = `https://randomuser.me/api/?results=5&page=${currentPage}`
    const fetchUsers = async () => {
      try {
        setLoading(true)

        const response = await fetch(URL)

        console.log(response.ok, response.status, response.statusText)

        if (!response.ok) throw new Error('Error in the request')

        const data = await response.json()
        const { results } = data

        setUsers((prevState) => {
          if (prevState === []) {
            return results
          } else {
            const newUsers = [...prevState, ...results]
            originalUsers.current = newUsers
            return newUsers
          }
        })

        setError(false)
      } catch (error) {
        console.error('Error fetching users:', error)
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    fetchUsers()
  }, [currentPage])

  const toggleColors = () => {
    setColor(prevState => !prevState)
  }

  const toggleSortByCountry = () => {
    serSortCountry(prevState => !prevState)
  }

  const handleDelete = (email) => {
    const filterUsers = users.filter((user, index) => user.email !== email)
    setUsers(filterUsers)
  }

  const resetState = () => {
    setUsers(originalUsers.current)
  }

  const filteredUsers = useMemo(() => {
    return inputCountry !== null && inputCountry.length > 0
      ? users.filter((user) => user.location.country.toLowerCase().includes(inputCountry.toLowerCase()))
      : users
  }, [inputCountry, users])

  const sortedUsers = useMemo(() => {
    return sortCountry
      ? [...filteredUsers].sort((a, b) => {
          return a.location.country.localeCompare(b.location.country)
        })
      : filteredUsers
  }, [sortCountry, filteredUsers])

  return (
    <>
      <h1>Prueba Técnica</h1>

      <header>
        <button onClick={toggleColors}>{showColor ? 'Uncolor Rows' : 'Color Rows'}</button>
        <button onClick={toggleSortByCountry}>{sortCountry ? 'Not sort by country' : 'Sort by Country'}</button>
        <button onClick={resetState} >Reset original state</button>
        <input onChange={(e) => setInputCountry(e.target.value)} type="text" placeholder='Filter by country' />
      </header>
      <div className='table_container'>

      {users.length > 0 &&
          <UsersFilter
            users={sortedUsers}
            showColor={showColor}
            deleteRow={handleDelete}
          />
     }

      {loading && <p>Loading...</p>}
      {!loading && error && <p>There is an error...</p>}
      {!loading && !error && users.length === 0 && <p>There is no users available</p>}

      </div>

      {!loading && !error && <button onClick={() => setCurrentPage(currentPage + 1)}>Load more results</button>}

    </>
  )
}

export default App
