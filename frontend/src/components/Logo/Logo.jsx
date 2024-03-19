import './Logo.css'
import { Link } from 'react-router-dom'

export function Logo() {
    return(
        <div className='logo'>
            <Link className='logo-img' to='/'></Link>
        </div>
    )
}