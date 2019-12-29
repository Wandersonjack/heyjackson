import React, { Component } from "react"
import "../details/styles/appdetails.css"
import "../../components/grid-system/custom-layout.css"
import { Display2, Body1 } from "../typography/typography"
import AOS from "aos"
import "aos/dist/aos.css"

export default class DataPresentation extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    AOS.init({
      duration: 700,
    })
  }
  render() {
    return (
      <div className="custom-container" data-aos="fade-up" data-aos-duration="500">
        <Display2 text={this.props.title} children="display2" />
        <img src={this.props.dataimg} className="c-data-img"
        />
      </div>
    )
  }
}
