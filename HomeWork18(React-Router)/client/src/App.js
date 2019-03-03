import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Header from './Components/Header/Header.js'
import Homepage from './Components/Homepage/Homepage.js'
import Footer from './Components/Footer/Footer.js';
import Skills from './Components/Skills/Skills.js';
import About from './Components/About/About.js'
import Resume from './Components/Resume/Resume.js'
import Contact from './Components/Contact/Contact.js'

class App extends Component {
    render() {
        return (
            <div className="App">
            <Header />
                <Route exact={true} path={"/skills"} component={Skills} />
                <Route exact={true} path={"/about"} component={About} />
                <Route exact={true} path={"/"} component={Homepage} />
                <Route exact={true} path={"/contact"} component={Contact} />
                <Route exact={true} path={"/resume"} component={Resume} />
             <Footer />
            </div>
        );
    }
}


export default App;
