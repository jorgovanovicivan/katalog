import React, {useState} from 'react'
import {Link} from 'react-router-dom';
function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = ()=> setClick(false);
    return (
        <>
            <nav classNAme="navbar">
            <div className='navbar-container'>
                <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>WORLD++</Link>

                <div classNme='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />

                </div>
                <ul className={click ? 'nav-menu active':'nav-menu'}>

                <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}> Pocetna </Link>
</li>
<li className='nav-item'>
                <Link to='/destinacije' className='nav-links' onClick={closeMobileMenu}>Destinacije </Link>
</li>
<li className='nav-item'>
                <Link to='/galerija' className='nav-links' onClick={closeMobileMenu}> Galerija </Link>
</li>
                </ul>
                <li className='nav-item'>
                <Link to='/kontakt' className='nav-links' onClick={closeMobileMenu}> Kontakt </Link>
</li>
                </div>
            </nav>
        </>
    )
}

export default Navbar
