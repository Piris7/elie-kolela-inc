import Image from "next/image";
import styles from "./FounderSection.module.css";

const timeline = [
  {
    year: "1988",
    title: "A Father's Workshop",
    desc: "Elie's father, Jean-Baptiste Kolela, opened a small repair workshop in the heart of Kinshasa with nothing but a set of tools and an unshakeable belief that broken things deserve to be fixed.",
  },
  {
    year: "2003",
    title: "A Son Learns the Trade",
    desc: "At just 10 years old, young Elie spent his afternoons beside his father — learning how to listen to a struggling motor, diagnose a faulty circuit, and treat every client's home like his own.",
  },
  {
    year: "2010",
    title: "Earning His Credentials",
    desc: "Elie completed his formal technical training in electrical engineering and appliance repair, combining his father's practical wisdom with modern expertise.",
  },
  {
    year: "2015",
    title: "Elie Kolela Inc is Born",
    desc: "Honouring his father's legacy, Elie officially founded Elie Kolela Inc — expanding the family workshop into a full-service home repair company trusted across Kinshasa.",
  },
];

export default function FounderSection() {
  return (
    <section className={styles.section} id="founder">
      {/* Decorative background */}
      <div className={styles.bgLeft} />
      <div className={styles.bgDots} />

      <div className={styles.container}>

        {/* ── TOP QUOTE STRIP ── */}
        <div className={`${styles.quoteStrip} reveal`}>
          <div className={styles.quoteIcon}>&ldquo;</div>
          <p className={styles.quoteText}>
            My father taught me that every broken thing is just something waiting to be whole again. That belief built this company.
          </p>
          <div className={styles.quoteSig}>
            <div className={styles.quoteSigLine} />
            <span>— Elie Kolela, Founder</span>
          </div>
        </div>

        {/* ── MAIN CONTENT ROW ── */}
        <div className={styles.row}>

          {/* LEFT — image + badge */}
          <div className={`${styles.imageCol} reveal-left`}>
            <div className={styles.imageWrap}>
              {/* Main founder photo */}
              <div className={styles.mainPhoto}>
                <Image
                  src="/images/Elie Kolela.jpeg"
                  alt="Elie Kolela — Founder"
                  fill
                  style={{ objectFit: "cover", objectPosition: "top center" }}
                  priority
                />
                {/* Overlay name tag */}
                <div className={styles.photoTag}>
                  <strong>Elie Kolela</strong>
                  <span>Founder & Head Technician</span>
                </div>
              </div>

              {/* Father tribute card */}
              <div className={styles.tributeCard}>
                <div className={styles.tributeIconWrap}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="22" height="22">
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
                  </svg>
                </div>
                <div>
                  <strong className={styles.tributeTitle}>In honour of Jean-Baptiste Kolela</strong>
                  <span className={styles.tributeDesc}>The father who started it all.</span>
                </div>
              </div>

              {/* Decorative floating elements */}
              <div className={styles.floatCircle1} />
              <div className={styles.floatCircle2} />
            </div>
          </div>

          {/* RIGHT — story & timeline */}
          <div className={`${styles.storyCol} reveal-right`}>
            <span className="section-label">Our Story</span>
            <h2 className="section-title">
              From a Father&apos;s<br /><span>Workshop</span> to<br />
              a City&apos;s Most Trusted
            </h2>
            <div className="divider" />

            <p className={styles.intro}>
              The story of Elie Kolela Inc is not just a business story — it is a story of a son who watched his father pour decades of love, skill, and integrity into a small Kinshasa workshop, and decided that legacy was worth carrying forward.
            </p>

            {/* Timeline */}
            <div className={styles.timeline}>
              {timeline.map((item, i) => (
                <div key={i} className={`${styles.tlItem} reveal delay-${i + 1}`}>
                  <div className={styles.tlLeft}>
                    <div className={styles.tlYear}>{item.year}</div>
                    {i < timeline.length - 1 && <div className={styles.tlLine} />}
                  </div>
                  <div className={styles.tlBody}>
                    <h4 className={styles.tlTitle}>{item.title}</h4>
                    <p className={styles.tlDesc}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Values chips */}
            <div className={styles.chips}>
              {["Integrity", "Family-Driven", "Kinshasa Proud", "Expert Craft"].map((c) => (
                <span key={c} className={styles.chip}>{c}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
