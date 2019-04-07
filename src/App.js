import React, { Component } from 'react'

import imgLeft from './home-left.jpg'
import imgRight from './home-right.jpg'
import FadeIns from './fade-ins.js'
import Parallax from './parallax.js'
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <div className="bg-left">
            <div className="color-left" />
            <img src={imgLeft} className="img-left" alt="logo" />
          </div>
          <div className="bg-right">
            <div className="color-right" />
            <img src={imgRight} className="img-right" alt="logo" />
          </div>
        </div>

        <FadeIns />
        <Parallax />
      </div>
    )
  }
}

export default App;