import Image from "next/image";
import styles from "./AboutSection.module.css";

const pillars = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: "Guaranteed Work",
    desc: "Every repair comes with a 90-day warranty. If it breaks again, we fix it free.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: "Same-Day Service",
    desc: "We understand urgency. Most repairs are completed within the same day.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
    title: "Certified Technicians",
    desc: "Our team is trained, experienced, and background-checked for your safety.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
      </svg>
    ),
    title: "Transparent Pricing",
    desc: "No hidden fees. Get a clear quote before any work begins.",
  },
];

export default function AboutSection() {
  return (
    <section className={styles.section} id="about">
      <div className={styles.bg} />

      <div className={styles.container}>
        {/* Left — images */}
        <div className={`${styles.imageStack} reveal-left`}>
          <div className={styles.img1}>
            <Image
              src="/images/pexels-multitech-institute-2155038539-34099331.jpg"
              alt="Workshop"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className={styles.img2}>
            <Image
              src="/images/pexels-pavel-danilyuk-7658323.jpg"
              alt="Technician at work"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          {/* Experience badge */}
          <div className={styles.badge}>
            <span className={styles.badgeNum}>10+</span>
            <span className={styles.badgeTxt}>Years of<br />Experience</span>
          </div>
          {/* Glow */}
          <div className={styles.imageGlow} />
        </div>

        {/* Right — content */}
        <div className={`${styles.content} reveal-right`}>
          <span className="section-label">Who We Are</span>
          <h2 className="section-title">
            The Workshop That<br />
            <span>Kinshasa Trusts</span>
          </h2>
          <div className="divider" />
          <p className="section-desc">
            Elie Kolela Inc was founded with a simple mission: bring honest, skilled, and affordable repair services to every household. Over a decade later, we've repaired thousands of appliances and built a reputation for reliability across Kinshasa and beyond.
          </p>
          <p className={styles.secondDesc}>
            Our team of certified technicians approaches every job with the dedication and care it deserves — whether it's a simple fuse replacement or a full electrical rewiring.
          </p>

          {/* Pillars */}
          <div className={styles.pillars}>
            {pillars.map((p, i) => (
              <div key={i} className={`${styles.pillar} reveal delay-${i + 1}`}>
                <div className={styles.pillarIcon}>{p.icon}</div>
                <div>
                  <h4 className={styles.pillarTitle}>{p.title}</h4>
                  <p className={styles.pillarDesc}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA row */}
          <div className={styles.ctaRow}>
            <a href="#contact" className="btn-primary">Book a Technician</a>
            <div className={styles.ownerChip}>
              <div className={styles.ownerAvatar}>
                <Image
                  src="/images/Elie Kolela.jpeg"
                  alt="Elie Kolela"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div>
                <strong>Elie Kolela</strong>
                <span>Founder & Head Technician</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
