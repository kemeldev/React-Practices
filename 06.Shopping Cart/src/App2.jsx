import './App.css'
import { products as InitialProducts } from './mocks/products.json'
import Products from './components/Products'
import { useContext, useState } from 'react'
import { Header } from './components/Header'
import Footer from './components/Footer'
import { FiltersContext } from './context/filterts'
import { DEVELOPMENT } from './config'

function useFilters () {
  // We no longer need the filters here, cause we gonna pass it through the context
  // const [filters, setFilters] = useState({
  //   category: 'all',
  //   minPrice: 0
  // }
  // )

  const { filters, setFilters } = useContext(FiltersContext)

  const filterProducts = (products) => {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice &&
        (
          filters.category === 'all' ||
          product.category === filters.category
        )
      )
    })
  }

  return { filterProducts, setFilters, filters }
}

function App () {
  const [products] = useState(InitialProducts)
  const { filterProducts, setFilters, filters } = useFilters({ products })

  return (
    <>
      <Header changeFilters={setFilters} />
      <Products products={filterProducts(products)} />
      {DEVELOPMENT && <Footer filters={filters} />}

    </>
  )
}

export default App

// module.exports = {
//   root: true,
//   env: { browser: true, es2020: true },
//   extends: [
//     'eslint:recommended',
//     'plugin:react/recommended',
//     'plugin:react/jsx-runtime',
//     'plugin:react-hooks/recommended',
//   ],
//   ignorePatterns: ['dist', '.eslintrc.cjs'],
//   parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
//   settings: { react: { version: '18.2' } },
//   plugins: ['react-refresh'],
//   rules: {
//     'react-refresh/only-export-components': [
//       'warn',
//       { allowConstantExport: true },
//     ],
//   },
// }
