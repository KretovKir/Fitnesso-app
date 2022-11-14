import React from "react";
import IMAGEpressman from '../media/IMAGEpressman.png'
import IMAGEkusno from '../media/IMAGEkusno.png'
import IMAGEgirl2 from '../media/IMAGEgirl2.png'
function Tips(){
    return  <div className="tips_and_cards">
    <div className ="tips">
        <div className="tips__and__button">
            <h1 className = "tips__headtxt">Read our tips and tricks</h1>
            <p className = "tips__desc">We post a lot of free content around health fitness and general wellbeing. Make sure to<br/> check all of our posts down below.</p>
            <button className = "tips__button">   VIEW ALL POSTS</button>
        </div>

        <div class="tips__cards">
            <img className = "cards__img" src ={IMAGEpressman} alt = "card_img"/>
            <img className = "cards__img" src = {IMAGEkusno} alt = "card_img"/>
            <img className = "cards__img" src = {IMAGEgirl2} alt = "card_img"/>
        </div>
</div>
</div>
}

export default Tips;