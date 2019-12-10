import React, { Component } from "react"
import CardVerse from "../components/card/cardverse"
import Card from "../components/card/card"
import { Display2 } from "../components/typography/typography"
import "../pages/styles/page.css"
import bopmockupfull from "../assets/bopmockupfull.png"
import shiftshift from "../assets/shiftshift.png"

export default class Work extends Component {
  render() {
    return (
      <div id="work-section">
        <section className="container">
          <Display2 text="Work" children="display2" />
          <Card
            app_mockup={bopmockupfull}
            style="web_mockup"
            imgncolor="app_img verde"
            apptitle="BitOfProperty"
            border="border-green"
            link="https://www.bitofproperty.com"
            apptext="Is an international real estate investment company, that enables users to invest starting with a little as €50."
            text="View work"
            button="btn-base color-green"
          />
          <CardVerse
            letter="F"
            imgncolor="app_img laranja"
            apptitle="Feelite"
            border="border-orange"
            apptext="is a meditation app that helps you to improve concentration, relax and sleep using science to improve the little things that make your daily life better."
            text="Coming soon..."
            button="btn-base color-orange"
          />
          <Card
            app_mockup={shiftshift}
            style="mobile_mockup"
            imgncolor="app_img azul"
            apptitle="Shiftio"
            border="border-blue"
            apptext="Helping you to find your home sweet home, with no hassle."
            text="Coming soon..."
            button="btn-base color-blue"
          />
        </section>

        
      </div>
    )
  }
}
