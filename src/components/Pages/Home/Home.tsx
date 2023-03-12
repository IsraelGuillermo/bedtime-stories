import { Box, Button } from '@material-ui/core'
import { NavBar } from '../../NavBar'

export function Home() {
  return (
    <Box
      style={{
        width: '100vw',
        height: '100vh',
        backgroundColor: 'midnightblue',
      }}
    >
      <NavBar>
        <Button>Logout</Button>
      </NavBar>
      <Box
        style={{
          padding: 16,
          // border: '1px solid red',
        }}
      ></Box>
    </Box>
  )
}
