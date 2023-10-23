import React from 'react';
import { Grid } from '@mui/material';
const logo = require('../assets/NewLogo.png');
import Box from '@mui/material/Box';

const MainHeader = () => {
  return (
    <Grid id="header">
      <Box
        // disableEqualOverflow='true'
        style={{
          // backgroundColor: '#120838',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignContent: 'center',
          width: '100%',
          height: '100%',
          marginTop: 10,
        }}
      >
        <Grid
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignContent: 'center',
            width: '65%',
          }}
        >
          <Box
            id="logo"
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
            }}
          >
            <Box
              src={logo}
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignContent: 'center',
                height: '300px',
                width: '300px',
                zIndex: '130',
                padding: '4rem',
              }}
              component="img"
            ></Box>
          </Box>
          <Box
            id="download"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}
          >
            <h1>Svelte DevTools+</h1>
            <h3>Unlock the full power of the Svelte with Svelte DevTools+</h3>
            <h5 className="orange-text">Go to the extension store</h5>
          </Box>
        </Grid>
      </Box>
    </Grid>
  );
};

export default MainHeader;
