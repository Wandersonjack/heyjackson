import React, { Component } from "react"
import Button from "../button/button"
import { Heading2, Heading4, Display2 } from "../typography/typography"
import "../card/styles/card.css"
import "../about/styles/about.css"
import AOS from "aos"
import "aos/dist/aos.css"


export default class About extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    AOS.init({
      duration: 600,
    })
  }
  render() {
    return (
      <div className="container" data-aos="zoom-in-up">
        <Display2 text="About me" children="display2" />
        <div className="cardbase-about gap-top" id="aboutme-section">
          <div className="me-img"></div>
          <div className="about_content">
            <div className="content_case">
              <Heading2 children="display2" text="Wanderson Jackson" />
              <Heading4
                children="heading4"
                text="I'm Wanderson Jackson, Product Designer with a strong focus on user-centered design, to validate and build digital products that users want, with teams of engineers, executives, and marketing teams, to ensure user needs are aligned with business goals."
              />
              <Heading4
                children="heading4"
                text="On free time I enjoy dancing, diving, and hiking. Also, love to inspire people creating content for my Youtube channel."
              />
              <div>
                <a
                  href="https://drive.google.com/file/d/1GN2wSNRfF5ATYLTxftZTv7WOEbkEpi4l/view?usp=sharing"
                  target="_blank"
                >
                  <Button text="Download cv" children="btn-base color-green" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
