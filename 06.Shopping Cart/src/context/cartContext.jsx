import { createContext, useState } from 'react'

// create the context

export const CartContext = createContext()

// create the provider

export function CartProvider ({ children }) {
  const [cart, setCart] = useState([])
  const addToCart = producto => {
    const productoInCartIndex = cart.findIndex(item => item.id === producto.id)

    if (productoInCartIndex >= 0) {
      const newCart = structuredClone(cart)
      newCart[productoInCartIndex].quantity += 1
      return setCart(newCart)
    }

    // si el producto no esta en el carrito
    setCart(prevState => ([
      ...prevState,
      {
        ...producto,
        quantity: 1
      }
    ]))
  }
  const clearCart = () => {
    setCart([])
  }

  return (
    <CartContext.Provider value={
      {
        cart,
        addToCart,
        clearCart
      }
}
    >
      {children}
    </CartContext.Provider>
  )
}
