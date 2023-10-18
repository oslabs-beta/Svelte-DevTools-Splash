import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Grid, Button } from '@mui/material';

const scrollToSection = (selector: string) => {
  const section = document.querySelector(selector);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

const buttonStyles = {
  marginRight: '20px',
  fontSize: '18px',
  ':hover': {
    backgroundColor: '#ff5e00',
    color: 'white',
  },
};

const Navbar: React.FC = () => {
  return (
    <Grid id="nav-bar">
      <Box>
        <AppBar
          id="app-bar"
          style={{
            background: '#000000',
          }}
        >
          Í
          <Box sx={{ display: 'flex', alignItems: 'center', ml: '20px' }}>
            <span style={{ color: 'inherit', fontSize: '32px' }}>
              Svelte DevTools+
            </span>
          </Box>
          <Toolbar>
            {[
              { label: 'Extension', selector: '#logo' },
              { label: 'Features', selector: '#features' },
              { label: 'Press', selector: '#press' },
              { label: 'Team', selector: '#TeamBio' },
            ].map((item) => (
              <Button
                key={item.label}
                color="inherit"
                onClick={() => scrollToSection(item.selector)}
                sx={buttonStyles}
              >
                {item.label}
              </Button>
            ))}
            <Button
              color="inherit"
              href="https://github.com/oslabs-beta/Svelte-DevTools-Plus"
              target="_blank"
              sx={buttonStyles}
            >
              Github
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </Grid>
  );
};

export default Navbar;
