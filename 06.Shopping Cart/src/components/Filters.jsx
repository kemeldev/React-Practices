import { useState, useId } from 'react'
import './Filters.css'

export function Filters ({ changeFilters }) {
  const [minPrice, setMinPrice] = useState(0)
  const minPriceFilteredID = useId()
  const categoryFilterID = useId()

  // This is not the best practice, cause we are updating the state of a parent from a child
  const handleChangeMinPrice = (e) => {
    setMinPrice(e.target.value)
    changeFilters(prevState => ({
      ...prevState,
      minPrice: e.target.value
    })

    )
  }

  // This is not the best practice, cause we are updating the state of a parent from a child
  const handleChangeCategory = (e) => {
    changeFilters(previousFilters => ({
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
        />
        <span>$ {minPrice}</span>
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
