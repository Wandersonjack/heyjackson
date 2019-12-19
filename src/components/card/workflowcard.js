import React, { Component } from "react"
import { Heading1 } from "../typography/typography"
import "../card/styles/workflow.css"

export default class WorkCard extends Component {
  render() {
    return (
      <div className="work-card">
        <div className="content">
          <div className="image">
            <image src={this.props.image} />
          </div>
          <div>
            <Heading1 children="heading2" text={this.props.title} />
            <ul>
              <li>{this.props.item1}</li>
              <li>{this.props.item2}</li>
              <li>{this.props.item3}</li>
              <li>{this.props.item4}</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
