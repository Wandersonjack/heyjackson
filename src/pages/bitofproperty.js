import React, { Component } from "react"
import Footer from "../components/footer/footer"
import "../components/details/styles/appdetails.css"
import Display1, { Body1, Display2 } from "../components/typography/typography"
import Button from "../components/button/button"
import Link from "gatsby-link"
import back from "../assets/icons/back.svg"
import ContentItem, {
  ContentView,
  GeneralView,
  ProductPreview,
} from "../components/details/item"
import BopPreview from "../components/video/bop"
import AOS from "aos"
import "aos/dist/aos.css"

export default class AppDetailsPage extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    AOS.init({
      duration: 600,
    })
  }
  render() {
    {
      /*IMAGES*/
    }
    var propertypimg =
      "https://res.cloudinary.com/wander8jackson/image/upload/c_scale,w_1200/v1576766834/UI's%20bitofproperty/apartment-architecture-buildings-1278588.jpg"
    var bopjapan =
      "https://res.cloudinary.com/wander8jackson/image/upload/v1576696872/IMG_8098_fxqxfo.jpg"
    var teamphoto =
      "https://res.cloudinary.com/wander8jackson/image/upload/v1576703750/IMG_1613_cnne5i.jpg"
    var competitorimg =
      "https://res.cloudinary.com/wander8jackson/image/upload/v1576704768/Product_Design_documentation_qmnggz.jpg"
    var userinterviewimg =
      "https://res.cloudinary.com/wander8jackson/image/upload/c_scale,w_1216/v1576710143/IMG_9764_in2uyi.jpg"
    var studioimg =
      "https://res.cloudinary.com/wander8jackson/image/upload/v1576711764/IMG_3115_uoybsp.jpg"

    var personaum =
      "https://res.cloudinary.com/wander8jackson/image/upload/v1576738481/details_o7gtcm.png"
    var personadois =
      "https://res.cloudinary.com/wander8jackson/image/upload/v1576738482/details_2_tqpltd.png"

    var signupimg =
      "https://res.cloudinary.com/wander8jackson/image/upload/v1576745430/UI%27s%20bitofproperty/Signup.png"
    var loginimg =
      "https://res.cloudinary.com/wander8jackson/image/upload/v1576745424/UI%27s%20bitofproperty/Login.png"
    var propertypage =
      "https://res.cloudinary.com/wander8jackson/image/upload/v1576743753/UI%27s%20bitofproperty/Properties_e9hzxu.png"
    var dashboardimg =
      "https://res.cloudinary.com/wander8jackson/image/upload/v1576747023/UI%27s%20bitofproperty/Dashboard.png"

    var video =
      "https://res.cloudinary.com/wander8jackson/video/upload/v1576763814/UI%27s%20bitofproperty/case-video-bop.mov"

    var previewimg =
      "https://res.cloudinary.com/wander8jackson/image/upload/v1576761990/UI%27s%20bitofproperty/introcase.png"

    {
      /*Temporary approach for loading local string instead of json file static data*/
    }
    var title = "BitOfProperty"
    var description =
      "BitOfProperty is a blockchain-based real estate crowdfunding platform that lets you invest in international rental properties starting with 50 EUR."
    var role = "Senior Product Designer"
    var industry = "Fintech, Real Estate"
    var team = "Product engineers, CEO, COO, Product Design"
    var when = "December 2018 - Currently"
    var problem =
      "Real estate is a capital intensive asset class meaning that you need a lot of money to invest. Time-consuming, as you need to do research and manage the property. It's considered an illiquid asset class, when compared with stocks, bonds, crypto and etc."
    var challenge =
      "'When building out the platform, BitOfProperty did not put much effort into UI/UX. We outsourced the service, which left us in a difficult position, as we were unable to respond to our client's problems and needs. Platform design and the experience that users have are crucial for the investment application, as we are dealing with people’s money. Thus, it was one of the areas that were lacking to build trust in our service'. Karl Vaan - CEO."
    var timeforaction =
      "Before designing the interface, it's important to understand why any changes needed, the goals of the company and the people using the app."
    var stakeholderinterview =
      "The interview to understand the challenges they were facing during the development of the platform, KPI's, goals of the company.  Besides, talked with developers to understand the technologies to understand the possible limitations."

    var competitoranalysis =
      "The analysis focused on investigating how competitors designed their solutions for users. Through this process analyzed from the basic to the core features, strengths and weakness. "
    var userinterview =
      "The user interview aimed to get current users to feedback about the product of the current state at the moment. The first user interview was in Estonia and remote with people from users from Finland, Italy, and the Philippine. The outcome from the interview was the possibility to build user personas, understand more in-depth the pain points."
    var studio =
      "The ideation happens after selecting the prioritized task from the backlog. To bring the ideas into reality, I moderate a Design studio. The ceremony takes up to one hour, and brings together engineers, designers, and business people, to sketch ideas related to the problem. This approach helps me as a designer to get insights from different people and areas."
    return (
      <div className="product-details">
        {/*Component introducao*/}
        <div className="product-intro">
          <div className="custom-container">
            <Link to="/">
              <img src={back} className="back-button" />
            </Link>
            <div className="c-row">
              <div className="column-6" data-aos="fade-right">
                {/*App introduction content*/}
                <Display1 text={title} children="display1" />
                <Body1 text={description} children="paragraph" />
                <a href="https://bitofproperty.com" target="_blank">
                  <Button text="View live" children="btn-base" />
                </a>
              </div>
              <div className="column-6" data-aos="fade-left">
                <img src={previewimg} className="preview-img intro-top" />
              </div>
            </div>
          </div>
        </div>
        {/*Component industry*/}
        <div className="neutral-bck">
          <div className="custom-container">
            <div className="c-row">
              <div className="column-3">
                <Body1 text="Industry" children="paragraph bolder-text" />
                <Body1 text={industry} children="paragraph info-w" />
              </div>
              <div className="column-3">
                <Body1 text="Role" children="paragraph bolder-text" />
                <Body1 text={role} children="paragraph info-w" />
              </div>
              <div className="column-3 ">
                <Body1 text="Team" children="paragraph bolder-text" />
                <Body1 text={team} children="paragraph info-w" />
              </div>
              <div className="column-3">
                <Body1 text="When" children="paragraph bolder-text" />
                <Body1 text={when} children="paragraph info-w" />
              </div>
            </div>
          </div>
        </div>
        <ContentItem
          supportimg={propertypimg}
          contentlayout="data-section white-bck"
          title="The problem"
          subject={problem}
        />
        {/*THE CHALLENGE*/}
        <ContentItem
          supportimg={bopjapan}
          contentlayout="data-section dark-bck"
          title="The team challenge"
          subject={challenge}
        />
        {/*STAKEHOLDER INVERTERVIEW*/}
        <ContentItem
          supportimg={teamphoto}
          contentlayout="data-section neutral-bck"
          title="Understanding the context"
          subject={timeforaction}
          titleaction="Stakeholder Interview"
          subjectaction={stakeholderinterview}
        />
        {/*COMPETITOR ANALYSIS*/}
        <ContentItem
          supportimg={competitorimg}
          contentlayout="data-section white-bck"
          titleaction="Competitor analysis"
          subjectaction={competitoranalysis}
        />
        {/*USER INTERVIEW*/}
        <ContentItem
          supportimg={userinterviewimg}
          contentlayout="data-section neutral-bck"
          title="Qualitative Interviews"
          subject={userinterview}
          titleaction="10"
          subjectaction="Quantity of people"
        />
        {/*PERSONAS*/}
        <GeneralView
          title="User personas"
          subject="After qualitative interviews and usability tests resulted in two personas. The personas are the main reference we have about humans using the product."
          firstimg={personaum}
          secondimg={personadois}
        />
        {/*DESIGN STUDIO*/}
        <ContentItem
          supportimg={studioimg}
          contentlayout="data-section dark-bck"
          titleaction="Collaborative ideation"
          subjectaction={studio}
        />
        {/*OUTCOME */}
        <div className="outcome">
          <div className="custom-container">
            <Display1 text="The product outcome" children="display1" />
            <Body1
              children="paragraph"
              text="Note: for NDA reasons, I can't display the case studies in depth because of the sensitive data."
            />
          </div>
        </div>
        <ContentItem
          contentlayout="data-section white-bck"
          supportimg={signupimg}
          title="Sign up and Login"
          subject="The sign up is a very common part of the process of converting visitors into users. This interface designed based on the heuristics analysis and usability tests. "
          titleaction="+ 17%"
          subjectaction="Converstion rate"
        />
        <ContentItem
          supportimg={propertypage}
          contentlayout="data-section dark-bck"
          titleaction="Properties page"
          subjectaction="The properties page is one of the most important part of the platform. This page enables visitors and users to have an overview of available investment opportunities."
        />
        <ContentItem
          supportimg={dashboardimg}
          contentlayout="data-section neutral-bck"
          titleaction="Dashboard"
          subjectaction="The dashboard designed to provide the user with crucial information at a glance. Some of the visual data are total investment, rental income, and portfolio.
          My orders give the users the overview of buy and sell shares order list. The upcoming features are charts about investment performance and allocation."
        />
        <BopPreview />
        <div className="custom-container gap-bottom">
          <div className="column-8" data-aos="fade-right">
            {" "}
            <Display2 text="The lessons learned" children="display2" />
            <Body1
              children="paragraph bolder-text"
              text="1. Simplicity is strength"
            />
            <Body1
              children="paragraph"
              text="As designers, we are tempted to try to change everything at once and want to improve, but keeping things simple is also a good approach. During some usability tests, the users were getting confused with some words like IRR and other technical words. Write simple, design simple. "
            />
            <Body1
              children="paragraph bolder-text"
              text="2. If everything is important, nothing is important. Prioritize!"
            />
            <Body1
              children="paragraph"
              text="It's important to breakdown complex tasks into smaller pieces, discuss and keep track of the handoff will help to ensure that the priority task is being implemented. Prioritize what brings real value to the users."
            />
            <Body1
              children="paragraph bolder-text"
              text="3. Don't over-document"
            />
            <Body1
              children="paragraph"
              text="Working on taskflow, user flow, user journey, and exceptions are part of the work, but it's not necessary to write a huge amount of content for the documentation, make it simpler for the developers and team to read."
            />
          </div>
          <Link to="/">
            <img src={back} className="back-button" />
          </Link>
        </div>

        <Footer />
      </div>
    )
  }
}
