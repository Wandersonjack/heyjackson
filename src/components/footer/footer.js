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
      <div className="footer" id="contact-section">
        <div className="content">
          <Heading2
            children="heading2 footer-title"
            text="Let's be friends, contact me here"
          />
          <div className="header-line"></div>
          <div className="footer-container">
            <a
              href="https://www.linkedin.com/in/wandersonjackson/"
              target="_blank"
            >
              <img src={linkedin} />
            </a>
            <a href="https://dribbble.com/wandersonjackson" target="_blank">
              <img src={dribbble} />
            </a>
            <a
              href="https://www.youtube.com/channel/UCl60DuaPJG5rB6WhKOADueA"
              target="_blank"
            >
              <img src={youtube} />
            </a>
            <a
              href="https://www.instagram.com/differentjackson/"
              target="_blank"
            >
              <img src={instagram} />
            </a>
          </div>
          <div className="contact-extra">
            <div className="item tooltip">
              <Heading4 text="Email" children="heading4 branco" />
              <Body1 text="wander8jackson@gmail.com" children="paragraph" />
            </div>
            <div className="item">
              <Heading4 text="Phone" children="heading4 branco" />
              <Body1 text="+372 5322-9945" children="paragraph" />
            </div>
          </div>
    
          <Body1
            children="paragraph scratch"
            text="I designed and coded from scratch. © 2019 "
          />
        </div>
      </div>
    )
  }
}
