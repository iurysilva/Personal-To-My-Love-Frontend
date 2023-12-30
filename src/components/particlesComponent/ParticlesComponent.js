//CSS
import './Particles.css';

import { useCallback } from "react";
import Particles from "react-tsparticles";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadHeartShape } from 'tsparticles-shape-heart';
import { loadSnowPreset } from 'tsparticles-preset-snow';

const ParticlesComponent = () => {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        //await loadFull(engine);
        await loadSnowPreset(engine);
        await loadHeartShape(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
        <Particles 
        className="Particles"
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        height="700px"
        width="100%"
        options={{
            fullScreen: false,
            background: {
                color: {
                    value: "#6A3F5D",
                },
            },
            fpsLimit: 60,
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "push",
                    },
                    onHover: {
                        enable: true,
                        mode: "repulse",
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
                    value: "#E52258",
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "bounce",
                    },
                    random: false,
                    speed: 6,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                        area: 800,
                    },
                    value: 30,
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: "heart",
                },
                size: {
                    value: { min: 5, max: 10 },
                },
            },
            detectRetina: true,
        }} />
    );
};

export default ParticlesComponent;