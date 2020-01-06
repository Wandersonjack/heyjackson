import React, { Component } from "react"
import Card from "../components/card/card"
import { Display2 } from "../components/typography/typography"
import "../pages/styles/page.css"
import shiftshift from "../assets/shiftshift.png"
import AOS from 'aos';
import 'aos/dist/aos.css';


export default class Work extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    AOS.init({
      duration:1000
    });
  }
  render() {
    return (
      <div id="work-section">
        <section className="container">
       
          <Display2 text="Work" children="display2" data-aos="zoom-in-up"/>
          <Card
            app_mockup={
              "https://res.cloudinary.com/wander8jackson/image/upload/c_scale,w_1200/v1576747023/UI's%20bitofproperty/Dashboard.png"
            }
            style="web_mockup"
            imgncolor="app_img dark"
            apptitle="BitOfProperty"
            border="border-standard"
            to="/bitofproperty"
            apptext="Is an international real estate investment company, that enables users to invest starting with a little as 50 euro."
            text="View work"
            button="btn-base"
          />
          <div className="space-top"></div>
          <Card
            app_mockup={
              "https://res.cloudinary.com/wander8jackson/image/upload/v1576153753/Untitled_r0sedf.gif"
            }
            style="web_mockup"
            imgncolor="app_img dark"
            apptitle="Hiple"
            border="border-standard"
            to="/"
            apptext="Project management app that enables you to manage team, projects and task all in on place."
            text="View work"
            button="btn-base unactive-btn"
          />
          <div className="space-top"></div>
          <Card
            app_mockup={'https://res.cloudinary.com/wander8jackson/image/upload/v1577619296/Home_hbesd6.png'}
            style="mobile_mockup"
            imgncolor="app_img dark"
            apptitle="Pagus"
            border="border-standard"
            apptext="Helping you to find your home sweet home, with no hassle."
            text="View work"
            button="btn-base unactive-btn"
          />
        </section>

       
      </div>
    )
  }
}
