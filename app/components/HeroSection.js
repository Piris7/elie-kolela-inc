"use client";
import { useState, useEffect, useRef } from "react";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  // Phases: "intro" → "fadeTitle" → "crossfade" → "showreel"
  const [phase, setPhase] = useState("intro");
  const video1Ref = useRef(null);
  const video2Ref = useRef(null);

  useEffect(() => {
    // Timeline:
    // 0s:    intro begins, title fades in (via CSS)
    // 3.5s:  title fades out
    // 5.5s:  crossfade to video2
    // 7s:    showreel phase
    const t1 = setTimeout(() => setPhase("fadeTitle"), 3500);
    const t2 = setTimeout(() => setPhase("crossfade"), 5500);
    const t3 = setTimeout(() => setPhase("showreel"), 7500);
    return () => [t1, t2, t3].forEach(clearTimeout);
  }, []);

  useEffect(() => {
    if (video2Ref.current && (phase === "crossfade" || phase === "showreel")) {
      video2Ref.current.play().catch(() => {});
    }
  }, [phase]);

  const scrollDown = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className={styles.hero} id="home">
      {/* Video 1 - Banner */}
      <video
        ref={video1Ref}
        className={`${styles.video} ${phase === "crossfade" || phase === "showreel" ? styles.videoFadeOut : ""}`}
        src="https://res.cloudinary.com/db7rymk1j/video/upload/v1781276480/elie-kolela/banner-intro.mp4"
        autoPlay
        muted
        playsInline
        loop
      />

      {/* Video 2 - Showreel */}
      <video
        ref={video2Ref}
        className={`${styles.video} ${styles.video2} ${phase === "crossfade" ? styles.videoFadeIn : ""} ${phase === "showreel" ? styles.videoVisible : ""}`}
        src="https://res.cloudinary.com/db7rymk1j/video/upload/v1781276133/elie-kolela/showreel.mp4"
        muted
        playsInline
        loop
      />

      {/* Dark overlay */}
      <div className={styles.overlay} />

      {/* Gradient bottom fade */}
      <div className={styles.bottomFade} />

      {/* Decorative grid */}
      <div className={styles.grid} />

      {/* Animated particles */}
      <div className={styles.particles}>
        {[...Array(12)].map((_, i) => (
          <div key={i} className={styles.particle} style={{ "--i": i }} />
        ))}
      </div>

      {/* Content */}
      <div className={`${styles.content} ${phase === "fadeTitle" || phase === "crossfade" ? styles.contentFadeOut : ""} ${phase === "showreel" ? styles.contentHidden : ""}`}>
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          Professional Home Services
        </div>

        <h1 className={styles.title}>
          <span className={styles.titleLine1}>ELIE</span>
          <span className={styles.titleLine2}>KOLELA</span>
          <span className={styles.titleLine3}>INC</span>
        </h1>

        <div className={styles.tagline}>
          <span className={styles.taglineLine} />
          Expert Repairs. Trusted Service.
          <span className={styles.taglineLine} />
        </div>
      </div>

      {/* Showreel overlay content */}
      <div className={`${styles.showreelContent} ${phase === "showreel" ? styles.showreelVisible : ""}`}>
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          Serving Kinshasa & Beyond
        </div>
        <h2 className={styles.showreelTitle}>
          Your Home,<br />
          <span>Perfectly Maintained</span>
        </h2>
        <p className={styles.showreelDesc}>
          From appliance repair to complete home maintenance — we fix it right, the first time.
        </p>
        <div className={styles.showreelBtns}>
          <a href="#services" className="btn-primary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
            </svg>
            Our Services
          </a>
          <a href="#contact" className="btn-outline">
            Book a Repair
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <button className={styles.scrollBtn} onClick={scrollDown} aria-label="Scroll down">
        <span className={styles.scrollText}>Scroll</span>
        <div className={styles.scrollMouse}>
          <div className={styles.scrollWheel} />
        </div>
      </button>

      {/* Side decorations */}
      <div className={styles.sideLeft}>
        <div className={styles.sideRotated}>EST. 2015 — KINSHASA, DRC</div>
      </div>
      <div className={styles.sideRight}>
        <div className={styles.sideStats}>
          <div className={styles.sideStat}>
            <strong>500+</strong>
            <span>Repairs</span>
          </div>
          <div className={styles.sideStatDiv} />
          <div className={styles.sideStat}>
            <strong>8</strong>
            <span>Services</span>
          </div>
        </div>
      </div>
    </section>
  );
}
