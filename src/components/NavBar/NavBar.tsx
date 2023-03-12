import { Box, Button, Typography } from '@material-ui/core'

export function NavBar() {
  return (
    <Box
      display="flex"
      flexDirection="row"
      padding={1}
      justifyContent="space-between"
    >
      <Box>
        <Typography variant="h6">BedTime Stories</Typography>
      </Box>
      <Box>
        <Button>Home</Button>
        <Button>About</Button>
      </Box>
    </Box>
  )
}
