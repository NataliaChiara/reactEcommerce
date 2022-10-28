import './CartWidget.css'
import { Link } from 'react-router-dom'
import cart from './Assets/iconoCarrito.png'
import { useContext } from 'react'
import { CartContext } from '../../../context/CartContext'

const CartWidget = () => {

    const { totalQuantity } = useContext(CartContext)

    return (
        <Link to='/cart' className='cartContainer'>
            <img src={cart} alt='cart' className='cart' />
            {totalQuantity}
        </Link>
    )
}

export default CartWidget