import React, { Component } from 'react';
import Slider from './Slider.js';
import { cats, flowers } from './DataBase.js'
import "./App.css"

//Slider1 Configuration
const Slider1Interval = 2345;
const Slider1DataBase = cats;

//Slider2 Configuration
const Slider2Interval = 3456;
const Slider2DataBase = flowers;

class App extends Component {
  render() {
    return (
      <div className="App" >
    <Slider slides = {Slider1DataBase} interval = {Slider1Interval}/>
    <Slider slides = {Slider2DataBase} interval = {Slider2Interval}/>
      </div>
    );
  }
}

export default App;
