import cart from './Assets/iconoCarrito.png'
import './CartWidget.css'

const CartWidget = () => {
    return (
        <div className='cartContainer'>
            <img className='cart' src={cart} alt='cart'/>
            0
        </div>
    )
}

export default CartWidget