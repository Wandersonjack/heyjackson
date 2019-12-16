import React, { Component } from "react"
import "./styles/hero.css"
import "../grid-system/custom-layout.css"
import Navbar from "../navbar/navbar"
import AppDetailsPage from "../details/appdetails"
import Display1, { Body1 } from "../typography/typography"

export default class Hero extends Component {
  render() {
    var introText =
      "A Product designer based in Tallinn, Estonia, passionate about solving complex problems and making the user experience delightful."
    return (
      <div id="main-section">
        <Navbar />
        <div className="hero-content">
          <div className="custom-container">
            <div className="c-row">
              <div className="column-6 hero-subtitle">
                <Display1
                  text="Hello, I'm Wanderson Jackson"
                  children="display1"
                />
                <Body1 text={introText} children="subtitle txt-hero" />
              </div>
              <div className="column-6">
                <div className="customVideoPlayer">
                  <div className="centerView">
                    <video autoPlay muted loop id="heroVideo">
                      <source src="" type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
