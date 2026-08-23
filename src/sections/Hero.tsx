"use client";

import "@/app/globals.css";
import styles from "./styles/Hero.module.css";
import dynamic from "next/dynamic";

import ParticleBackground from "@/components/ParticleSim";

const TypewriterComponent = dynamic(() => import("typewriter-effect"), {
  ssr: false,
  loading: () => <span>Software Engineer...</span>,
});

export default function HeroSection() {
  const titles = [
    "Software Engineer...",
    "Robot Lover <3",
    "Full Stack dev",
    "Professional Downhill Snow Speedster",
    "python Game Dev",
    "University Student",
  ];

  return (
    <div id={"Hero"} style={{ width: "100%", top: 0, left: 0 }}>
      <div className={styles["container"]} aria-hidden="true">
        <div className={`${styles["hero-background"]} ${styles["hero-background-mask"]}`}>
          <ParticleBackground />
        </div>
      </div>

      <div className={`section-container ${styles["hero-container"]}`} style={{ width: "100%" }}>
        <div
          className={styles["hero-container"]}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div>
            <h1 className={styles["hero-title"]}>Peter Zhang</h1>
          </div>
          <div>
            <div className={styles["hero-subtitle"]}>
              <span>I&apos;m a&nbsp;</span>
              <span aria-live="polite">
                <TypewriterComponent
                  options={{
                    strings: titles,
                    autoStart: true,
                    loop: true,
                    delay: 50,
                  }}
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
