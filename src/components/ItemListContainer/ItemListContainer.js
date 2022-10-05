import { useState, useEffect } from 'react'
import { getProducts } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {

    const [products, setProducts] = useState({})
    const [loading, setLoading] = useState (true)

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)
        getProducts(categoryId).then(products => {
            setProducts(products)
        }).finally(() => (
            setLoading(false)
        ))
    }, [categoryId])

    // console.log(products)

    if(loading) {
        return( <h1>loading...</h1> )
    }

    return (
        <div>
            <h1>Todos nuestros productos</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer