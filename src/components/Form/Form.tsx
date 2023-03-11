import { Box } from "@material-ui/core"
import { Input } from "../Input"

export function Form() {
  return (
    <Box
      style={{
        width: 400,
        height: 500,
        backgroundColor: "#3f50b5",
        borderRadius: 2,
        display: "flex",
        justifyContent: "center",
      }}
      padding={2}
    >
      <Box
        display="flex"
        flexDirection="column"
        height={"80%"}
        justifyContent="space-between"
      >
        <Input label="Main Character" placeholder="A princess" />
        <Input label="Start of Your Story" placeholder="A princess" />
      </Box>
    </Box>
  )
}
