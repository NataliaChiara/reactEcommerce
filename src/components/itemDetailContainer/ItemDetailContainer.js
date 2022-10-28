import '../ItemList/ItemList.css'
import '../ItemListContainer/ItemListContainer.css'
import { useState, useEffect } from "react"
// import { getProductById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../service/firebase'

const ItemDetailContainer = ({ setCart }) => {

    const [product, setProduct] = useState()
    const [loading, setLoading] = useState (true)

    const { productId } = useParams()

    useEffect(() => {

        const docRef = doc(db, 'products', productId)

        getDoc(docRef).then(doc => {
            const data = doc.data()

            const productAdapted = { id: doc.id, ...data}
            setProduct(productAdapted)

        }).catch(error => {
            alert(error)
        }).finally(() => {
            setLoading(false)
        })

        // getProductById(productId).then(response => {
        //     setProduct(response)
        // }).finally(() => {
        //     setLoading(false)
        // })
    }, [productId])

    if(loading) {
        return( <h1 className='loading'>LOADING...</h1> )
    }

    return(
        <div className="ItemList">
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer