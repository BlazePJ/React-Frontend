import React from 'react'
import { Typography } from '@mui/material'

function Header() {
  return (
    <Typography variant="h2" component="h2" sx={{
      marginBottom:2,
      backgroundColor:"orange",
      color:"white"
    }}>
  React Application
</Typography>
  )
}

export default Header