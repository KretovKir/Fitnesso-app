import React from "react";
import IMAGEup_blue from '../media/IMAGEup_blue.png'
function BlockZ(){
    return <div className="blockZ">
    <div className = "left__z__block">
        <h1 className = "Z__headtxt"> Who can benefit<br/> from a fully custom<br/>online fitness plan<br/> and nutrition?</h1>
        <p className = "Z__desc">Literally everyone. I`m currently helping people from 12<br/> to 60+ years old. Everyone is getting an adjusted<br/> program and a meal plan.</p>
        <button className = "z__button"> BOOK A CALL</button>
    </div>

    <div className = "right__z__block">
        <div className="blue__z__block">
            <img className ="up__z__block" src = {IMAGEup_blue} alt = "blue"/>
        </div>
    </div>
</div>
}

export default BlockZ;