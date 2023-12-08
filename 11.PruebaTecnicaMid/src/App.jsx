import { useEffect, useState } from 'react'
import './App.css'
import UsersFilter from './component/UserFilter'

const URL = 'https://randomuser.me/api/?results=100'

function App () {
  const [users, setUsers] = useState([])
  const [showColor, setColor] = useState(false)

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(URL)
      const data = await response.json()
      const { results } = data
      setUsers(results)
    }

    fetchUsers()
  }, [])

  const toggleColors = () => {
    setColor(prevState => !prevState)
  }

  return (
    <>
      <h1>Prueba Técnica</h1>

      <header>
        <button onClick={toggleColors}>{showColor ? 'Uncolor Rows' : 'Color Rows'}</button>
        <button>Sort by Country</button>
        <button>Reset original state</button>
        <input type="text" placeholder='Filter by country' />
      </header>

      <UsersFilter
        users={users}
        showColor={showColor}
      />

    </>
  )
}

export default App
