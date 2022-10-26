import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import { getProducts, getProductsByCategory } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    // useEffect(() => {
    //     setLoading(true)
    //     getProducts(categoryId).then(products => {
    //         setProducts(products)
    //     }).finally(() => (
    //         setLoading(false)
    //     ))
    // }, [categoryId])



    useEffect(() => {
        setLoading(true)
        const asyncFunction = categoryId ? getProductsByCategory : getProducts

        asyncFunction(categoryId).then(response => {
            setProducts(response)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
    }, [categoryId])

    if(loading) {
        return( <h1 className='loading'>LOADING...</h1> )
    }

    return (
        <div className='ItemListContainer'>
            <ItemList products={products} />
        </div>
        // <div className='ItemListContainer'>
        //     <ItemList products={products}/>
        // </div>
    )
}

export default ItemListContainer