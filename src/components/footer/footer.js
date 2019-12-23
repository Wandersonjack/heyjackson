import React, { Component } from "react"
import dribbble from "../../images/dribbble.png"
import instagram from "../../images/instagram.png"
import linkedin from "../../images/linkedin.png"
import youtube from "../../images/youtube.png"
import smartphone from '../../images/contact/smartphone.svg'
import envelope from '../../images/contact/envelope.svg'
import AOS from "aos"
import "aos/dist/aos.css"

import "./styles/footer.css"
import "../grid-system/custom-layout.css"
import Heading1, {
  Heading2,
  Heading4,
  Body1,
  Display2,
} from "../typography/typography"
export default class Footer extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    AOS.init({
      duration:1000
    });
  }
  render() {
    return (
      <div className="footer" id="contact-section">
        <div className="custom-container">
          <Display2 text="Contact" children="display2 whiteColor"/>
          <div className="c-row">
            <div className="column-6">
              <div className="contact-link" data-aos="fade-right" duration="700">
                <img src={linkedin} />
                <a href="https://www.linkedin.com/in/wandersonjackson/" target="_blank">
                  Linkedin
                </a>
              </div>
              <div className="contact-link" data-aos="fade-right" duration="900">
                <img src={dribbble} />
                <a href="https://dribbble.com/wandersonjackson" target="_blank">
                  Dribbble
                </a>
              </div>
              <div className="contact-link" data-aos="fade-right" duration="1100">
                <img src={youtube} />
                <a href="https://www.youtube.com/channel/UCl60DuaPJG5rB6WhKOADueA" target="_blank">
                  Youtube
                </a>
              </div>
              <div className="contact-link" data-aos="fade-right" duration="1300">
                <img src={instagram} />
                <a href="https://dribbble.com/wandersonjackson" target="_blank">
                 Instagram
                </a>
              </div>
            </div>
            <div className="column-6" data-aos="fade-left">
              <div className="c-row vertical-col">
                <div className="item">
                  <img src={smartphone} />
                  <Body1 text="+372 5322-9945" children="button-text whiteColor" />
                </div>
                <div className="item divider-top16">
                  <img src={envelope} />
                  <Body1 text="wander8jackson@gmail.com" children="button-text whiteColor" />
                </div>
                <div>
                  <Body1 text="I designed and coded from scratch © 2019" children="button-text footerGrey" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
