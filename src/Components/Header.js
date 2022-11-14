import React from "react";
import logo from '../media/logo.png'
import Vectorcart from '../media/Vectorcart.png'
function Header(){
    return <div className = "container">
    <div className = "up__menu">
        <img className = "logo" src = {logo} alt = "alter"/>
        <ul className = "header__list">
            <li className = "header__list__item"> <a href = "" className="header__links">About</a></li>
            <li className = "header__list__item"><a href = "" className="header__links">Free Workouts</a></li>
            <li className = "header__list__item"><a href = "" className="header__links">Shop</a></li>
            <button className = "header__button">  BOOK A CALL</button>
            <a href = ""><img className = "cart" src = {Vectorcart} alt = "alter"/></a>
        </ul>
    </div>
</div>
}

export default Header;