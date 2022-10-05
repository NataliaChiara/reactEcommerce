import './Item.css'
import { Link } from "react-router-dom"

const Item = ({ prod }) => {
    return (

        <div className="container">
            <div className="product">
                <div className="frame">
                    <img src={prod.img}></img>
                </div>
                <div className="description">
                    <h1>{prod.name}</h1>
                    <h2>{prod.price}</h2>
                    <h1>{prod.category}</h1>
                    <div className="options">
                    <Link className="link" to={`/detail/${prod.id}`}>Ver detalle</Link>
                        0
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item