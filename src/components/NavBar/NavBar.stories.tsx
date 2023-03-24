import { Button } from "@material-ui/core"
import { NavBar } from "./NavBar"

/**
 * See Storybook Docs: Writing Stories
 * https://storybook.js.org/docs/basics/writing-stories/
 */

export default {
  title: "NavBar",
  parameters: {
    layout: "centered",
  },
}

export const Example = () => (
  <div style={{ width: "900px" }}>
    <NavBar>
      <Button>About</Button>
    </NavBar>
  </div>
)
