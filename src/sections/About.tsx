import React from "react";
import Image from "next/image";

import "@/app/globals.css";
import styles from "./styles/About.module.css";

import MovingArrow from "@/components/MovingArrow";
import ParticleBackground from "@/components/ParticleSim";

const collageImages = [
  { src: "/collage/gamedev.mp4", alt: "Game development footage", type: "video" as const },
  { src: "/collage/IMG_6105.webp", alt: "Skiing on the slopes", type: "image" as const },
  { src: "/collage/gamedev1.webp", alt: "Game development workspace", type: "image" as const },
  { src: "/collage/portfolio1.webp", alt: "Portfolio website preview", type: "image" as const },
  { src: "/collage/ski1.webp", alt: "Skiing adventure", type: "image" as const },
  { src: "/collage/tremblant1.webp", alt: "Tremblant ski trip", type: "image" as const },
  { src: "/collage/groupphoto.webp", alt: "Group photo with friends", type: "image" as const },
  { src: "/collage/IMG_6056.webp", alt: "Outdoor adventure photo", type: "image" as const },
  { src: "/collage/IMG_6169.webp", alt: "Personal photo", type: "image" as const },
];

export default function AboutSection() {
  return (
    <div id={"About"} className={styles["container"]}>
      <div style={{ height: "100px", justifyContent: "center", display: "flex" }}>
        <MovingArrow targetSectionTitle="About" />
      </div>
      <div
        className={`section-container ${styles["container-grid"]}`}
        style={{ border: "1px solid rgba(255, 255, 255, 0.2)" }}
      >
        <div className={styles["left-container"]}>
          <div>
            <p className={"section-title"}>A little about me...</p>
          </div>
          <div>
            <p style={{ paddingBottom: "15px" }}>
              Hey! Fancy seeing you here
              <br></br>
              <span
                style={{
                  color: "var(--primary-color-one)",
                  fontSize: "17px",
                  fontWeight: "bold",
                }}
              >
                {"( ^_^)／"}
              </span>
              <br></br>
            </p>
            <p style={{ paddingBottom: "10px" }}>{"I'm a bit of a..."}</p>
            <ul
              style={{
                listStyleType: "none",
                lineHeight: "0.8",
                paddingLeft: "10px",
              }}
            >
              <li>⛷️ ski lover</li>
              <li>👾 game developer</li>
              <li>📚 full-stack dev</li>
              <li>🏸 badminton demon</li>
            </ul>
            <br></br>
            <p style={{ paddingTop: "20px" }}>
              I&apos;m down to chat about anything tech{" "}
              <i>or if you have job opportunities for me</i>
            </p>
            <p>
              <span style={{ fontSize: "12px" }}> (plz hit me up)</span>
            </p>
            <br></br>
          </div>
        </div>
        <div
          className={styles["right-container"]}
          style={{ border: "1px solid rgba(255, 255, 255, 0.2)", padding: "5px" }}
        >
          <div className={styles["collage-container"]}>
            {collageImages.map((item, i) => (
              <div
                key={item.src}
                style={{
                  gridArea: i === 0 ? "circle" : "auto",
                  overflow: "hidden",
                  height: "100%",
                  maxHeight: "100%",
                }}
              >
                {item.type === "video" ? (
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    style={{ width: "100%" }}
                    aria-label={item.alt}
                  >
                    <source src={item.src} type="video/mp4" />
                    <track
                      kind="captions"
                      src="/collage/gamedev-captions.vtt"
                      srcLang="en"
                      label="English captions"
                      default
                    />
                  </video>
                ) : (
                  <div className={styles["collage-image"]}>
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={400}
                      height={400}
                      sizes="(max-width: 768px) 50vw, 300px"
                      loading={i < 3 ? "eager" : "lazy"}
                      style={{
                        display: "flex",
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <div className={styles["bottom-container"]}>
          <p>Anyways...</p>
          <div className={styles["bottom-title"]}>
            <h2 style={{ fontWeight: "bold", textAlign: "center" }}>
              <span className={"text-gradient-mask-p1"}>Welcome to my personal website!</span>
            </h2>
          </div>
        </div>
        <div className={styles["bottom-content"]}>
          <div className={styles["bottom-content-container"]}>
            <ParticleBackground />
          </div>
        </div>
      </div>
      <div style={{ height: "100px", justifyContent: "center", display: "flex" }}>
        <MovingArrow targetSectionTitle={"Jobs"} />
      </div>
    </div>
  );
}
