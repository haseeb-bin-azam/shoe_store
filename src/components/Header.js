import Menu_Icon from '../icons_svg/bars-solid.svg';
import Close_Icon from '../icons_svg/times-solid.svg';
import Cart_Icon from '../icons_svg/shopping-cart-solid.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import '../css/Header.css'

export const Header = () => {

    const [toggle, setToggle] = useState(false);

    const changeToggleValue = () => {
        setToggle(!toggle);
        // console.log(toggle)
    }

    return (
        <div className='header'>
            <div className='menu'>
                <img src={Menu_Icon} onClick={changeToggleValue} alt='' width='20' />
            </div>

            <div className='logo'>
                <h1> <Link to='/'>Nike</Link> </h1>
            </div>

            <nav>
                <ul className={toggle ? 'toggle' : ''}>
                    <li> <Link to='/' onClick={changeToggleValue}>Home</Link> </li>
                    <li> <Link to='/product' onClick={changeToggleValue}>Product</Link> </li>
                    <li> <Link to='/contact' onClick={changeToggleValue}>Contact</Link> </li>
                    <li> <Link to='/about'onClick={changeToggleValue}>About</Link> </li>
                    <li> <Link to='/login'onClick={changeToggleValue}>Login/Register</Link> </li>
                    <li className='close'>
                        <img src={Close_Icon} onClick={changeToggleValue} alt='' width='20' />
                    </li>
                </ul>

                <div className='cart'>
                    <span>0</span>
                    <Link to='/cart'>
                        <img src={Cart_Icon} alt='' width='20' />
                    </Link>
                </div>
            </nav>
        </div>
    )
}