import React from 'react'
import contactBox from '../assets/contactBox.svg'

const ContactPage = () => {
    return (
        <div id="contact" class="contactCont">
            <img src={contactBox} alt="Cover Image" class="contactBoxBack" />
            <div class="contactBoxCont">
                <h1 class="textContact">Contact Us</h1>
                <form>
                    <label class="textLabels" for="textName">Name</label><br/>
                    <input class="textBoxes" type="text"/><br/>
                    <label class="textLabels" for="textEmail">E-Mail</label><br/>
                    <input class="textBoxes" type="email"/><br/>
                    <label class="textLabels" for="textMessage">Message</label><br/>
                    <textarea class="textBoxes Message" type="text"></textarea>
                    <button class="submitButton">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default ContactPage