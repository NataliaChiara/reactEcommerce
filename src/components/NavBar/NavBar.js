import "./NavBar.css"
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="NavBar">
            <h1>Steam</h1>
            <div>
                <Link to={`category/simulacion`}>Simulacion</Link>
                <Link to={`/category/rol`}>Rol</Link>
                <Link to={`/category/multiplayer`}>Multiplayer</Link>
                <Link to={`/category/indie`}>Indie</Link>
                <Link to={`/category/estrategia`}>Estrategia</Link>
                <Link to={`/category/deportes`}>Deportes</Link>
                <Link to={`/category/carreras`}>Carreras</Link>
                <Link to={`/category/aventura`}>Aventura</Link>
                <Link to={`/category/accion`}>Accion</Link>
                <Link to={`/category/free`}>Free to play</Link>
            </div>
        </nav>
    )
}

export default NavBar