import { useId } from 'react'
import './Filters.css'
import { useFilters } from '../hooks/useFilters'

// export function Filters ({ changeFilters }) eliminamos el prop drilling {
export function Filters () {
  // traemos el setfilters del useFilters para tener un estado global y lo utilizamos en las funciones de handleChange...
  const { filters, setFilters } = useFilters() // estado global

  // const [minPrice, setMinPrice] = useState(0) // estado local, lo eliminamos para evitar tener 2 fuentes de la verdad
  const minPriceFilteredID = useId()
  const categoryFilterID = useId()

  // This is not the best practice, cause we are updating the state of a parent from a child
  const handleChangeMinPrice = (e) => {
    setFilters(prevState => ({
      ...prevState,
      minPrice: e.target.value
    })

    )
  }

  // This is not the best practice, cause we are updating the state of a parent from a child
  const handleChangeCategory = (e) => {
    setFilters(previousFilters => ({
      ...previousFilters,
      category: e.target.value
    }))
  }

  return (
    <section className='filters'>
      <div>
        <label htmlFor={minPriceFilteredID}>Price</label>
        <input
          type='range'
          id={minPriceFilteredID}
          min='0'
          max='1000'
          onChange={handleChangeMinPrice}
          value={filters.minPrice}
        />
        <span>$ {filters.minPrice}</span>
      </div>

      <div>
        <label htmlFor={categoryFilterID}>Category</label>
        <select id={categoryFilterID} onChange={handleChangeCategory}>
          <option value='all'>All</option>
          <option value='smartphones'>Smartphones</option>
          <option value='laptops'>Laptops</option>
        </select>
      </div>

    </section>
  )
}
