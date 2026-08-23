"use client";

import React from "react";
import dynamic from "next/dynamic";
import styles from "./styles/GitHub.module.css";
import "@/app/globals.css";

const GitHubCalendar = dynamic(
  () => import("react-github-calendar").then((mod) => mod.GitHubCalendar),
  {
    ssr: false,
    loading: () => <div className={styles.loading}>Loading contribution calendar...</div>,
  }
);

export default function GitHubSection() {
  const username = "Ultrasword";

  return (
    <div
      id="GitHub"
      className={`section-container ${styles.container}`}
      style={{ border: "1px solid rgba(255, 255, 255, 0.2)", borderRadius: "5px" }}
    >
      <div className={styles.content}>
        <h2 className={styles.title}>GitHub Activity</h2>
        <p className={styles.subtitle}>
          Check out my open source contributions and latest repositories.
        </p>

        <div className={styles.calendarContainer}>
          <GitHubCalendar
            username={username}
            colorScheme="dark"
            blockSize={12}
            blockMargin={5}
            fontSize={16}
          />
        </div>
      </div>
    </div>
  );
}
