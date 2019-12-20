import React, { Component } from "react"
import '../grid-system/custom-layout.css'

export default class BopPreview extends Component {
  render() {
    return (
      <div className="custom-container">
        <iframe
          src="https://player.vimeo.com/video/380622015"
          frameborder="0"
          allow="autoplay; fullscreen"
          className="iframe-custom"
          allowfullscreen
        ></iframe>
        
      </div>
    )
  }
}
