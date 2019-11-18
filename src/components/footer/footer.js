import React, { Component } from "react"
import dribbble from "../../images/dribbble.png"
import instagram from "../../images/instagram.png"
import linkedin from "../../images/linkedin.png"
import youtube from "../../images/youtube.png"
import "./styles/footer.css"
import Heading1, { Heading2, Heading4, Body1 } from "../typography/typography"
export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="content">
          <Heading2 children="heading2 footer-title" text="Come on, let's chat" />
          <div className="header-line"></div>
          <div className="footer-container">
            <a href="https://www.linkedin.com/in/wandersonjackson/">
              <img src={linkedin} />
            </a>
            <a href="https://dribbble.com/wandersonjackson">
              <img src={dribbble} />
            </a>
            <a href="https://www.youtube.com/channel/UCl60DuaPJG5rB6WhKOADueA">
              <img src={youtube} />
            </a>
            <a href="https://www.instagram.com/differentjackson/">
              <img src={instagram} />
            </a>
          </div>
         <Body1 children="paragraph scratch"  text="I designed and coded from scratch. © 2019 " />
        </div>
      </div>
    )
  }
}
