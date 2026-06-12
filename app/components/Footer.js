import Image from "next/image";
import styles from "./Footer.module.css";

const services = [
  "TV Repair", "Fridge Repair", "Washing Machine", "Plumbing",
  "Electrical Systems", "Air Conditioning", "Oven Repair", "Home Maintenance",
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.topLine} />

      <div className={styles.main}>
        {/* Brand */}
        <div className={styles.brand}>
          <div className={styles.logoRow}>
            <div className={styles.logoImg}>
              <Image src="/images/Elie Kolela.jpeg" alt="Elie Kolela" fill style={{ objectFit: "cover" }} />
            </div>
            <div>
              <div className={styles.logoName}>Elie Kolela Inc</div>
              <div className={styles.logoTagline}>Expert Home Repairs</div>
            </div>
          </div>
          <p className={styles.brandDesc}>
            Kinshasa&apos;s trusted repair and home maintenance company. We fix what others can&apos;t.
          </p>
          <div className={styles.social}>
            {[
              { label: "Facebook", path: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
              { label: "Instagram", path: "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5z" },
              { label: "Twitter/X", path: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" },
            ].map((s) => (
              <a key={s.label} href="#" className={styles.socialBtn} aria-label={s.label}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Services */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Services</h4>
          <ul className={styles.colList}>
            {services.map((s) => (
              <li key={s}>
                <a href="#services" className={styles.colLink}>
                  <span className={styles.dot} />
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick links */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Quick Links</h4>
          <ul className={styles.colList}>
            {[["Home","#home"],["About","#about"],["Gallery","#gallery"],["Contact","#contact"]].map(([label, href]) => (
              <li key={label}>
                <a href={href} className={styles.colLink}>
                  <span className={styles.dot} />{label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Contact</h4>
          <div className={styles.contactList}>
            <div className={styles.contactItem}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.71A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
              +243 000 000 000
            </div>
            <div className={styles.contactItem}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
              </svg>
              info@eliekolela.com
            </div>
            <div className={styles.contactItem}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
              Kinshasa, DRC
            </div>
            <div className={styles.contactItem}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
              </svg>
              Mon–Sat: 7am – 8pm
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottom}>
        <span>© {new Date().getFullYear()} Elie Kolela Inc. All rights reserved.</span>
        <span className={styles.bottomRight}>
          Built with excellence in Kinshasa
          <span className={styles.heart}>♥</span>
        </span>
      </div>
    </footer>
  );
}
