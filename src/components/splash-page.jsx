import React from 'react'
import SplashImg from '../assets/SplashImg.svg'

const SplashPage = () => {
    return (
        <div class="splashCont">
            <img src={SplashImg} alt="Cover Image" class="splash" />
            <div class="splashTextCont">
                <h1>Plan <span>your</span> future,<br/>so you can live in<br/>the <span>moment</span></h1>
                <a onClick={() => {document.querySelector('.blur').style.display = 'flex';}} class="splashGetStarted">Get Started</a>
            </div>
        </div>
    )
}

export default SplashPage