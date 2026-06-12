import Image from "next/image";
import styles from "./ServicesSection.module.css";

const services = [
  {
    id: 1,
    title: "TV Repair",
    desc: "LCD, LED, OLED, and Smart TV diagnostics and repair. Screen replacements, board repairs, and software issues.",
    img: "/images/pexels-mikhail-nilov-9242834.jpg",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
      </svg>
    ),
    accent: "#1a6ef5",
  },
  {
    id: 2,
    title: "Fridge Repair",
    desc: "Compressor replacement, thermostat repair, coolant recharging, and full refrigeration system overhaul.",
    img: "/images/pexels-karola-g-7285920.jpg",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M5 3h14a2 2 0 012 2v15a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z"/><path d="M3 10h18M9 10v4"/>
      </svg>
    ),
    accent: "#0aaff1",
  },
  {
    id: 3,
    title: "Washing Machine",
    desc: "Drum repair, motor replacement, control board fixes, and plumbing connections for all brands.",
    img: "/images/pexels-polina-tankilevitch-5583046.jpg",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="2" width="20" height="20" rx="3"/><circle cx="12" cy="13" r="4"/><circle cx="8" cy="6" r="1" fill="currentColor"/>
      </svg>
    ),
    accent: "#5b6af5",
  },
  {
    id: 4,
    title: "Plumbing",
    desc: "Pipe installation, leak repairs, drain unblocking, water heater installation and maintenance.",
    img: "/images/pexels-bidvine-517980-1249609.jpg",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
    accent: "#1ab8a0",
  },
  {
    id: 5,
    title: "Electrical Systems",
    desc: "Wiring installation, panel upgrades, outlet replacement, fault diagnosis and circuit breaker repairs.",
    img: "/images/pexels-tima-miroshnichenko-6474480.jpg",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
    accent: "#f5c51a",
  },
  {
    id: 6,
    title: "Air Conditioning",
    desc: "AC installation, gas recharging, cleaning, compressor servicing, and full system tune-ups.",
    img: "/images/pexels-abasiakan-255745439-12555018.jpg",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M8 2v20M12 2v20M16 2v20M2 8h20M2 12h20M2 16h20"/>
      </svg>
    ),
    accent: "#1ae8f5",
  },
  {
    id: 7,
    title: "Oven Repair",
    desc: "Gas and electric oven repair, element replacement, thermostat calibration, and door seal replacement.",
    img: "/images/pexels-athena-5805494.jpg",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="4" width="20" height="16" rx="2"/><rect x="6" y="8" width="12" height="8" rx="1"/><circle cx="8" cy="6" r="0.5" fill="currentColor"/><circle cx="12" cy="6" r="0.5" fill="currentColor"/><circle cx="16" cy="6" r="0.5" fill="currentColor"/>
      </svg>
    ),
    accent: "#f56a1a",
  },
  {
    id: 8,
    title: "Home Maintenance",
    desc: "Painting, tiling, carpentry, door & window repairs, and complete general home upkeep.",
    img: "/images/pexels-tima-miroshnichenko-6614824.jpg",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    accent: "#c9a84c",
  },
];

export default function ServicesSection() {
  return (
    <section className={styles.section} id="services">
      {/* Background decorations */}
      <div className={styles.bgDecor}>
        <div className={styles.bgCircle1} />
        <div className={styles.bgCircle2} />
        <div className={styles.bgLines} />
      </div>

      <div className={styles.container}>
        {/* Header */}
        <div className={`${styles.header} reveal`}>
          <span className="section-label">What We Do</span>
          <h2 className="section-title">
            Expert <span>Repair</span> &<br />Maintenance Services
          </h2>
          <div className="divider" />
          <p className="section-desc">
            From your living room to your kitchen, we handle every repair with precision, speed, and guaranteed quality — because your home deserves the best.
          </p>
        </div>

        {/* Grid */}
        <div className={styles.grid}>
          {services.map((s, i) => (
            <div
              key={s.id}
              className={`${styles.card} reveal delay-${(i % 4) + 1}`}
              style={{ "--accent": s.accent }}
            >
              {/* Image */}
              <div className={styles.cardImg}>
                <Image src={s.img} alt={s.title} fill style={{ objectFit: "cover" }} />
                <div className={styles.cardImgOverlay} />
              </div>

              {/* Glow top bar */}
              <div className={styles.cardBar} />

              {/* Icon */}
              <div className={styles.cardIcon}>
                {s.icon}
              </div>

              {/* Body */}
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{s.title}</h3>
                <p className={styles.cardDesc}>{s.desc}</p>
                <a href="#contact" className={styles.cardLink}>
                  Book Now
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>

              {/* Hover glow */}
              <div className={styles.cardGlow} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`${styles.bottomCta} reveal`}>
          <p>Not sure what you need? Contact us and we&apos;ll diagnose the problem.</p>
          <a href="#contact" className="btn-primary">Get Free Diagnosis</a>
        </div>
      </div>
    </section>
  );
}
