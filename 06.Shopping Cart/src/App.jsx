import './App.css'
import { products as InitialProducts } from './mocks/products.json'
import Products from './components/Products'
import { useState } from 'react'
import { Header } from './components/Header'
import Footer from './components/Footer'
import { DEVELOPMENT } from './config'
import { useFilters } from './hooks/useFilters'

function App () {
  const [products] = useState(InitialProducts)
  const { filterProducts, setFilters, filters } = useFilters()

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
