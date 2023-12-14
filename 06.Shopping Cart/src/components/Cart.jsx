import { CartIcon, ClearCartIcon } from './Icons'
import { useId } from 'react'
import './cart.css'

export function Cart () {
  const cartCheckboxId = useId()

  return (
    <>
      <label className='cart-button' htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type='checkbox' hidden />

      <aside className='cart'>
        <ul>
          <li>
            <img src='https://i.dummyjson.com/data/products/6/thumbnail.png' alt='Laptop' />
            <div>
              <strong>Laptop</strong> - $1749
            </div>

            <footer>
              <small>
                Qty :1
              </small>
              <button>
                +
              </button>
            </footer>
          </li>

        </ul>

        <button>
          <ClearCartIcon />
        </button>
      </aside>
    </>

  )
}
