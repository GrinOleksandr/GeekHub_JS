import React, { Component } from 'react';
import './App.css';
import { Link, Route } from 'react-router-dom';
import Skills from './Components/Skills/Skills.js';
import About from './Components/About/About.js'
import Resume from './Components/Resume/Resume.js'
import Contact from './Components/ContactMe/ContactMe.js'



class App extends Component {
    render() {
        return (
            <div className="App">
                <Link to={'/About'}>About me</Link>
                <Link to={'/Skills'}>Skills</Link>
                <Link to={'/Resume'}>Resume</Link>
                <Link to={'/Contact'}>Contact</Link>

                <Route exact={true} path={"/Skills"} component={Skills} />
                <Route exact={true} path={"/About"} component={About} />
                <Route exact={true} path={"/Resume"} component={Resume} />
                <Route exact={true} path={"/Contact"} component={Contact} />

            </div>

        );
    }
}



export default App;
