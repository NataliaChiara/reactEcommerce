import '../Item/Item.css'
import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'
import Checkout from '../Checkout/Checkout'
import { Link } from "react-router-dom"



const CartView = () => {

    const { cart, removeItem, totalQuantity, totalPrice } = useContext(CartContext);


    return (
        <div className='containerCart'>
            <div className='cartViewMain'>
                {cart.map(item => (
                    <div key={item.id} className="product">
                        <div className="frame">
                            <img src={item.img}></img>
                        </div>
                        <div className="description">
                            <h1>{item.name}</h1>
                            <h2>category: {item.category}</h2>
                            <h3 className='link'>{item.price}</h3>
                            <h3>{item.quantity}</h3>
                            <button onClick={() => removeItem(item.id)}>Eliminar</button>
                        </div>



                    </div>
                ))}

            </div>
            <h1>cantidad: {totalQuantity}</h1>
            <h1>precio: {totalPrice}</h1>
            <Link to={`/checkout`} className="link">Checkout</Link>
        </div>
    )
}

export default CartView