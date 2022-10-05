import { Link } from "react-router-dom"

const Item = ({ prod }) => {
    return (
        <div>
            <h1>{prod.name}</h1>
            <h2>{prod.price}</h2>
            <Link to={`/detail/${prod.id}`}>Ver detalle</Link>
        </div>
    )
}

export default Item