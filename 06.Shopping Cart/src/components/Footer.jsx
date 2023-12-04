import './Footer.css'

export default function Footer ({ filters }) {
  return (
    <footer className='footer'>
      {
        JSON.stringify(filters, null, 2)
      }
      <h4>Prueba técnica de react </h4>
      <span>@kemeldev</span>
      <h5>Shopping cart with useContext and UseReducer</h5>
    </footer>
  )
}
