import './CartWidget.css'
import { Link } from 'react-router-dom'
import cart from './Assets/iconoCarrito.png'


const CartWidget = () => {
    return (
        <Link to='/cart' className='cartContainer'>
            <img src={cart} alt='cart' className='cart' />
            0
        </Link>
    )
}

export default CartWidget