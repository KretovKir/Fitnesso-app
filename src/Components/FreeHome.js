import React from "react";
import IMAGEgirl from '../media/IMAGEgirl.png'
import FreeFREE from '../media/FreeFREE.png'
import IMAGEman from '../media/IMAGEman.png'
import IMAGEwindgirl from '../media/IMAGEwindgirl.png'

function FreeHome(){
    return <div class="free__home">
    <div class="txt__button">
        <h1 class = "free__main_txt">Free home workouts<br/> and fitness plans</h1>
        <div class = "free__desc"><p class ="desc__free">With free online classes people who don`t have the time or money<br/> to afford a personal coach can make change their lives forever</p></div>
        <button class = "free__button">  VIEW ALL </button>
    </div>
    
<div class="carto4ki">

    <div class="cards__free">
        <div class="card__home">
            <img class = "card__image" src = {IMAGEgirl} alt = "alter"/>
            <div class = "first__str">
                <p class = "time">30 MINUTES</p>
                <img class = "free__img" src = {FreeFREE} alt = "alter"/>
            </div>
            <div class = "second__str">
                <p class = "card__desc">The Perfect Outdoor Workout</p>
                <p class = "card__bottom__txt">Train now</p>
            </div>
        </div>
    </div>

    <div class="cards__free">
        <div class="card__home">
            <img class = "card__image" src = {IMAGEman} alt = "alter"/>
            <div class = "first__str">
                <p class = "time">1 HOUR</p>
                <img class = "free__img free__img2" src = {FreeFREE} alt = "alter"/>
            </div>
            <div class = "second__str">
                <p class = "card__desc">Back Days</p>
                <p class = "card__bottom__txt">Train now</p>
            </div>
        </div>
    </div>

    <div class="cards__free">
        <div class="card__home">
            <img class = "card__image" src = {IMAGEwindgirl} alt = "alter"/>
            <div class = "first__str">
                <p class = "time">40 MINUTES</p>
                <img class = "free__img" src = {FreeFREE} alt = "alter"/>
            </div>
            <div class = "second__str">
                <p class = "card__desc">The Ultimate Abs Tabata</p>
                <p class = "card__bottom__txt">Train now</p>
            </div>
        </div>
    </div>
</div>
</div>
}

export default FreeHome;