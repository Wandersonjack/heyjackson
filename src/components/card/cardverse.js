import React, { Component } from "react"
import "../card/styles/card.css"
import Button from "../button/button"
import { Heading2, Heading4 } from "../typography/typography"

export default class CardVerse extends Component {
  render() {
    return (
      <div className="cardbase">
        <div className={this.props.imgncolor}></div>
        <div className="app_content">
          <div className="content_case">
            <Heading2 children="display2" text={this.props.apptitle} />
            <div className={this.props.border}></div>
            <Heading4 children="heading4" text={this.props.apptext} />
            <div>
            <a href={this.props.link} target="popup">
                {" "}
                <Button text={this.props.text}children={this.props.button} />
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
