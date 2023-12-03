import './App.css'
import { products } from './mocks/products.json'
import Products from './components/Products'
import { useState } from 'react'
import { Header } from './components/Header'

function App () {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  }
  )

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

  return (
    <>
      <Header changeFilters={setFilters} />
      <Products products={filterProducts(products)} />
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
