import { useCart } from '../hooks/useCart'
import { useFilters } from '../hooks/useFilters'
import './Footer.css'

// export default function Footer ({ filters }) { eliminamos el prop Drilling
export default function Footer () {
  const { filters } = useFilters()
  const { cart } = useCart()

  return (
    <footer className='footer'>
      {
        JSON.stringify(filters, null, 2)
      }
      {
        JSON.stringify(cart, null, 2)
      }
      <h4>Prueba técnica de react </h4>
      <span>@kemeldev</span>
      <h5>Shopping cart with useContext and UseReducer</h5>
    </footer>
  )
}
