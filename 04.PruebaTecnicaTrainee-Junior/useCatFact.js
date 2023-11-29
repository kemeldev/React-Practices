import { useState, useEffect } from 'react'
import { fetchRandomFact } from './fact'

// eslint-disable-next-line space-before-function-paren
export function useCatFact() {
  const [fact, setFact] = useState()

  const refreshFact = async () => {
    const newFact = await fetchRandomFact()
    setFact(newFact)
  }

  useEffect(() => {
    refreshFact()
  }, [])

  return { fact, refreshFact }
}
// const refreshFact = () => {
//   fetchRandomFact().then(newFact => setFact(newFact))
// }
