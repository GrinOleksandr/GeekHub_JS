import React, {Component} from "react";
import {Link} from "react-router-dom";
import './Header.css';

class Header extends Component {
    constructor(props){
        super(props);
        this.activate = this.activate.bind(this);
    }

    activate(ev){
        activateMe(ev.target.parentElement);
        function activateMe(element){
            let prevActiveButton = document.getElementsByClassName('active')[0];
            prevActiveButton.classList.remove('active');
            element.classList.add('active');
            console.log(element);
        }

    //     document.addEventListener('DOMContentLoaded', function () {
    //         activateMe(document.getElementById(ev.target.innerText));
    //     });
    }

        render() {
            return (
                <div id="header">
                    <div className="container">
                        <div id="logo">
                            <h1><a href="/">Oleksandr Grin</a></h1>
                        </div>
                        <nav id="nav">
                            <ul id="navigation" onClick={this.activate}>
                                <li className="active"><Link to={'/'}>Homepage</Link></li>
                                <li><Link to={'/skills'}>Skills</Link></li>
                                <li><Link to={'/about'}>About me</Link></li>
                                <li><Link to={'/resume'}>Resume</Link></li>
                                <li><Link to={'/contact'}>Contact me</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            );
        }
}

export default Header;

