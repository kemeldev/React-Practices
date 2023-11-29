import { useCatFact } from './useCatFact'
import { useCatImage } from './useCatImages'
import './app.css'

export default function App () {
  const { fact, refreshFact } = useCatFact()
  const { image } = useCatImage({ fact })

  const handleClick = async () => {
    refreshFact()
  }

  return (
    <>
      <h1>Cat's app</h1>
      <button onClick={handleClick}>Get random fact</button>
      {fact && <p>{fact}</p>}
      <img
        src={image}
        alt='Image of a cat with a tag saying...'
        width={300}
      />
    </>
  )
}
