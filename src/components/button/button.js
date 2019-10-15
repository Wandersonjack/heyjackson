import React, { Component } from "react"
import '../button/styles/button.css'

export default class Button extends Component {
  render() {
    return (
      <div>
        <button className={this.props.children}>
          {this.props.text}
          <span className="span_icon"></span>
        </button>
      </div>
    )
  }
}
