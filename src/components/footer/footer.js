import React, { Component } from "react"
import dribbble from "../../images/dribbble.png"
import instagram from "../../images/instagram.png"
import linkedin from "../../images/linkedin.png"
import youtube from "../../images/youtube.png"
import "./styles/footer.css"
import "../grid-system/custom-layout.css"
import Heading1, {
  Heading2,
  Heading4,
  Body1,
  Display2,
} from "../typography/typography"
export default class Footer extends Component {
  render() {
    return (
      <div className="footer" id="contact-section">
        <div className="custom-container">
          <Display2 text="Contact" children="display2 whiteColor"/>
          <div className="c-row">
            <div className="column-6">
              <div className="contact-link">
                <img src={linkedin} />
                <a href="https://www.linkedin.com/in/wandersonjackson/" target="_blank">
                  Linkedin
                </a>
              </div>
              <div className="contact-link">
                <img src={dribbble} />
                <a href="https://dribbble.com/wandersonjackson" target="_blank">
                  Dribbble
                </a>
              </div>
              <div className="contact-link">
                <img src={youtube} />
                <a href="https://www.youtube.com/channel/UCl60DuaPJG5rB6WhKOADueA" target="_blank">
                  Youtube
                </a>
              </div>
              <div className="contact-link">
                <img src={instagram} />
                <a href="https://dribbble.com/wandersonjackson" target="_blank">
                 Instagram
                </a>
              </div>
            </div>
            <div className="column-6"></div>
          </div>
        </div>
      </div>
    )
  }
}
