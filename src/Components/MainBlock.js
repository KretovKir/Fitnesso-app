import React from "react";
import SandraLyonsSandra from '../media/SandraLyonsSandra.png'
import IMAGEsexy from '../media/IMAGEsexy.png'

function MainBlock(){
    return <div class = "main__block">
    <div class = "two__blocks">
        <div class="left__block__main">
            <div class ="sandra__img"> <img class="sandra" src={SandraLyonsSandra} alt = "alter"/> </div>
            
            <div class = "sexy__lady"><img class = "sexy__shick" src={IMAGEsexy} alt = "alter"/></div>
        </div>

        <div class="right__block__main">
            <h4 class = "small__head__txt">HI I'M SANDRA LYONS</h4>
            <h1 class = "main__txt__main">Your go to online <br/>fitness trainer<br/>and nutritionist.</h1>
        
            <div class ="main__description__block">
                <p class = "main__description">After getting a bachelors in nutrition and fitness training<br/>I started working with people all around and changing<br/>their lives forever.</p>
            </div>

            <button class = "main__button"> ONLINE COACHING </button>
        </div>
    </div>
</div>
}
    


export default MainBlock;