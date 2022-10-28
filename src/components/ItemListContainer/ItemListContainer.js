import './ItemListContainer.css'
import { useState, useEffect } from 'react'
// import { getProducts, getProductsByCategory } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../service/firebase'

const ItemListContainer = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [noData, setNoData] = useState(false)

    const { categoryId } = useParams()


    useEffect(() => {
        setLoading(true)
        setNoData(false)

        const collectionRef = categoryId
        ? query(collection(db, 'products'), where('category', '==', categoryId))
        : collection(db, 'products')

        getDocs(collectionRef).then(response => {
            console.log(response)

            const productsAdapted = response.docs.map(doc => {
                const data = doc.data()
                console.log(data)
                return { id: doc.id, ...data }
            })

            setProducts(productsAdapted)

        })
        .catch(error => {
            setNoData(true)
        })
        .finally(() => {
            setLoading(false)
        })
    }, [categoryId])

    if(loading) {
        return( <h1 className='loading'>LOADING...</h1> )
    }

    if(noData) {
        return( <h1 className='loading'>No se pudieron encontrar los productos</h1> )
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