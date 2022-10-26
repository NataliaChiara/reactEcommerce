import '../ItemList/ItemList.css'
import '../ItemListContainer/ItemListContainer.css'
import { useState, useEffect } from "react"
import { getProductById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = ({ addItem }) => {

    const [product, setProduct] = useState()
    const [loading, setLoading] = useState (true)

    const { productId } = useParams()

    useEffect(() => {
        getProductById(productId).then(response => {
            setProduct(response)
        }).finally(() => {
            setLoading(false)
        })
    }, [productId])

    if(loading) {
        return( <h1 className='loading'>LOADING...</h1> )
    }

    return(
        <div className="ItemList">
            <ItemDetail {...product} addItem={addItem}/>
        </div>
    )
}

export default ItemDetailContainer