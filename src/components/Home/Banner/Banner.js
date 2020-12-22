import React from 'react';
import background from './background-banner.png';
import logo from './light-logo.png';


function Banner(){
    return(
        <div class="banner-container">
            <img class="logo" src={logo} alt="ACM-Banner"/>
                <div class="title-container">
                    <div class="title">
                        ucsc acm
                    </div>
                </div>  
            <div class="content">
                <div class="slogan">
                    the largest computer science community at uc santa cruz
                </div>
                <div class="description">
                    We are a student run organization that strives to create a supportive and inclusive community for people of all backgrounds and skill levels who are passionate about computer science to learn and network.
                </div>
            </div>
        </div>  
    );  
}
export default Banner;
