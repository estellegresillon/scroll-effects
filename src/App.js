import React, { Component } from 'react'

import imgLeft from './home-left.jpg'
import imgRight from './home-right.jpg'
import FadeIns from './fade-ins.js'
import ParallaxTest from './parallax.js'
import ParallaxTestBg from './parallax-bg.js'
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
        <ParallaxTest />
        <section className="section-two">
          <p>Belle Epoque est une agence digitale basée à Paris.</p>
          <p>Nous vous accompagnons dans toutes les étapes de la réalisation de votre projet digital : </p>
          <p>stratégie, design, développement, communication et référencement.</p>
        </section>
        <ParallaxTestBg />
      </div>
    )
  }
}

export default App;