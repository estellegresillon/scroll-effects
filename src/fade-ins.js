import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'
import Reveal from 'react-reveal/Reveal'
import ScrollableAnchor from 'react-scrollable-anchor'
import ScrollAnimation from 'react-animate-on-scroll'

import './App.css'

class FadeIns extends Component {
  render() {
    return (
      <section className="section-one">
        <Fade left>
          <h5 className="section-title">
            NOUS RÉALISONS DES CRÉATIONS UNIQUES DEPUIS L'ATELIER
          </h5>
        </Fade>

        <Reveal effect="fadeInLeft">
          <h1>React Reveal</h1>
        </Reveal>

        <ScrollableAnchor id={'animateIn'}>
          <ScrollAnimation animateIn="fadeIn" delay={300} duration={1}>
            <h1>Animate In</h1>
          </ScrollAnimation>
        </ScrollableAnchor>

        <ScrollAnimation animateIn="fadeInLeft" duration={1}>
          <h1>Fade in left</h1>
        </ScrollAnimation>
      </section>
    )
  }
}

export default FadeIns