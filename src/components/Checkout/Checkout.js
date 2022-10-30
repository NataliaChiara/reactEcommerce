import ContactForm from '../ContactForm/ContactForm'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../service/firebase'


const Checkout = () => {

    const { cart, totalPrice } = useContext(CartContext)


    const createOrder = () => {
        const order = {
            buyer: {
                name: 'natalia chiara',
                phone: '1150475451',
                email: 'natalia.chiara@98gmail.com'
            },
            items: cart,
            total: totalPrice
        }
        console.log(order)

        const collectionRef = collection(db, 'orders')

        addDoc(collectionRef, order)
    }

    return (
        <>
            <h1>Checkout</h1>
            <button onClick={createOrder}>Agregar documento</button>

        </>
    )
}

export default Checkout