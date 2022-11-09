import { useState, useEffect, createContext } from "react"

export const CartContext = createContext()

export const CartContextProvider = ({ children }) => {

  const [cart, setCart] = useState([])
  const [totalQuantity, setTotalQuantity] = useState(0)
  const [totalPrice, settotalPrice] = useState(0)
  // console.log(cart)

  const addItem = (productToAdd) => {
    
    if (!isInCart(productToAdd.id)) {
      setCart([...cart, productToAdd])
    } else {
      alert('ya esta agregado')
    }
  }

  const isInCart = (id) => {
    return cart.some(prod => prod.id === id)
  }

  const removeItem = (id) => {
    const cartWithoutItem = cart.filter(prod => prod.id !== id)
    setCart(cartWithoutItem)
  }

  useEffect(() => {
    const totalQuantity = getTotalQuantity()
    setTotalQuantity(totalQuantity)
    const totalPrice = getTotalPrice()
    settotalPrice(totalPrice)
  })

  const getTotalQuantity = () => {
    let totalQuantity = 0

    cart.forEach(prod => {
      totalQuantity += prod.quantity
    })

    return totalQuantity

  }

  const getTotalPrice = () => {
    let totalPrice = 0

    cart.forEach(prod => {
      totalPrice = (prod.price*totalQuantity)
    })

    return totalPrice

  }

  return (

    <CartContext.Provider value={{ cart, totalQuantity, totalPrice, isInCart, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  )
}

