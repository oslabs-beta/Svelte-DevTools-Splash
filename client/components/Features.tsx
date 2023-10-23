import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
const googleWebStorePng = require('../assets/Google_Chrome_Web_Store_icon_2022.svg.png');
const StepAndTree = require('../assets/StepAndTree.gif');
const Inspect = require('../assets/Inspect.gif');
const Edit = require('../assets/Edit.gif');
const Dynamic = require('../assets/Dynamic.gif');
const Rewind = require('../assets/Rewind.gif');
import Tilt from 'react-parallax-tilt';
import { browserName } from 'react-device-detect';
import '../../index.scss';

const featureData = [
  {
    header: `DYNAMIC COMPONENT VISUALIZATION`,
    description: `Svelte DevTools+ allows developers to inspect the component
    hierarchy of a Svelte application, making it easier to understand
    the application's structure`,
    alt: `Screenshot of Svelte DevTools+ displaying a visual component hierarchy in a step-like or tree-like structure`,
    image: StepAndTree,
  },
  {
    header: `REAL-TIME STATE AND PROPS UPDATES`,
    description: `Svelte DevTools+ allows developers to see the real-time changes in
    a component's state and props, allowing for simple tracking of the application's
    behavior`,
    alt: `Screenshot of Svelte DevTools+ displaying real-time changes in a component's state and props`,
    image: Dynamic,
  },
  {
    header: `COMPONENT INSPECTION`,
    description: `When selecting a component in the component tree,
    developers can inspect the component's props, state, and context
    to aid in understanding the data and values that are passed to
    each component`,
    alt: `Screenshot of Svelte DevTools+ displaying a visual component tree, inspecting component's props, states and context`,
    image: Inspect,
  },
  {
    header: `COMPONENT STATE MODIFICATION`,
    description: `Developers can modify the state and props of a selected component
    directly from the DevTools window for testing and debugging
    purposes, making it easy to experiment with different scenarios
    without modifying your code`,
    alt: `Screenshot of modifying the state and props of a selected component directly from Svelte DevTools+ for testing and debugging`,
    image: Edit,
  },
  {
    header: `STATE REWIND`,
    description: `Svelte DevTools+ provides a time-travel debugging feature that
    enables developers to inspect the application's state at different
    points in time and analyze how the state of the application
    changes`,
    alt: `Screenshot of a time-travel debugging feature to inspect the application's state at different points in time and analyze state changes`,
    image: Rewind,
  },
];

const Features = () => {
  let tilt = true;
  if (browserName.includes('Safari')) {
    tilt = false;
  }
  return (
    <Grid id="features">
      <Box id="button container" width="100%">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            width: '100%',
            mb: 4,
          }}
        >
          <Box
            id="buttonsDL"
            component="img"
            src={googleWebStorePng}
            alt="Google Chrome Web Store icon"
            onClick={() =>
              window.open(
                'https://chrome.google.com/webstore/detail/svelte-devtools%2B/bgelkjgjabbfoeiicgoddeadicoofcfk?hl=en-GB'
              )
            }
            sx={{
              width: '90px',
              height: '90px',
              paddingTop: '5px',
              cursor: 'pointer',
            }}
          ></Box>
        </Box>
      </Box>
      <div id="features-header">
        <h2>FEATURING</h2>
      </div>
      <div id="features-content">
        {featureData.map((feature, index) => {
          const className = index % 2 === 0 ? 'feature' : 'feature-mirror';
          return (
            <Box className={className}>
              <div className="feature-description">
                <h4>{feature.header}</h4>
                <p>{feature.description}</p>
              </div>
              <div className="screenshot">
                <Tilt
                  tiltEnable={tilt}
                  tiltMaxAngleX={8}
                  tiltMaxAngleY={8}
                  tiltReverse={true}
                >
                  <img src={feature.image} alt={feature.alt}></img>
                </Tilt>
              </div>
            </Box>
          );
        })}
      </div>
    </Grid>
  );
};

export default Features;
