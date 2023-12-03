import { AddToCartIcon } from './Icons'
import PropTypes from 'prop-types'
import './Products.css'

export default function Products ({ products }) {
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
              <button>
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
