import React from "react";
import IMAGEsexy from '../media/IMAGEsexy.png'
import IMAGEtatoo from '../media/IMAGEtatoo.png'
import IMAGEfat from '../media/IMAGEfat.png'
import USD19 from '../media/USD19.png'
import USD29 from '../media/USD29.png'
import USD89 from '../media/USD89.png'

function BlueLineBlock(){
    return <div className="blue__line__block">
    <div className = "txt__block__blue">
        <h1 className = "blue__line__headtxt"> Free home workouts<br/>and fitness plans</h1>
        <p className = "blue__line__desc">I`ve created these premium fitness classes for everyone starting<br/> from beginner to advanced level with an in depth FAQ.</p>
    </div>
<div className="cards__blue">
    <div className="cards__free">
        <div className="card__home">
            <img className = "card__image" src = {IMAGEsexy} alt = "alter"/>
            <div className = "first__str">
                <p className = "time time__two">3 DAYS A WEEK</p>
                <img className = "price__img" src = {USD19} alt="19$"/>
            </div>
            <div className = "second__str">
                <p className = "card__desc">Home Burn</p>
                <p className = "card__bottom__txt">View</p>
            </div>
        </div>
    </div>

    <div className="cards__free">
        <div className="card__home">
            <img className = "card__image" src = {IMAGEtatoo}  alt = "alter"/>
            <div className = "first__str">
                <p className = "time time__two">30 DAYS </p>
                <img className = "price__img price__img2" src = {USD29} alt = "29$"/>
            </div>
            <div className = "second__str">
                <p className = "card__desc">Shedded Meal Plan</p>
                <p className = "card__bottom__txt">View</p>
            </div>
        </div>
    </div>

    <div className="cards__free">
        <div className="card__home">
            <img className = "card__image" src = {IMAGEfat} alt = "alter"/>
            <div className = "first__str">
                <p className = "time time__two">7 DAYS A WEEK</p>
                <img className = "price__img price__img3" src = {USD89} alt = "89$"/>
            </div>
            <div className = "second__str">
                <p className = "card__desc">High Intensity Training</p>
                <p className = "card__bottom__txt">View</p>
            </div>
        </div>
    </div>
</div>
</div>
}

export default BlueLineBlock;