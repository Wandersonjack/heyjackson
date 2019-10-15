import React from "react"
import { storiesOf } from "@storybook/react"
import About from '../about'



const stories = storiesOf("V1|Components/About", module)
stories.add("About",() =>
   <About 
   imgncolor="verde app_img"
   button="btn-base laranja"
   aboutme="Hi my name is Jack, Product & Interaction Design specialist, with a background in User  Research, and Interface Design."
   myname="Wanderson Jackson"
   />
)