import { useState, useEffect } from 'react'
import './app.css'

export default function App () {
  const URL_CAT_FACT = 'https://catfact.ninja/fact'
  const URL_IMAGE = 'https://cataas.com/cat/says/hello?fontSize=70'

  const [fact, setFact] = useState(null)
  const [firstThreeWords, setFirstThreeWords] = useState(null)
  const [image, setImage] = useState(URL_IMAGE)

  useEffect(() => {
    const fetchRandomFact = async () => {
      const response = await fetch(URL_CAT_FACT)
      const data = await response.json()
      const { fact } = data
      setFact(fact)
      const words = await fact.split(' ', 3).join(' ')
      setFirstThreeWords(words)
    }
    fetchRandomFact()
  }, [])

  useEffect(() => {
    if (fact) {
      const imageWithWordsFromFact = `https://cataas.com/cat/says/${firstThreeWords}?fontSize=50`
      setImage(imageWithWordsFromFact)
    }
  }, [fact, firstThreeWords])

  return (
    <>
      <h1>Cat's app</h1>
      <button>Get random fact</button>
      {fact && <p>{fact}</p>}
      <img
        src={image}
        alt='Image of a cat with a tag saying...'
        width={300}
      />
    </>
  )
}
