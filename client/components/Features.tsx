import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
const googleWebStorePng = require('../assets/Google_Chrome_Web_Store_icon_2022.svg.png');
const StepAndTree = require('../assets/StepAndTree.gif');
const Inspect = require('../assets/Inspect.gif');
const Edit = require('../assets/Edit.gif');
const Dynamic = require('../assets/Dynamic.gif');
import Tilt from 'react-parallax-tilt';
import { browserName } from 'react-device-detect';
import '../../index.scss';

const Features = () => {
  let tilt = true;

  if (browserName.includes('Safari')) {
    tilt = false;
  }
  const dashboardImg = (
    <Tilt
      tiltEnable={tilt}
      tiltMaxAngleX={8}
      tiltMaxAngleY={8}
      tiltReverse={true}
      style={{
        marginLeft: '05%',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: '13',
      }}
    >
      <Box
        src={StepAndTree}
        alt="Screenshot of Svelte DevTools+ displaying a visual component hierarchy in a step-like or tree-like structure"
        component="img"
        className="image"
      ></Box>
    </Tilt>
  );
  const setupImg = (
    <Tilt
      tiltEnable={tilt}
      tiltMaxAngleX={8}
      tiltMaxAngleY={8}
      tiltReverse={true}
      style={{
        marginRight: '2%',
        marginLeft: '3.5%',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: '13',
      }}
    >
      <Box
        src={Dynamic}
        alt="Screenshot of Svelte DevTools+ displaying real-time changes in a component's state and props"
        component="img"
        className="image"
      ></Box>
    </Tilt>
  );
  let metricsImg = (
    <Tilt
      tiltEnable={tilt}
      tiltMaxAngleX={8}
      tiltMaxAngleY={8}
      tiltReverse={true}
      transitionSpeed={800}
      style={{
        marginLeft: '2.5%',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: '13',
      }}
    >
      <Box
        src={Inspect}
        alt="Screenshot of Svelte DevTools+ displaying a visual component tree, inspecting component's props, states and context"
        component="img"
        className="image"
      ></Box>
    </Tilt>
  );
  let lightmodeImg = (
    <Tilt
      tiltEnable={tilt}
      tiltMaxAngleX={8}
      tiltMaxAngleY={8}
      tiltReverse={true}
      style={{
        marginRight: '2%',
        marginLeft: '3.5%',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: '13',
      }}
    >
      <Box
        src={Dynamic}
        alt="Screenshot of a time-travel debugging feature to inspect the application's state at different points in time and analyze state changes"
        component="img"
        className="image"
      ></Box>
    </Tilt>
  );
  let helpDeskImg = (
    <Tilt
      tiltEnable={tilt}
      tiltMaxAngleX={8}
      tiltMaxAngleY={8}
      tiltReverse={true}
      style={{
        marginLeft: '05%',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: '13',
      }}
    >
      <Box
        src={Edit}
        alt="Screenshot of modifying the state and props of a selected component directly from Svelte DevTools+ for testing and debugging"
        component="img"
        className="image"
      ></Box>
    </Tilt>
  );

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
              zIndex: '130',
              cursor: 'pointer',
            }}
          ></Box>
        </Box>
      </Box>
      <div id="features-header">
        <h2>FEATURING</h2>
      </div>
      <div id="features-content">
        <Box className="feature">
          <Box className="feature-description">
            <h4>DYNAMIC COMPONENT VISUALIZATION</h4>
            <p>
              Svelte DevTools+ allows developers to inspect the component
              hierarchy of a Svelte application, making it easier to understand
              the application's structure
            </p>
          </Box>
          <div className="screenshot">{dashboardImg}</div>
        </Box>
        <Box className="feature-mirror">
          <Box className="feature-description">
            <h4>REAL-TIME STATE AND PROPS UPDATES</h4>
            <p>
              Svelte DevTools+ allows developers to see the real-time changes in
              a component's state and props, immediately reflecting updates in
              the DevTool and allowing for simple tracking of the application's
              behavior
            </p>
          </Box>
          <div className="screenshot">{setupImg}</div>
        </Box>
        <Box className="feature">
          <Box className="feature-description">
            <h4>COMPONENT INSPECTION</h4>
            <p>
              When selecting a component in the DevTools component tree,
              developers can inspect the component's props, state, and context
              to aid in understanding the data and values that are passed to
              each component
            </p>
          </Box>
          <div className="screenshot">{metricsImg}</div>
        </Box>

        <Box className="feature-mirror">
          <Box className="feature-description">
            <h4>COMPONENT STATE MODIFICATION</h4>
            <p>
              Developers can modify the state and props of a selected component
              directly from the DevTools window for testing and debugging
              purposes, making it easy to experiment with different scenarios
              without modifying your code
            </p>
          </Box>
          <div className="screenshot">{helpDeskImg}</div>
        </Box>
        <Box className="feature">
          <Box className="feature-description">
            <h4>STATE REWIND</h4>
            <p>
              Svelte DevTools+ provides a time-travel debugging feature that
              enables developers to inspect the application's state at different
              points in time and analyze how the state of the application
              changes
            </p>
          </Box>
          <div className="screenshot">{lightmodeImg}</div>
        </Box>
      </div>
    </Grid>
  );
};

export default Features;
