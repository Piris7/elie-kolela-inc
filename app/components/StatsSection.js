"use client";
import { useState, useEffect, useRef } from "react";
import styles from "./StatsSection.module.css";

const stats = [
  { value: 10, suffix: "+", label: "Years Experience", icon: "⭐" },
  { value: 1200, suffix: "+", label: "Appliances Repaired", icon: "🔧" },
  { value: 800, suffix: "+", label: "Happy Clients", icon: "😊" },
  { value: 98, suffix: "%", label: "Satisfaction Rate", icon: "✅" },
];

function Counter({ target, suffix, started }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    const duration = 2200;
    const step = 16;
    const steps = duration / step;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, step);
    return () => clearInterval(timer);
  }, [started, target]);

  return <>{count.toLocaleString()}{suffix}</>;
}

export default function StatsSection() {
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect(); } },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section} ref={ref}>
      <div className={styles.bg} />
      <div className={styles.inner}>
        {/* Left headline */}
        <div className={`${styles.left} reveal-left`}>
          <span className="section-label-light">By The Numbers</span>
          <h2 className="section-title-white">
            Results That<br /><span>Speak For<br />Themselves</span>
          </h2>
          <div className="divider" />
          <p className="section-desc-white">
            Over a decade of quality repairs and satisfied customers — our track record proves our commitment to excellence.
          </p>
        </div>

        {/* Stats grid */}
        <div className={styles.grid}>
          {stats.map((s, i) => (
            <div key={i} className={`${styles.card} reveal delay-${i + 1}`}>
              <div className={styles.cardIcon}>{s.icon}</div>
              <div className={styles.cardNum}>
                <Counter target={s.value} suffix={s.suffix} started={started} />
              </div>
              <div className={styles.cardLabel}>{s.label}</div>
              <div className={styles.cardLine} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
