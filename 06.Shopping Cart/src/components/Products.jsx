import { AddToCartIcon } from './Icons'
import PropTypes from 'prop-types'
import './Products.css'
import { useCart } from '../hooks/useCart'

export default function Products ({ products }) {
  const { addToCart, cart } = useCart()
  return (
    <main className='products'>
      <ul>

        {products.slice(0, 15).map(product => (
          <li key={product.id}>
            <img
              src={product.thumbnail}
              alt={product.title}
            />
            <div>
              <strong>{product.title}</strong> - ${product.price}
            </div>
            <div>
              <button onClick={() => addToCart(product)}>
                <AddToCartIcon />
              </button>
            </div>
          </li>

        ))}
      </ul>

    </main>
  )
}

Products.propTypes = {
  products: PropTypes.array
}
