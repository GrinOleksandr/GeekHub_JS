import React, {Component} from 'react';

import './Skills.css';

class Skills extends Component {
    render() {
        return (

            <div id="content">
                <div id="wrapper">
                    <h3>Hello. I'm a JavaScript developer. Have experience of writing dynamic websites.</h3>
                    <ul className="skills">
                        <li><img src="/images/1200px-HTML5_logo_and_wordmark.svg.png" alt="html 5"
                                 className="skills-img"/></li>
                        <li><img src="/images/css.png" alt="CSS 3" className="skills-img"/></li>
                        <li><img src="/images/javascript_logo.png" alt="javascript" className="skills-img"/></li>
                        <li><img src="/images/jquery.png" alt="jquery" className="skills-img"/></li>
                        <li><img src="/images/webpack.png" alt="webpack" className="skills-img"/></li>
                        <li><img src="/images/babel.png" alt="babel" className="skills-img"/></li>
                        <li><img src="/images/1200px-Node.js_logo.svg.png" alt="node js" className="skills-img"/></li>
                        <li><img src="/images/Mongo-db-logo.png" alt="mongo DB" className="skills-img"/></li>
                    </ul>
                </div>
            </div>


        )
    }
}

export default Skills;