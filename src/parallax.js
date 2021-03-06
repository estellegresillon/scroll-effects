import React, { Component } from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import { Parallax } from 'react-parallax'

import './App.css'

class ParallaxTest extends Component {
  render() {
    return (
        <div>
           <Parallax
            blur={10}
            className="parallax-section"
            bgImage={require('./home-right.jpg')}
            bgImageAlt="the cat"
            strength={1000}
          >
            <ScrollAnimation animateIn="fadeInDown" duration={1}>
              <h1>Parallax</h1>
            </ScrollAnimation>
            <div style={{ height: '200px' }} />
          </Parallax>
        </div>
    )
  }
}

export default ParallaxTest