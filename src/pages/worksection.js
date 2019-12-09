import React, { Component } from "react"
import CardVerse from "../components/card/cardverse"
import Card from "../components/card/card"
import About from "../components/about/about"
import { Display2 } from "../components/typography/typography"
import "../pages/styles/page.css"
import shift from "../assets/shift.png"
import bop from "../assets/bop.png"

export default class Work extends Component {
  render() {
    return (
      <div id="work-section">
        <section className="container">
          <Display2 text="Work" children="display2" />
          <Card
            letter="B"
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
            letter="S"
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
