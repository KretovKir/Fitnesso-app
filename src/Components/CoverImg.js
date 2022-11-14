import React from "react";
import cover from '../media/cover.png'
function CoverImg(){
    return  <div className="cover">
    <img className = "cover__img" src = {cover} alt = "cover"/>
</div>
}

export default CoverImg;