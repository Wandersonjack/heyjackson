import SEO from "../components/seo"
import Hero from "../components/hero/hero"
import Footer from "../components/footer/footer"
import React, { Component } from "react"
import Workflow from "../components/workflow/workflow"
import { Element } from "react-scroll"

import "../pages/styles/page.css"
import Work from "./worksection"
import { element } from "prop-types"
import About from "../components/about/about"

export default class IndexPage extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <Hero />
          <Work />
          <About />
          <Workflow />
          <Footer />
          <SEO title="Jackson" />
        </div>
      </React.Fragment>
    )
  }
}
