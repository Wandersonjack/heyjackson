import React, { Component } from "react"
import "../card/styles/card.css"
import Button from "../button/button"
import { Heading2, Heading4, Heading1 } from "../typography/typography"
import Link from "gatsby-link"

export default class Card extends Component {
  render() {
    return (
      <div className="cardbase">
        <div className="app_content">
          <div className="content_case">
            <Heading2 children="display2" text={this.props.apptitle} />
            <div className={this.props.border}></div>
            <Heading4 children="heading4" text={this.props.apptext} />
            <div>
              <Link to={this.props.to}>
                <Button text={this.props.text} children={this.props.button} />
              </Link>
            </div>
          </div>
        </div>
        <div className={this.props.imgncolor}>
          <img src={this.props.app_mockup} className={this.props.style} />
        </div>
      </div>
    )
  }
}
