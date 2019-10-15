import React from "react"
import { storiesOf } from "@storybook/react"
import Display1, {
  Display2,
  Display3,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Body1,
} from "../typography"

const stories = storiesOf("V1|Components/Typography", module)
stories.add("Display 1", () => <Display1 text="Display 1" children="display1"/>)

stories.add("Display 2", () => <Display2 text="Display 2" children="display2" />)

stories.add("Display 3", () => <Display3 text="Display 3" children="display3"/>)

stories.add("Heading 1", () => <Heading1 text="Heading 1" children="heading1"/>)
stories.add("Heading 2", () => <Heading2 text="Heading 2" children="heading2" />)
stories.add("Heading 3", () => <Heading3 text="Heading 3" children="heading3"/>)
stories.add("Heading 4", () => <Heading4 text="Heading 4" children="heading4"/>)
stories.add("Heading 5", () => <Heading5 text="Heading 5" children="heading5"/>)
stories.add("Body1", () => <Body1 text="This is a body text paragraph" />)
