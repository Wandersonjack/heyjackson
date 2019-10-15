import React from "react"
import { storiesOf } from "@storybook/react"
import Navbar from "../navbar"


const stories = storiesOf("V1|Components/Navbar", module)
stories.add("Navbar", () => (
    <Navbar />
))
