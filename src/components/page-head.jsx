import React from 'react'

const PageHead = () => {
    return (
        <div class="headRect">
            <div class="itemCont">
                <a href="#" class="subHeads">Home</a>
                <a href="#features" class="subHeads">Features</a>
                <div class="headName">Calendar</div>
                <a href="#contact" class="subHeads">Contact</a>
                <button onClick={() => {document.querySelector('.blur').style.display = 'flex';}} class="signUpCont">Sign Up</button>
            </div>
        </div>
    )
}

export default PageHead