import React, { Component } from 'react';
import Slide from './Slide.js';
import './Slider.css';

class Slider extends Component {
    constructor(props){
        super(props);
        this.state = {
            slideNumber: 0
        };
        this.changeSlide = this.changeSlide.bind(this);
    }

    changeSlide() {
        console.log("before  ", this.state.slideNumber);
        if(this.state.slideNumber >=(this.props.slides.length -1)){
            this.setState({
                slideNumber : 0
            })
        }
        else this.setState(({slideNumber}) => ({
                slideNumber: slideNumber + 1
            })
        );
        console.log("after  ", this.state.slideNumber);
    }

    componentDidMount(){
        setInterval(this.changeSlide, this.props.interval);
    }

    render() {
       return (
            <div className="slider" onClick={this.changeSlide}>
                <Slide slide = {this.props.slides[this.state.slideNumber]} />
            </div>
        );
    }
}

export default Slider;