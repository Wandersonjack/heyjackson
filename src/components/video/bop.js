import React, { Component } from "react"
import "../grid-system/custom-layout.css"
import Display1, { Body1 } from "../typography/typography"

export default class BopPreview extends Component {
  render() {
    return (
      <div className="custom-container">
        <Display1 text="When the visitor become investor" children="display1" />
        <Body1
          text="After the visitor verifies his/her profile, now the user can explore properties, choose an opportunity, invest and start earning."
          children="paragraph column-6"
        />
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
