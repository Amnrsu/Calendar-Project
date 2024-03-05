import React from 'react';
import { useNavigate } from "react-router-dom";
import googleIcon from '../assets/google.png'
import linkedinIcon from '../assets/linkedin.png'
import facebookIcon from '../assets/facebook.png'

const Modal = () => {
    const navigate = useNavigate();
    const s = document.querySelector(':root');
    var currentTypeState = true;

    function switchUserType() {
        document.getElementById("userPassword").value = "";
        document.getElementById("userEmail").value = "";
        if (currentTypeState === true) {
            currentTypeState = false;
            document.getElementById("leftContP").innerHTML = "New Here?";
            document.getElementById("switchType").innerHTML = "Sign Up";
            document.getElementById("rightContHeader").innerHTML = "Log in to calendar";
            s.style.setProperty("--displayForgotPassword", "fixed")
            document.getElementById("submitDetails").innerHTML = "Log in";
        }
        else {
            currentTypeState = true;
            document.getElementById("leftContP").innerHTML = "Already have an account?";
            document.getElementById("switchType").innerHTML = "Log in";
            document.getElementById("rightContHeader").innerHTML = "Sign up with Calendar";
            s.style.setProperty("--displayForgotPassword", "none")
            document.getElementById("submitDetails").innerHTML = "Sign Up";
        }
    }

    function togglePasswordVisibility() {
        var currentPasswordState = document.getElementById("userPassword");
        if (currentPasswordState.type === "password") {
            currentPasswordState.type = "text";
            document.getElementById("visibilityToggle").innerHTML = "visibility";
        }
        else {
            currentPasswordState.type = "password";
            document.getElementById("visibilityToggle").innerHTML = "visibility_off";
        }
    }

    return (
        <div class="blur">
            <div class="popUpCont">
                <div class="leftCont">
                    <h1>Welcome!</h1>
                    <p id="leftContP">Already have an account?</p>
                    <button onClick={switchUserType} id="switchType" class="switchTypeButton">Log in</button>
                </div>
                <div class="rightCont">
                    <span onClick={() => { document.querySelector('.blur').style.display = 'none'; currentTypeState = false; switchUserType(); }} class="material-symbols-outlined closeIcon">close</span>
                    <h1 id="rightContHeader">Sign up with Calendar</h1>
                    <div class="socialsCont">
                        <a class="google" onClick={() => {navigate("/test")}}>
                            <img src={googleIcon} alt="Cover Image" class="icon"/>
                        </a>
                        <a class="linkedin" onClick={() => {navigate("/test")}}>
                            <img src={linkedinIcon} alt="Cover Image" class="icon li"/>
                        </a>
                        <a class="facebook" onClick={() => {navigate("/test")}}>
                            <img src={facebookIcon} alt="Cover Image" class="icon"/>
                        </a>
                    </div>
                    <p>or use your email account</p>
                    <input id="userEmail" class="popUpTextCont" type="email" placeholder="Email" /><span class="material-symbols-outlined emailIcon">mail</span><br />
                    <input id="userPassword" class="popUpTextCont" type="password" placeholder="Password" /><span class="material-symbols-outlined passwordIcon">lock</span><span onClick={togglePasswordVisibility} class="material-symbols-outlined passwordVisibility" id="visibilityToggle">visibility_off</span>
                    <a id="forgotPassword" class="forgotPasswordButton">Forgot Password?</a>
                    <button id="submitDetails" class="submitDetailsButton" onClick={() => {navigate("/calendarPage")}}>Sign Up</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
