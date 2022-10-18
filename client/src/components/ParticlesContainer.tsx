import React from "react";
import Particles from "react-particles";
import { Engine } from "tsparticles-engine";
import { loadStarsPreset } from "tsparticles-preset-stars";

export class ParticlesContainer extends React.PureComponent {
  // this customizes the component tsParticles installation
  async customInit(engine: Engine): Promise<void> {
    // this adds the preset to tsParticles, you can safely use the
    await loadStarsPreset(engine);
  }

  render() {
    const options = {
      interactivity: {
        detectsOn: "window" as const,
        events: {
          onHover: {
            mode: 'bubble',
            enable: true
          }
        },
        modes: {
          "bubble": {
            distance: 400,
            duration: 2,
            opacity: 0.8,
            size: 40,
          },
          push: {
            quantity: 4,
          },
        }
      },
      background: {
        color: {
          value: "#06283D",
        },
      },
      fullScreen: {
        enable: true,
        zIndex: -1 // or any value is good for you, if you use -1 set `interactivity.detectsOn` to `"window"` if you need mouse interactions
      },
      preset: "stars",
    };

    return <Particles options={options} init={this.customInit} />;
  }
}