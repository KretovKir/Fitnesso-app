import React from "react";
import IMAGEcard1 from '../media/IMAGEcard1.png'
import IMAGEcard2 from '../media/IMAGEcard2.png'
import IMAGEcard3 from '../media/IMAGEcard3.png'
import IMAGEcard4 from '../media/IMAGEcard4.png'


function Journey(){
    return <div className = "journey">
    <h1 className = "journ__headtxt">The journey to a healthier <br/> body starts right now</h1>
    <button className = "journ__button">  ONLINE COACHING </button>

    <div className = "cards">
        <div className = "journ__card">
            <img className = "journ__card__img" src = {IMAGEcard1} alt = "alter"/>
            <h2 className = "card__headtxt">Learn to live a healthy<br/> life with fitness</h2>
            <div className = "journ__card__descblock"> <p className ="journ__card__desc">Changing your lifestyle with a fast paced life may seem<br/>hard or impossible, but with small steps each week you <br/> can achieve your dream physique and live a healthier<br/>life.</p> </div>
        </div>

        <div className = "journ__card">
            <img className = "journ__card__img" src = {IMAGEcard2} alt = "alter"/>
            <h2 className = "card__headtxt">Understand how to do<br/> excercises properly</h2>
            <div className = "journ__card__descblock"> <p className ="journ__card__desc">Just going to the gym and lifting weights won't make<br/> you healthy, after all it may even cause some harm to<br/> your body. We teach proper exercise techniques</p> </div>
        </div>

        <div className = "journ__card">
            <img className = "journ__card__img" src = {IMAGEcard3} alt = "alter"/>
            <h2 className = "card__headtxt">Track your<br/>progress weekly</h2>
            <div className = "journ__card__descblock"> <p className ="journ__card__desc">We're tracking your goal weight with body fat measures,<br/> weight and general feeling. You may have the same<br/> body weight but feel 10x better.</p> </div>
        </div>

        <div className = "journ__card">
            <img className = "journ__card__img" src = {IMAGEcard4} alt = "alter"/>
            <h2 className = "card__headtxt">Follow a specific plan<br/>made just for you</h2>
            <div className = "journ__card__descblock"> <p className ="journ__card__desc">Everyone is different, and we know it. That's why all of<br/> our clients get a programme specific just for their<br/> lifestyle and body tipe. This give the best possible<br/> results.</p> </div>
        </div>
    </div>
</div>
}

export default Journey;