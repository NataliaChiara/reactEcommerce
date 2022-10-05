import './Header.css'
import video from './Assets/header.webm'


const Header = () => {
    return (
        <div className='frameHeader'>
            <video className='video' loop autoPlay muted>
                <source src={video} type="video/webm"></source>
            </video>
        </div>

    )


}

export default Header