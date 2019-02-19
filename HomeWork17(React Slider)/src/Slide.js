import React, { Component } from 'react';
import './Slide.css';
import AnimateOnChange from 'react-animate-on-change'

class Slide extends Component {
   render() {
        console.log(" my props   " , this.props.slide);
        return (
                 <AnimateOnChange
                    customTag="div"
                    baseClassName="slide"
                    animationClassName="fade"
                    animate={this.props.slide.src}>
                    <img  src={this.props.slide.src} alt = "here must be a some content"/>
                    <span>{this.props.slide.description}</span>
                </AnimateOnChange>
        );
    }
}

export default Slide;