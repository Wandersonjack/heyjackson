import React, { Component } from "react"
import Button from "../button/button"
import { Heading2, Heading4 } from "../typography/typography"
import "../card/styles/card.css"
import "../about/styles/about.css"
import jackson from '../../images/jackson.jpg'

export default class About extends Component {
  render() {
    return (
      <div className="cardbase-about gap-top">
        <div className={this.props.imgncolor}>
          <img src={jackson} className="me-img"/>
        </div>
        <div className="about_content">
          <div className="content_case">
            <Heading2 children="display2" text={this.props.myname} />
            <Heading4 children="heading4" text={this.props.aboutme} />
            <Heading4 children="heading4" text={this.props.freetime} />
            <div>
              <Button text="Download cv" children={this.props.button} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
