import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import ArjunNoBackground from "../arjunTransparent.png";
import ArjunStandingNoBackground from "arjunStandingTransparent.png";
import { useCallback, useRef, useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import ParticleOptionsModal from "../components/particleOptionsModal.js"
export default function Home() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);

    await loadFull(engine);
  }, []);
  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  //particle options
  const [modalOpen, setModalOpen] = useState(false);
  const [particleSpeed, setParticleSpeed] = useState(3);

  const [particleColors,setParticleColors] = useState(["#83ea9c","#FFFFFF","#a5fc03","#03e3fc","#fcad03","#fc035a"])
  const handleParticleSpeedChange = (speed) => {
    setParticleSpeed(speed);
  };

  const updateParticleColor = (index, color) => {
    setParticleColors(prevColors => {
      const updatedColors = [...prevColors]; 
      updatedColors[index] = color; 
      return updatedColors; 
    });
  };

  const handleParticleColorChange1 = (color) => {
    updateParticleColor(0,color);
  };
  const handleParticleColorChange2 = (color) => {
    updateParticleColor(1,color);
  };
  const handleParticleColorChange3 = (color) => {
    updateParticleColor(2,color);
  };
  const handleParticleColorChange4 = (color) => {
    updateParticleColor(3,color);
  };
  const handleParticleColorChange5 = (color) => {
    updateParticleColor(4,color);
  };
  const handleParticleColorChange6 = (color) => {
    updateParticleColor(5,color);
  };

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
 


  return (
    <>
      <Head>
        <title>Arjun Rawal</title>
        <meta name="description" content="Student with a passion for computer science" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/arjunTransparent.ico" />
      </Head>
      <div className={styles.header}>
        <div className={styles.navbar}>
        <button className={styles.navbuttons}>Home</button>
        <button className={styles.navbuttons}>About Me</button>
        <button className={styles.navbuttons}>Skills</button>
        <button className={styles.navbuttons}>Projects</button>
        <button className={styles.navbuttons}>Contact</button>
        </div>
        <button onClick={()=>{setModalOpen(true)}} className={styles.particleOptionsButton}>
          Particle Options
        </button>
        <ParticleOptionsModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        onSpeedChange={handleParticleSpeedChange}
        onColorChange1={handleParticleColorChange1}
        onColorChange2={handleParticleColorChange2}
        onColorChange3={handleParticleColorChange3}
        onColorChange4={handleParticleColorChange4}
        onColorChange5={handleParticleColorChange5}
        onColorChange6={handleParticleColorChange6}

      />
      </div>

      <main className={styles.main}>
        <div className={styles.title}>
          <h1 className={styles.name}>
            Arjun Rawal
          </h1>
          <Image
            src={ArjunNoBackground}
            alt="Arjun Rawal"
            className={styles.avatar}
          />
        </div>
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: "#000000",
              },
            },
            fpsLimit: 120,
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
                  quantity: 3,
                },
                repulse: {
                  distance: 100,
                  duration: 0.1,
                },
              },
            },
            particles: {
              color: {
                value: particleColors,
              },
              links: {
                color: "#ffffff",
                distance: 200,
                enable: false,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: false,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: particleSpeed,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 1000,
                },
                value: 200,
              },
              opacity: {
                value: 0.8,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 6 },
              },
            },
            detectRetina: true,
          }}
                  />
      </main>
    </>
  );
}