import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import ArjunNoBackground from "../arjunTransparent.png";
import ArjunStandingNoBackground from "arjunStandingTransparent.png";
import { useCallback, useRef, useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import ParticleOptionsModal from "../components/particleOptionsModal.js"
export default function HomeScreen({nextScreen}) {



  return (
    <>
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
    </>
  );
}