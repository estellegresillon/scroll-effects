import React, { Component } from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import { Parallax } from 'react-parallax'

import './App.css'

class ParallaxTestBg extends Component {
  render() {
    return (
        <div>
           <Parallax
            blur={10}
            className="parallax-section"
            bgImage={require('./home-left.jpg')}
            bgImageAlt="the cat"
            strength={1000}
          >
            <ScrollAnimation animateIn="fadeInDown" duration={1}>
              <h1>Background Parallax</h1>
            </ScrollAnimation>
            <div style={{ height: '200px' }} />
          </Parallax>
        </div>
    )
  }
}

export default ParallaxTestBg