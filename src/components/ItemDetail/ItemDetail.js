import '../Item/Item.css'
// import Counter from './Counter/Counter'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import CartWidget from '../NavBar/CartWidget/CartWidget'
import { CartContext } from '../../context/CartContext'

const Count = ({ onConfirm, stock, initial = 1 }) => {
    const [count, setCount] = useState(initial)

    const increment = () => {
        if (count < stock) {
            setCount(count + 1)
        }

    }

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1)
        } else {

        }
    }

    return (
        <div>
            <p>{count}</p>
            <button onClick={decrement}>-</button>
            <button onClick={() => onConfirm(count)}>Agregar al carrito</button>
            <button onClick={increment}>+</button>
        </div>
    )
}

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {

    const [quantityToAdd, setQuantityToAdd] = useState(0)

    const { addItem } = useContext(CartContext)


    const handleOnAdd = (quantity) => {
        setQuantityToAdd(quantity)

        const productToAdd = {
            id, name, price, quantity
        }

        addItem(productToAdd)

    }



    return (


            <div className="product">
                <div className="frame">
                    <img src={img}></img>
                </div>
                <div className="description">
                    <h1>{name}</h1>
                    <h2>category: {category}</h2>
                    <h3 className='link'>{price}</h3>
                    {
                        quantityToAdd === 0 ? (
                            <Count onConfirm={handleOnAdd} stock={stock} />
                        ) : (
                            <Link to='/cart'>Finalizar compra</Link>
                        )
                    }
                </div>


            </div>

    )
}


// const ItemDetail = ({id, img, name, category, price, stock}) => {

//     return (
//         <div>
//             <div className="product">
//                 <div className="frame">
//                     <img src={img}></img>
//                 </div>
//                 <div className="description">
//                     <h1>{name}</h1>
//                     <h2>category: {category}</h2>
//                     <h3 className='link'>{price}</h3>
//                     <Counter className='counter' stock={stock} />
//                 </div>
//             </div>
//         </div>
//     )
// }

export default ItemDetail