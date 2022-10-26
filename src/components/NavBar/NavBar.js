import "./NavBar.css"
import CartWidget from './CartWidget/CartWidget'
import logo from './Assets/logoSteam.png'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="nav">
            <div className='brand'>
                <img src={logo} className='logo'></img>
                <Link className='tittle' to={`/`}>S T E A M</Link>
            </div>
            <div className='links'>
                <NavLink to={`/category/simulacion`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'} >Simulacion</NavLink>
                <NavLink to={`/category/rol`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'} >Rol</NavLink>
                <NavLink to={`/category/multiplayer`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'} >Multiplayer</NavLink>
                <NavLink to={`/category/indie`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'} >Indie</NavLink>
                <NavLink to={`/category/estrategia`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'} >Estrategia</NavLink>
                <NavLink to={`/category/deportes`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'} >Deportes</NavLink>
                <NavLink to={`/category/carreras`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'} >Carreras</NavLink>
                <NavLink to={`/category/aventura`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'} >Aventura</NavLink>
                <NavLink to={`/category/accion`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'} >Accion</NavLink>
                <NavLink className="navButton2" to={`/category/free`}>Free to play</NavLink>
            </div>
            <div>
                <CartWidget />
            </div>
        </nav>
    )
}

export default NavBar