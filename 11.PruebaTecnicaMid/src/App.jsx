import { useEffect, useMemo, useRef, useState } from 'react'
import './App.css'
// eslint-disable-next-line no-unused-vars
import UsersFilter from './component/UserFilter'

const URL = 'https://randomuser.me/api/?results=100'

function App () {
  const [users, setUsers] = useState([])
  const [showColor, setColor] = useState(false)
  const [sortCountry, serSortCountry] = useState(false)
  const originalUsers = useRef(users)
  const [inputCountry, setInputCountry] = useState(null)

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(URL)
      const data = await response.json()
      const { results } = data
      setUsers(results)
      originalUsers.current = results
    }

    fetchUsers()
  }, [])

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
    console.log('filtering')
    return inputCountry !== null && inputCountry.length > 0
      ? users.filter((user) => user.location.country.toLowerCase().includes(inputCountry.toLowerCase()))
      : users
  }, [inputCountry, users])

  const sortedUsers = useMemo(() => {
    console.log('sorting')
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

      <UsersFilter
        users={sortedUsers}
        showColor={showColor}
        deleteRow={handleDelete}
      />

    </>
  )
}

export default App
