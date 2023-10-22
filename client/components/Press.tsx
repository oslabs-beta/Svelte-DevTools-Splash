import Box from '@mui/material/Box';
const productHuntLogo = require('../assets/productHuntLogo.png');
const MediumLogo = require('../assets/MediumLogo.png');

const Press = () => {
  return (
    <div id="press" style={{ zIndex: '14009', paddingTop: '60px' }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: '40000',
        }}
      >
        <h1>Read About Us</h1>
        <Box
          id="pressimages"
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            width: '85%',
            mb: 20,
          }}
        >
          <Box
            id="MediumArticle"
            component="img"
            src={MediumLogo}
            onClick={() =>
              window.open(
                'https://medium.com/@laura.glassjohnston/introducing-svelte-devtools-9fe8e58b15bd'
              )
            }
            sx={{
              width: '45%',
              zIndex: '3410',
              mb: '60px',
              ':hover': 'pointer',
            }}
          ></Box>
          <div style={{ width: '50px' }} />
          <Box
            id="ProductHuntArticle"
            component="img"
            src={productHuntLogo}
            onClick={() =>
              window.open('https://www.producthunt.com/posts/svelte-devtools')
            }
            sx={{
              width: '45%',

              zIndex: '3410',
              mb: '60px',
              ':hover': 'pointer',
            }}
          ></Box>
        </Box>
      </div>
    </div>
  );
};

export default Press;
