import { createContext, useState } from 'react'

// Esta linea crea el contexto que vamos a consumir luego
export const FiltersContext = createContext()

// Aca es para envolver el contexto
// eslint-disable-next-line
export function FiltersProvider({ children }) {

  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  }
  )
  return (

    <FiltersContext.Provider value={{
      filters,
      setFilters
    }}
    >
      {children}
    </FiltersContext.Provider>

  )
}

// export function FiltersProvider({ children }) {

//   return (

//     <FiltersContext.Provider value={{
//       category: 'all',
//       minPrice: 0
//     }}
//     >
//       {children}
//     </FiltersContext.Provider>

//   )
// }
