import styled from '@emotion/styled'
import { AppBar, Box, Typography } from '@mui/material'
import { ReactNode } from 'react'
import { useStyles } from './styles'
// import { Link } from 'react-router-dom'

interface NavBarProps {
  children?: ReactNode
}

export function NavBar({ children }: NavBarProps) {
  const classes = useStyles()
  return (
    <AppBar position="static" className={classes.title}>
      <Spreader>
        <Box>
          <Typography>BedTime Stories</Typography>
        </Box>
        <Navigation>{children}</Navigation>
      </Spreader>
    </AppBar>
  )
}

const Navigation = styled('nav')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-end',
  flexGrow: 1,
})

const Spreader = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexGrow: 1,
})
