import {Link} from 'react-router-dom';
import '../components.sass/Header.sass'
export default function Header () {
    return (
        <header className='block-header'>
            <div>
                <Link className='link-header'to="/">#VANLIFE</Link>
            </div>
            <div>
                <Link className='link-header'clr to="/about">About</Link>
                <Link className='link-header' to="/Vans">Vans</Link>
            </div>
        </header>
    )
}