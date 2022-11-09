import ContactForm from '../ContactForm/ContactForm'
import { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import saveOrder from '../../service/firebase/firestore'

export const Checkout = () => {

    const {cart,totalCart,clearCart} = useContext(CartContext);
    const [isLoading, setIsLoading] = useState(false);
    const createOrder = async (buyer) => {
      const orderObj = {
        buyer,
        items: cart,
        total: totalCart
        }
        setIsLoading(true)
        const resp = await saveOrder(cart,orderObj,clearCart)
        if(resp === true){
          alert('La compra fue realizada con exito');
          setIsLoading(false)
        }else{
            alert('La compra no fue realizada con exito');
        }
    }

    return(
      <div>
        {
          isLoading 
          ? <h1>...Cargando</h1> 
          : <ContactForm createOrder={createOrder}/>
        }
      </div>
    )
}



// const Checkout = (nombre, phone) => {

//     const { cart, totalPrice } = useContext(CartContext)


//     const createOrder = () => {
//         const order = {
//             buyer: {
//                 name: nombre,
//                 phone: '123456',
//                 email: 'emailfalso@gmail.com'
//             },
//             items: cart,
//             total: totalPrice
//         }
//         console.log(order)

//         const collectionRef = collection(db, 'orders')

//         addDoc(collectionRef, order)
//     }

//     return (
//         <>
//             <h1>Checkout</h1>
//             {/* <ContactForm /> */}
//             <button onClick={/*createOrder*/ console.log(nombre)}>Agregar documento</button>

//         </>
//     )
// }

export default Checkout