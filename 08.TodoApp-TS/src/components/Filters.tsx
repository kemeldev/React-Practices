import { FILTERS_BUTTONS } from "../const"
import { type FilterValue } from "../types"

interface Props {
  // asi tambien se podria hacer, con estas opciones, 
  // filterSelected: 'all' | 'active' | 'completed'
  // filterSelected: typeof TODO_FILTERS[keyof typeof TODO_FILTERS]
  filterSelected: FilterValue

  onFilterChange: (filter: FilterValue) => void

}

export const Filters: React.FC<Props> = ({ filterSelected, onFilterChange }) => {
  return (

    <ul className="filters">
      {
        Object.entries(FILTERS_BUTTONS).map(([key, { href, literal }]) => {
          const isSelected = key === filterSelected
          const className = isSelected ? 'selected' : ''

          return (
            <li key={key}>
              <a href={href}
                className={className}
                onClick={(event) => {
                  event.preventDefault()
                  onFilterChange(key as FilterValue)
                }}
              >
                {literal}
              </a>

            </li>
          )
        })
      }
    </ul>


    // Esta es una forma de hacerlo

    // <ul className="filters">
    //   <li>
    //     <a
    //       className={`${filterSelected === 'all' ? 'selected' : ''}`}
    //       onClick={() => {
    //         onFilterChange('all')
    //       }}
    //     >
    //       Todos
    //     </a>
    //   </li>
    //   <li>
    //     <a
    //       className={`${filterSelected === 'all' ? 'selected' : ''}`}
    //       onClick={() => {
    //         onFilterChange('active')
    //       }}
    //     >
    //       Activos
    //     </a>
    //   </li>

    //   <li>
    //     <a
    //       className={`${filterSelected === 'active' ? 'selected' : ''}`}
    //       onClick={() => {
    //         onFilterChange('active')
    //       }}
    //     >
    //       Activos
    //     </a>
    //   </li>
    //   <li>
    //     <a
    //       className={`${filterSelected === 'completed' ? 'selected' : ''}`}
    //       onClick={() => {
    //         onFilterChange('active')
    //       }}
    //     >
    //       Completados
    //     </a>
    //   </li>
    // </ul>
  )
}