import React from 'react'
import css from './Header.module.css'
import logo from '../../assets/logo.png'
import fairTrade from '../../assets/fairTrade.png'
import { CgShoppingBag } from 'react-icons/cg'

export const Header = () => {
    return (
        <div className={css.container}>
            <div className={css.logo}>
            <img src={fairTrade} alt="logo the Anti-hunger" />
                <img src={logo} alt="logo the Anti-hunger" />
            </div>
            <div className={css.right}>
                <div className={css.menu}>
                    <ul className={css.menu}>
                        <li><a href="/collection">Collection</a></li>
                        <li>Login</li>
                        <li>Register</li>
                        <li>Contact-Us</li>
                        <li>About</li>
                    </ul>
                </div>
                <input type="text" className={css.search} placeholder="Search" />
                <CgShoppingBag className={css.cart} />
            </div>
        </div>
    )
}

export default Header;