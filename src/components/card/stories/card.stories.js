import React from "react"
import { storiesOf } from "@storybook/react"
import Card from '../card'
import WorkCard from "../workflowcard"



const stories = storiesOf("V1|Components/Card", module)
stories.add("Card", () =>
    <Card
    imgncolor="app_img laranja"
    apptitle="Spacecube"
    border="border-orange"
    apptext="this is an amazing content about this app right here."
    button="btn-base color-orange"
     />
)

stories.add("WorkCard",() => 
<WorkCard 
    image=""
    title="Explore"
    content="hello  world"

/>

)