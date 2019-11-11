import React, { Component } from "react"
import WorkCard from "../card/workflowcard"
import "../workflow/styles/workflow.css"
import { Display2 } from "../typography/typography"

export default class WorkFlow extends Component {
  render() {
    return (
      <div className="work-container">
        <Display2 text="My workflow" children="display2 sized-box-left" />
        <div className="work-section">
          <WorkCard
            image=""
            title="01 Explore"
            item1="Stakeholder interview"
            item2="User research"
            item3="Competitor analysis"
          />
          <WorkCard
            image=""
            title="02 Frame"
            item1="- User journey"
            item2="- Problem and solution valuation"
            item3="- User interview"
            item4="- Build persona"
          />
          <WorkCard
            image=""
            title=" 03 Ideate"
            item1="- Design studio"
            item2="- Final wireframe"
            item3="- User flow"
          />
          <WorkCard
            image=""
            title="04 Prototype"
            item1="- Design system"
            item2="- UI Design"
            item3="- Interactive  prototype"
            item4="- UI Updates"
          />
          <WorkCard
            image=""
            title="05 Test"
            item1="- Usability test"
            item2="- Data analysis"
            item3="- Usability report"
          />
          <WorkCard
            image=""
            title="06 Deploy"
            item1="- Publish validated components"
            item2="- Assets and inspect"
            item3="- UI Review & Report"
            item4="- Documentation of Taskflow"
            item5="- Design system documentation"
          />
        </div>
      </div>
    )
  }
}
