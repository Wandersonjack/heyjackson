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
            app_mockup={'https://res.cloudinary.com/wander8jackson/image/upload/c_scale,w_1730/v1576076810/bopmockupfull_dahtbx.png'}
            style="web_mockup"
            imgncolor="app_img verde"
            apptitle="BitOfProperty"
            border="border-green"
            link="https://www.bitofproperty.com"
            apptext="Is an international real estate investment company, that enables users to invest starting with a little as €50."
            text="View work"
            button="btn-base color-green"
          />
          <div className="space-top"></div>
          <Card 
          app_mockup={'https://res.cloudinary.com/wander8jackson/image/upload/v1576153753/Untitled_r0sedf.gif'}
          style="web_mockup"
            imgncolor="app_img bck-green-accent"
            apptitle="Hiple"
            border="border-green-accent"
            link="https://www.figma.com/file/FV85aBuTX2IdXemk7AWeEO6j/Hiple-Sistema-Gest%C3%A3o-Pauta-Demandas?node-id=13%3A2"
            apptext="Project management app that enables you to manage team, projects and task all in on place."
            text="View work"
            button="btn-base verde-accent"
          />
          <div className="space-top"></div>
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
