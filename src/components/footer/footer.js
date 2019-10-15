import React, { Component } from "react"
import dribbble from "../../images/dribbble.png"
import instagram from "../../images/instagram.png"
import linkedin from "../../images/linkedin.png"
import youtube from "../../images/youtube.png"
import "./styles/footer.css"
import Heading1, { Heading2 } from "../typography/typography"
export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="content">
        <Heading2 children="heading2 footer-title" text="Come on, let's chat" />
        <div className="header-line"></div>
        <div className="footer-container">
          <a href="">
            <img src={linkedin} />
          </a>
          <a>
            <img src={dribbble} />
          </a>
          <a>
            <img src={youtube} />
          </a>
          <a>
            <img src={instagram} />
          </a>
        </div>
        </div>
      </div>
    )
  }
}
