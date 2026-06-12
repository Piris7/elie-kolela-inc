"use client";
import { useState } from "react";
import styles from "./TestimonialsSection.module.css";

const testimonials = [
  {
    name: "Marie Kabila",
    role: "Homeowner, Gombe",
    text: "My fridge had been broken for two weeks. Elie's team came the next morning, diagnosed the problem in 20 minutes, and had it running perfectly by noon. Outstanding service!",
    rating: 5,
    initials: "MK",
    color: "#1a6ef5",
  },
  {
    name: "Jean-Pierre Mutombo",
    role: "Business Owner, Kinshasa",
    text: "We had a serious electrical fault in our office that other companies couldn't solve. Elie Kolela Inc found the issue within an hour. Professional, thorough, and honest pricing.",
    rating: 5,
    initials: "JP",
    color: "#c9a84c",
  },
  {
    name: "Sophie Lukusa",
    role: "Resident, Limete",
    text: "Fixed my washing machine and while they were at it, noticed a plumbing issue I didn't even know about. They fixed that too for a very fair price. Highly recommend!",
    rating: 5,
    initials: "SL",
    color: "#1ab8a0",
  },
  {
    name: "Robert Nkosi",
    role: "Property Manager",
    text: "I manage 12 units and use Elie Kolela Inc for all my maintenance needs. Fast response, skilled workers, and they always leave the place clean. My go-to team!",
    rating: 5,
    initials: "RN",
    color: "#5b6af5",
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a === 0 ? testimonials.length - 1 : a - 1));
  const next = () => setActive((a) => (a === testimonials.length - 1 ? 0 : a + 1));

  return (
    <section className={styles.section}>
      <div className={styles.bg} />
      <div className={styles.container}>
        <div className={`${styles.header} reveal`}>
          <span className="section-label">Testimonials</span>
          <h2 className="section-title">
            What Our <span>Clients</span> Say
          </h2>
          <div className="divider center" />
        </div>

        <div className={styles.slider}>
          {/* Cards */}
          <div className={styles.cards}>
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`${styles.card} ${i === active ? styles.cardActive : i === (active + 1) % testimonials.length ? styles.cardNext : styles.cardHidden}`}
                style={{ "--accent": t.color }}
              >
                {/* Quote mark */}
                <div className={styles.quote}>&ldquo;</div>

                {/* Stars */}
                <div className={styles.stars}>
                  {[...Array(t.rating)].map((_, j) => (
                    <svg key={j} viewBox="0 0 24 24" fill="var(--gold)" width="18" height="18">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>

                <p className={styles.text}>&ldquo;{t.text}&rdquo;</p>

                <div className={styles.author}>
                  <div className={styles.authorAvatar} style={{ background: t.color }}>
                    {t.initials}
                  </div>
                  <div>
                    <strong className={styles.authorName}>{t.name}</strong>
                    <span className={styles.authorRole}>{t.role}</span>
                  </div>
                </div>

                <div className={styles.cardAccentLine} />
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className={styles.controls}>
            <button className={styles.navBtn} onClick={prev} aria-label="Previous">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="20" height="20">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
            </button>
            <div className={styles.dots}>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`${styles.dot} ${i === active ? styles.dotActive : ""}`}
                  onClick={() => setActive(i)}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
            <button className={styles.navBtn} onClick={next} aria-label="Next">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="20" height="20">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
