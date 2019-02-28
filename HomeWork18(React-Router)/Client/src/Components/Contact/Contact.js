import React, {Component} from 'react';
import './Contact.css';

class Contact extends Component {
    constructor(props){
        super(props);
        this.sendEmail = this.sendEmail.bind(this);
    }


    sendEmail(ev) {
        ev.preventDefault();
        let contactForm= document.getElementsByName("contactForm")[0];
        let request = new XMLHttpRequest();
        request.open('POST', 'http://localhost:5005/sendmail', true);
        request.setRequestHeader('accept', 'plain/text');
        let formData = new FormData(contactForm);
        request.send(formData);
    }
    render() {
        return (
                <div id="contact">
                    <h3>You can send me a message here!</h3>
                    <form name="contactForm" method="POST" onSubmit={this.sendEmail}>
                        <p>Enter your name: </p>
                        <input type="text" name = "name" placeholder="name"/>
                        <p>Enter your email: </p>
                        <input type="text" name = "email" placeholder="email"/>
                        <p>Enter your message: </p>
                        <textarea name = "message" placeholder="Your message"  cols="120" rows="15"/>
                        <button id = "sendMessage" type="submit">Send</button>
                    </form>
                </div>


        )
    }
}

export default Contact;