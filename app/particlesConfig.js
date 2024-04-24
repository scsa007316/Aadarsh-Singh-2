import { RecursivePartial, IResizeEvent } from '@tsparticles/react';

// Define particlesConfig object with type hints using JSDoc comments
/**
 * @type {RecursivePartial<IOptions>}
 */
const particlesConfig = 
{
  "background": {
    "color": "#282c34"
  },
  "interactivity": {
    "events": {
      "onClick": {
        "enable": true,
        "mode": "push"
      },
      "onHover": {
        "enable": true,
        "mode": "repulse"
      },
      resize: { // Adjusted to match RecursivePartial<IResizeEvent>
        width: true,
        height: true,
      },
    },
    "modes": {
      "push": {
        "quantity": 4
      },
      "repulse": {
        "distance": 100,
        "duration": 0.4
      }
    }
  },
  "particles": {
    "color": {
      "value": "#ffffff"
    },
    "links": {
      "color": "#ffffff",
      "distance": 150,
      "enable": true,
      "opacity": 0.5,
      "width": 1
    },
    "collisions": {
      "enable": true
    },
    "move": {
      "angle": {
        "offset": 0,
        "value": 90
      },
      "attract": {
        "distance": 200,
        "enable": false,
        "rotate": {
          "x": 3000,
          "y": 3000
        }
      },
      "center": {
        "x": 50,
        "y": 50,
        "mode": "percent",
        "radius": 0
      },
      "decay": 0,
      "distance": {},
      "direction": "none",
      "drift": 0,
      "enable": true,
      "gravity": {
        "acceleration": 9.81,
        "enable": false,
        "inverse": false,
        "maxSpeed": 50
      },
      "path": {
        "clamp": false,
        "delay": {
          "value": 0
        },
        "enable": true,
        "options": {
          "sides": 6,
          "turnSteps": 30,
          "angle": 30
        },
        "generator": "polygonPathGenerator"
      },
      "outModes": {
        "default": "bounce",
        "bottom": "bounce",
        "left": "bounce",
        "right": "bounce",
        "top": "bounce"
      },
      "random": false,
      "size": false,
      "speed": 3,
      "spin": {
        "acceleration": 0,
        "enable": false
      },
      "straight": false,
      "trail": {
        "enable": true,
        "length": 20,
        "fill": {
          "color": {
            "value": "#000"
          }
        }
      },
      "vibrate": false,
      "warp": false
    },    "number": {
      "density": {
        "enable": true
      },
      "value": 200
    },
    "opacity": {
      "value": 0.5
    },
    "shape": {
        "type": "path-polygon",
        "options": {
            "path-polygon": {
                "sides": 5
            }
        }
    },
    "size": {
      "random": true,
      "value": 100
    }
  }
};

export default particlesConfig;
