import React from "react";
import Vectortwitter from '../media/Vectortwitter.png'
import Vectorinst from '../media/Vectorinst.png'
import Vectorin from '../media/Vectorin.png'
import Vectoryoutube from '../media/Vectoryoutube.png'
import IMAGEhz from '../media/IMAGEhz.png'
import IMAGEprig from '../media/IMAGEprig.png'
import IMAGEmirgirl from '../media/IMAGEmirgirl.png'
import IMAGEgirlcut from '../media/IMAGEgirlcut.png'
import IMAGEmassage from '../media/IMAGEmassage.png'
import IMAGEkurtka from '../media/IMAGEkurtka.png'
import IMAGEspine from '../media/IMAGEspine.png'
import IMAGEgiria from '../media/IMAGEgiria.png'
function Many(){
    return <div className="many">
    <div className = "many__items">
        <div className = "pink__line">
            <div className = "fitnesso__circles">
                <img className = "social__set" src = {Vectortwitter} alt = "kill"/><p className = "name__comp">Fitnesso</p>
                <img className = "social__set" src = {Vectorinst} alt = "kill"/><p className = "name__comp">@fitnesso</p>
                <img className = "social__set" src = {Vectorin} alt = "kill"/><p className = "name__comp">Fitnesso</p>
                <img className = "social__set" src = {Vectoryoutube} alt = "kill"/><p className = "name__comp">/Fitnesso</p>
            </div>
        </div>
        <img className = "many__images" src = {IMAGEhz} alt = "kill"/>
        <img className = "many__images" src = {IMAGEprig} alt = "kill"/>
        <img className = "many__images" src = {IMAGEmirgirl} alt = "kill"/>
        <img className = "many__images" src = {IMAGEgirlcut} alt = "kill"/>
       
        <img className = "many__images" src = {IMAGEmassage} alt = "kill"/>
        <img className = "many__images" src = {IMAGEkurtka} alt = "kill"/>
        <img className = "many__images" src = {IMAGEspine} alt = "kill"/>
        <img className = "many__images" src = {IMAGEgiria} alt = "kill"/>
        
    </div>
</div>
}

export default Many;