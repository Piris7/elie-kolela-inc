import styles from "./CtaSection.module.css";

export default function CtaSection() {
  return (
    <section className={styles.section} id="contact">
      {/* Background video tint */}
      <div className={styles.bg} />
      <div className={styles.mesh} />

      <div className={`${styles.inner} reveal`}>
        {/* Badge */}
        <div className={styles.badge}>
          <span className={styles.dot} />
          Available 7 Days a Week
        </div>

        <h2 className={styles.title}>
          Ready to Fix<br />
          <span>Your Home?</span>
        </h2>


        <p className={styles.desc}>
          Don&apos;t let a broken appliance ruin your day. Contact us now for a free diagnosis and fast repair — guaranteed satisfaction or we come back for free.
        </p>

        {/* Contact options */}
        <div className={styles.contacts}>
          <a href="tel:+243000000000" className={styles.contactCard}>
            <div className={styles.contactIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.71A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
            </div>
            <div>
              <span className={styles.contactLabel}>Call Us</span>
              <strong className={styles.contactVal}>+243 000 000 000</strong>
            </div>
          </a>

          <a href="https://wa.me/243000000000" className={styles.contactCard}>
            <div className={`${styles.contactIcon} ${styles.whatsapp}`}>
              <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </div>
            <div>
              <span className={styles.contactLabel}>WhatsApp</span>
              <strong className={styles.contactVal}>Chat With Us</strong>
            </div>
          </a>

          <div className={styles.contactCard}>
            <div className={styles.contactIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <div>
              <span className={styles.contactLabel}>Location</span>
              <strong className={styles.contactVal}>Kinshasa, DRC</strong>
            </div>
          </div>
        </div>

        {/* CTA buttons */}
        <div className={styles.buttons}>
          <a href="tel:+243000000000" className="btn-gold">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="17" height="17">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.71A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
            </svg>
            Call Now — It&apos;s Free
          </a>
          <a href="https://wa.me/243000000000" className="btn-outline">
            Book via WhatsApp
          </a>
        </div>

        {/* Trust badges */}
        <div className={styles.trust}>
          {["90-Day Warranty", "Same-Day Service", "Free Diagnosis", "Licensed Technicians"].map((b, i) => (
            <div key={i} className={styles.trustBadge}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="14" height="14">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              {b}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
