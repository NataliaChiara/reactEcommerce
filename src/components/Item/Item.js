import './Item.css'
import { Link } from "react-router-dom"
import { useContext } from 'react'
// import { Context } from '../../App'

const Item = ({ id, name, img, category }) => {

    // const value = useContext(Context)
    // console.log(value)

    return (

        <div>
            <div className="product">
                <div className="frame">
                    <img src={img}></img>
                </div>
                <div className="description">
                    <h1>{name}</h1>
                    <h2>category: {category}</h2>
                    <Link to={`/detail/${id}`} className="link">Ver detalle</Link>
                </div>
            </div>
        </div>
    )
}

export default Item