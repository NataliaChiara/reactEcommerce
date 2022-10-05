import "./NavBar.css"
import CartWidget from './CartWidget/CartWidget'
import logo from './Assets/logoSteam.png'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="nav">
            <div className='brand'>
                <img src={logo} className='logo'></img>
                <h1 className='tittle'>S T E A M</h1>
            </div>
            <div className='links'>
                <Link className="navButton" to={`category/simulacion`}>Simulacion</Link>
                <Link className="navButton" to={`/category/rol`}>Rol</Link>
                <Link className="navButton" to={`/category/multiplayer`}>Multiplayer</Link>
                <Link className="navButton" to={`/category/indie`}>Indie</Link>
                <Link className="navButton" to={`/category/estrategia`}>Estrategia</Link>
                <Link className="navButton" to={`/category/deportes`}>Deportes</Link>
                <Link className="navButton" to={`/category/carreras`}>Carreras</Link>
                <Link className="navButton" to={`/category/aventura`}>Aventura</Link>
                <Link className="navButton" to={`/category/accion`}>Accion</Link>
                <Link className="navButton2" to={`/category/free`}>Free to play</Link>
            </div>
            <div>
                <CartWidget />
            </div>
        </nav>
    )
}

export default NavBar