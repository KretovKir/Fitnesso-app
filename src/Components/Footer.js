import React from "react";
import logo_finish from '../media/logo_finish.PNG'
import paypal from '../media/paypal.PNG'
import stripe from '../media/stripe.PNG'
import xz from '../media/xz.PNG'
import mastercard from '../media/mastercard.PNG'
import americanexpress from '../media/americanexpress.PNG'

function Footer(){
    return <div className="final__block">
        <div className="tree__block">
            <div className="logo__final">
                <img className = "logo__left" src = {logo_finish} alt = "logo_left"/>
            </div>

            <div className="middle__block">
                <p className = "zagl__finish">CONTACT</p>
                <p className = "email__finish">contact@fitnesso.com</p>
                <p className = "licency__finish">LICENCING</p>
                <ul className = "licency__list">
                    <li className= "licency__item">Developer KretovKir</li>
                    <li className = "licency__item">Licencing</li>
                    <li className = "licency__item">Support</li>
                </ul>
            </div>

            <div className = "end__block">
                <p className = "end__zagl">EXPLORE</p>
                <li className = "licency__item">Premium Courses</li>
                    <li className = "licency__item">Free Courses</li>
                    <li className = "licency__item">Blog</li>
                    <li className = "licency__item">About</li>
                    <li className = "licency__item">Contact</li>
                    <li className = "licency__item">Style Guide</li>
            </div>
        </div>
        
        <div className="bottom__block">
            <img className="plate" src={paypal} alt = "pay"/>
            <img className="plate" src={stripe} alt = "pay"/>
            <img className="plate" src={xz} alt = "pay"/>
            <img className="plate" src= {mastercard} alt = "pay"/>
            <img className="plate" src= {americanexpress} alt = "pay"/>
        </div>
    </div>
}

export default Footer;