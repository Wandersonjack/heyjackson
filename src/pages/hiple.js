import React, { Component } from "react"
import "../components/details/styles/appdetails.css"
import Display1, { Body1, Display2 } from "../components/typography/typography"
import Button from "../components/button/button"

export default class AppDetailsPage extends Component {
  render() {
    var testText =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non urna gravida id dui consectetur consequat mi, consequat at. Aliquet potenti pellentesque aenean dignissim. Vitae elementum nisi, sit integer congue vitae euismod cras gravida. Duis augue adipiscing est amet, hendrerit."
    return (
      <div className="product-details">
        {/*Component introducao*/}
        <div className="product-intro">
          <div className="custom-container">
            <div className="c-row">
              <div className="column-6">
                <Display1 text="Product name" children="display1" />
                <Body1 text={testText} children="paragraph" />
                <Button text="View live" children="btn-base" />
              </div>
              <div className="column-6"></div>
            </div>
          </div>
        </div>
        {/*Component industry*/}
        <div className="neutral-bck">
          <div className="custom-container">
            <div className="c-row">
              <div className="column-3">
                <Body1 text="Industry" children="paragraph bolder-text" />
                <Body1
                  text="Fintech, Real Estate"
                  children="paragraph info-w"
                />
              </div>
              <div className="column-3">
                <Body1 text="Role" children="paragraph bolder-text" />
                <Body1
                  text="Senior Product Designer"
                  children="paragraph info-w"
                />
              </div>
              <div className="column-3 ">
                <Body1 text="Team" children="paragraph bolder-text" />
                <Body1
                  text="Product engineers, CEO, 
COO, Product Design"
                  children="paragraph info-w"
                />
              </div>
              <div className="column-3">
                <Body1 text="When" children="paragraph bolder-text" />
                <Body1
                  text="December 2018 - Currently"
                  children="paragraph info-w"
                />
              </div>
            </div>
          </div>
        </div>
        {/*Data presentation Component*/}
        <div className="data-section">
          <div className="custom-container">
            <div className="c-row">
              <div className="column-6">
                {/*DATA comes here*/}
                <Display2 text="The challenge" children="display2 darkColor" />
                <Body1 children="paragraph darkColor" text={testText} />
              </div>
              <div className="column-6">{/*DATA comes here*/}</div>
            </div>
          </div>
        </div>
        {/*Data presentation Component*/}
        <div className="data-section dark-bck">
          <div className="custom-container">
            <div className="c-row">
              <div className="column-6">
                {/*DATA comes here*/}
                <Display2 text="The problem" children="display2 whiteColor" />
                <Body1 children="paragraph whiteColor" text={testText} />
              </div>
              <div className="column-6">{/*DATA comes here*/}</div>
            </div>
          </div>
        </div>

        {/*Data presentation Component*/}
        <div className="data-section">
          <div className="custom-container">
            <div className="c-row">
              <div className="column-6">
                {/*DATA comes here*/}
                <Display2 text="Action  " children="display2 darkColor" />
                <Body1 children="paragraph darkColor" text={testText} />
              </div>
              <div className="column-6">{/*DATA comes here*/}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
