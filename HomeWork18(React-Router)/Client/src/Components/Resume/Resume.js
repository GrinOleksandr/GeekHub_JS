import React, {Component} from 'react';

import './Resume.css';

class Resume extends Component {
    render() {
        return (

            <div id="resume" >
                <ul className="resume">
                    <li className="brief">
                        <div>
                            <ul className="brief-info">
                                <li>Grin Oleksandr - junior JavaScript developer</li>
                                <li>Date of birth: 10.11.1985</li>
                                <li>Marital status: married</li>
                                <li>Latest update: 28.02.2019</li>
                            </ul>
                            <h3>Summary</h3>
                            <ul>
                                <li>University education</li>
                                <li>GeekHub(FrontEnd+CMS)</li>
                                <li>GeekHub(QA)</li>
                                <li>GeekHub(JavaScript)(in progress)</li>
                                <li>Worked with: CSS 3+HTML 5, Github, WordPress, JavaScript(ES6), JQuery, NodeJS,
                                    MongoDB, WebPack, Babel, React.
                                </li>
                            </ul>
                        </div>
                        <img src="/images/sashagrin.jpg" alt = "Oleksandr Grin" />
                    </li>

                    <li className="education">
                        <h3>Education</h3>

                        <ul>
                            <li>
                                <p><b>Geekhub </b>courses, Cherkasy, Ukraine(2018-2019)</p>
                                <p><b>Speciality:</b> JavaScript</p>
                                <p><b>Degree:</b> junior JavaScript developer</p>
                            </li>
                            <li>
                                <p><b>Geekhub </b>courses, Cherkasy, Ukraine(2014-2015)</p>
                                <p><b>Speciality:</b> Quality Assurance</p>
                                <p><b>Degree:</b> junior QA engineer</p>
                            </li>
                            <li>
                                <p><b>Geekhub </b>courses, Cherkasy, Ukraine(2013-2014)</p>
                                <p><b>Speciality:</b> junior FrontEnd developer</p>
                                <p><b>Degree:</b> junior JavaScript developer</p>
                            </li>
                            <li>
                                <p><b>National University of Informational-Comunicational Technologies</b>, Kiev,
                                    Ukraine(2005-2008)</p>
                                <p><b>Speciality:</b> infomational comunication networks</p>
                            </li>
                        </ul>
                    </li>
                    <li className="experience">
                        <h3>Work Experience</h3>
                        <ul>
                            <li>
                                <p><b>Accountant</b> - <a href="http://noviobrii.org.ua">"Novi Obrii"</a> (2015-2017)
                                </p>
                            </li>
                            <li>
                                <p><b>Furniture upholstery</b> - <a
                                    href="http://www.matrix-mebli.com">"Matrix"</a> (2014-2015)</p>
                            </li>
                            <li>
                                <p><b>Worker</b> - <a href="http://www.temp.com.ua">"Temp"</a> (2013)</p>
                            </li>
                            <li>
                                <p><b>Taxi driver</b> - <a
                                    href="http://www.taxi1588.com.ua/">"VIP-Taxi"</a> (2011-2012)</p>
                            </li>
                            <li>
                                <p><b>System administrator</b> - <a
                                    href="http://www.intec.in.ua">"Intec-inform"</a> (2010)</p>
                            </li>
                            <li>
                                <p><b>Physical LAN building</b> - <a href="http://www.mclaut.com">"McLaut
                                    ISP"</a> (2004-2006)</p>
                                <p>(network troubles diagnostics, routers configurating)</p>
                            </li>
                        </ul>
                    </li>
                    <li className="tech-skills">
                        <h3>Technical skills</h3>
                        <ul>
                            <li>Ubuntu linux</li>
                            <li>Wordpress</li>
                            <li>GitHub</li>
                            <li>HTML5/CSS3</li>
                            <li>JavaScript(ES6)</li>
                            <li>JQuery</li>
                            <li>NodeJS</li>
                            <li>MongoDB</li>
                            <li>WebPack</li>
                            <li>Babel</li>
                            <li>React</li>
                        </ul>
                    </li>
                    <li className="Languages">
                        <h3>Languages</h3>
                        <ul>
                            <li>
                                <p><b>Ukrainian</b>: as mother tongue</p>
                            </li>
                            <li>
                                <p><b>Russian</b>: as mother tongue</p>
                            </li>
                            <li>
                                <p><b>English</b>: intermediate</p>
                            </li>
                        </ul>
                    </li>
                    <li className="personal-info">
                        <h3>Personal information</h3>
                        <ul>
                            <li>I am a Christian</li>
                            <li>Have 2 kids</li>
                            <li>Honest</li>
                            <li>Sincere</li>
                            <li>Responsible</li>
                            <li>Quick learner</li>
                            <li>Team worker</li>
                            <li>Plodding</li>
                            <li>Conscientious</li>
                            <li>Friendly with office and computer technics</li>
                        </ul>
                    </li>
                    <li className="hobbies">
                        <h3>Hobbies</h3>
                        <ul>
                            <li>Spending time with my family</li>
                            <li>Walking on the fresh air</li>
                            <li>Bible reading</li>
                        </ul>
                    </li>
                </ul>
            </div>
           )
    }
}

export default Resume;