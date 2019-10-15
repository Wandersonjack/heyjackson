import React, { Component } from "react"
import CardVerse from "../components/card/cardverse"
import Card from "../components/card/card"
import About from "../components/about/about"
import { Display2 } from "../components/typography/typography"
import '../pages/styles/page.css'

export default class Work extends Component {
  render() {
    return (
      <div>
        <section className="container">
          <Display2 text="Work" children="display2" />
          <Card
            imgncolor="app_img verde"
            apptitle="BitOfProperty"
            border="border-green"
            link="https://www.bitofproperty.com"
            apptext="Is an international real estate invesment company, that enables users to invest starting with a little as €50."
            text="View work"
            button="btn-base color-green"
          />
          <CardVerse
            imgncolor="app_img laranja"
            apptitle="Feelite"
            border="border-orange"
            apptext="is a meditation app that helps you to improve concentration, relax and sleep using science to improve the little things that make your daily life better."
            text="Coming soon..."
            button="btn-base color-orange"
          />
          <Card
            imgncolor="app_img azul"
            apptitle="Adopet"
            border="border-blue"
            apptext="Is a platform that enables you to adopt pet of your wish, to search and find your loved pet."
            text="Coming soon..."
            button="btn-base color-blue"
          />
        </section>
        <section className="container gap-top">
          <Display2 text="About me" children="display2" />
          <About
            myname="Wanderson Jackson"
            border="border-green"
            aboutme="I'm Wanderson Jackson, Product Designer with strong focus on user-centered design, to validate and build digital products that users want, with teams of engineers, executives, and marketing teams, to ensure user needs are aligned with business goals."
            freetime="On free time I enjoy dancing, diving and hiking.
            Also love to inspire people creating content for my Youtube channel."
            button="btn-base verde"
          />
        </section>
      </div>
    )
  }
}
