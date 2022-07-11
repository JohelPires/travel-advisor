import { AppBar, Box, InputBase, Toolbar, Typography } from '@mui/material'
import { Autocomplete } from '@react-google-maps/api'
import React from 'react'

function Header() {
  return (
    <AppBar position='static'>
      <Toolbar className='toolbar'>
        <Typography variant='h5' className='title'>
          Travel Advisor
        </Typography>
        <Box display='flex'>
          <Typography variant='h6' className='title'>
            Explore new places
          </Typography>
          {/* <Autocomplete> */}
          <div className='search'>
            <div className='searchIcon'>
              <p>SearchIcon</p>
            </div>
            <InputBase placeholder='Search...' />
          </div>
          {/* </Autocomplete> */}
        </Box>
      </Toolbar>
    </AppBar>
    // <header className='header'>
    //   <h1>Travel Advisor</h1>
    // </header>
  )
}

export default Header
