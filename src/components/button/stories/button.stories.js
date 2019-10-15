import React from "react"
import { storiesOf } from "@storybook/react"
import Button from "../button"


const stories = storiesOf("V1|Components/Buttons", module)
stories.add("Button",() =>
    <Button text="View case"
    children="btn-base color-blue"
    />
)