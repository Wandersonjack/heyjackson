import React, { Component } from "react"
import "../details/styles/appdetails.css"
import { Display2, Body1 } from "../typography/typography"


export default class ContentItem extends Component {
  render() {
    return (
      <div className={this.props.contentlayout}>
        <div className="custom-container">
          <div className="c-row">
            <div className="column-4">
              <Display2 text={this.props.title} children="display2" />
              <Body1 children="paragraph darkColor" text={this.props.subject} />
              <Display2 text={this.props.titleaction} children="display2" />
              <Body1
                children="paragraph darkColor"
                text={this.props.subjectaction}
              />
            </div>
            <div className="column-8">
              <img
                src={this.props.supportimg}
                className="support-image"
                alt="this is supportive image"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export class ContentView extends Component {
  render() {
    return (
      <div className={this.props.contentlayout}>
        <div className="custom-container">
          <div className="content-view">
            <div className="c-row">
              <div className="column-6">
                <Display2 text={this.props.title} children="display2" />
                <img
                  src={this.props.primaryimg}
                  className="support-image"
                  alt="this is supportive image"
                />
              </div>
              <div className="column-6 top">
                <Display2 text={this.props.titletext} children="display2" />
                <Body1
                  children="paragraph darkColor"
                  text={this.props.subjecttext}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export class GeneralView extends Component {
  render() {
    return (
      <div className={this.props.contentlayout}>
        <div className="custom-container">
          <div className="c-row">
            <div className="column-6">
              <Display2 text={this.props.title} children="display2" />
              <Body1 children="paragraph darkColor" text={this.props.subject} />
            </div>
            <div className="column-6">
              <img
                src={this.props.firstimg}
                className="support-image"
                alt="this is supportive image"
              />
              <img
                src={this.props.secondimg}
                className="support-image"
                alt="this is supportive image"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export class ProductPreview extends Component {
  render() {
    return (
      <div>
        <div className="preview-frame"></div>
      </div>
    )
  }
}