import styled from "@emotion/styled"
import {
  AppBar,
  Box,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core"
import { ReactNode, useState } from "react"
import MenuIcon from "@material-ui/icons/Menu"
import { useStyles } from "./styles"
// import { Link } from 'react-router-dom'
interface NavBarProps {
  children?: ReactNode
}
export function NavBar({ children }: NavBarProps) {
  const classes = useStyles()
  const theme = useTheme()
  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"))
  const [smallMenu, setSmallMenu] = useState(false)

  return (
    <>
      <AppBar position="static" className={classes.title}>
        <Spreader>
          <Box>
            <Typography>BedTime Stories</Typography>
          </Box>
          <Navigation>
            {smallScreen ? (
              <Box>
                <MenuIcon onClick={() => setSmallMenu(!smallMenu)} />
              </Box>
            ) : (
              children
            )}
          </Navigation>
        </Spreader>
      </AppBar>
      {smallMenu ? (
        <Box display="flex" justifyContent="center" py={2}>
          {children}
        </Box>
      ) : null}
    </>
  )
}

const Navigation = styled("nav")({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-end",
  flexGrow: 1,
})

const Spreader = styled("div")({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  flexGrow: 1,
})
