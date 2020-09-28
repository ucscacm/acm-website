import React from 'react';
import background from './background-banner.png';
import logo from './light-logo.png';


function Banner(){
    return(
        <div class="banner-container">
            <img class="background" src={background} alt="ACM-Banner"/>
            <img class="logo" src={logo} alt="ACM-Banner"/>
            <div class="title">
                <div class="title-ucsc">ucsc</div> 
                <div class="title-acm">acm</div> 
            </div>  
        </div>  
    );  
}
export default Banner;
