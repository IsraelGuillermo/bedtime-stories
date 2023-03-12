import { Home } from "./Home"

/**
 * See Storybook Docs: Writing Stories
 * https://storybook.js.org/docs/basics/writing-stories/
 */

export default {
  title: "Home",
  parameters: {
    layout: "centered",
  },
}

export const Example = () => <Home />
