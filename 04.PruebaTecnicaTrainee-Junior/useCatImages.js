import { useState, useEffect } from 'react'

const URL_IMAGE = 'https://cataas.com/cat/says/hello?fontSize=70'

// eslint-disable-next-line space-before-function-paren
export function useCatImage({ fact }) {
  const [image, setImage] = useState(null)
  const [firstThreeWords, setFirstThreeWords] = useState()

  useEffect(() => {
    if (fact) {
      setFirstThreeWords(fact.split(' ', 3).join(' '))
      const imageWithWordsFromFact = `https://cataas.com/cat/says/${firstThreeWords}?fontSize=50`
      setImage(imageWithWordsFromFact)
    }
  }, [fact, firstThreeWords])

  return { image }
}
