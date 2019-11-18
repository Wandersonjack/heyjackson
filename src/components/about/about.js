import React, { Component } from "react"
import Button from "../button/button"
import { Heading2, Heading4 } from "../typography/typography"
import "../card/styles/card.css"
import "../about/styles/about.css"

export default class About extends Component {
  render() {
    return (
      <div className="cardbase-about gap-top">
        <div className={this.props.imgncolor}>
          <img
            src={
              "https://res.cloudinary.com/wander8jackson/image/upload/c_scale,w_789/v1572890094/heyjackson_r1vo4c.png"
            }
            className="me-img"
          />
        </div>
        <div className="about_content">
          <div className="content_case">
            <Heading2 children="display2" text={this.props.myname} />
            <Heading4 children="heading4" text={this.props.aboutme} />
            <Heading4 children="heading4" text={this.props.freetime} />
            <div>
              <a href="https://drive.google.com/file/d/1fh9lB-uy08ApMePeDSc5Bq08teY5Ojxm/view?usp=sharing" target="_blank">
                <Button text="Download cv" children={this.props.button} />
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
