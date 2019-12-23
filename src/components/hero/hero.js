import React, { Component } from "react"
import "./styles/hero.css"
import "../grid-system/custom-layout.css"
import 'aos/dist/aos.css';
import AOS from 'aos';
import Navbar from "../navbar/navbar"

import Display1, { Body1 } from "../typography/typography"
import PromoVideo from '../video/video'

export default class Hero extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    AOS.init({
      duration: 1000
    });
  }
  render() {
    var introText =
      "A Senior Product designer based in Tallinn, Estonia, passionate about solving complex problems and making the user experience delightful."
    return (
      <div id="main-section">
        <Navbar />
        <div className="hero-content">
          <div className="custom-container"  data-aos="fade-up">
            <div className="c-row">
              <div className="column-6 hero-subtitle">
                <Display1
                  text="Hello, I'm Wanderson Jackson"
                  children="display1"
                />
                <Body1 text={introText} children="subtitle txt-hero" />
              </div>
              <div className="column-6">
                <PromoVideo />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
