import React, { useCallback } from 'react';
import type { Container, Engine } from 'tsparticles-engine';
import * as _Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

const particleColor = '#ff3e00';

const Particles = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);

    /*
          You can initialize the tsParticles instance (engine) here, adding custom shapes or presets
          this loads the tsparticles package bundle, it's the easiest method for getting everything ready
          starting from v2 you can add only the features you need reducing the bundle size
          await loadFull(engine);
        */
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container);
    },
    []
  );

  return (
    <_Particles.Particles
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: 'push',
            },
            onHover: {
              enable: true,
              mode: 'repulse',
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: particleColor,
          },
          links: {
            color: particleColor,
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: {
              default: 'bounce',
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.25,
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default Particles;
