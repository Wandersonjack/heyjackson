import React, { Component } from "react"
import "../grid-system/custom-layout.css"
import Display1, { Body1 } from "../typography/typography"
import AOS from 'aos'
import 'aos/dist/aos.css'

export default class FigmaPreview extends Component {
    constructor(props){
        super(props);
      }
      componentDidMount(){
        AOS.init({
          duration:1200
        })
      }
    render() {
    return (
      <div className="custom-container" data-aos="fade-up">
        <Display1 text="When the visitor become investor" children="display2" />
        <Body1
          text="Using atomic designprinciples, I created elements that would be repeatable across the app in order to create consistency and user-recognition of content types."
          children="paragraph column-6 gap-bottom"
        />
        <iframe
          frameborder="0"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FS7kWNbmws6Ri6Oq3jaGRKP%2Fbitofproperty-app%3Fnode-id%3D1207%253A0"
          allowfullscreen
          className="iframe-custom"
        ></iframe>
      </div>
    )
  }
}
