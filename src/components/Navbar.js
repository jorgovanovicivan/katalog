import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import { Button } from './Button';

import './Navbar.css';
function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton]=useState(true);


    const handleClick = () => setClick(!click);
    const closeMobileMenu = ()=> setClick(false);

    const showButton=()=>{if(window.innerWidth<=90){
        setButton(false);
    }else{
        setButton(true);
    }

};
useEffect(() => {
    showButton();
  }, []);

window.addEventListener('resize', showButton)
    return (
        <>
            <nav classNAme="navbar">
            <div className='navbar-container'>
                <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>WORLD++</Link>

                <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />

                </div>
                <ul className={click ? 'nav-menu active':'nav-menu'}>

                <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}> Početna </Link>
</li>
<li className='nav-item'>
                <Link to='/destinacije' className='nav-links' onClick={closeMobileMenu}>Destinacije </Link>
</li>
<li className='nav-item'>
                <Link to='/galerija' className='nav-links' onClick={closeMobileMenu}> Galerija </Link>
</li>
</ul>
{button && <Button buttonStyle='btn--outline'>Kontakt</Button>}

                </div>
            </nav>
        </>
    )
}

export default Navbar
