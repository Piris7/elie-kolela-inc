"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Navbar.module.css";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.inner}>
        {/* Logo */}
        <a href="#home" className={styles.logo}>
          <div className={styles.logoImg}>
            <Image
              src="/images/Elie Kolela.jpeg"
              alt="Elie Kolela"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <span className={styles.logoText}>
            <span className={styles.logoMain}>Elie Kolela</span>
            <span className={styles.logoSub}>Inc</span>
          </span>
        </a>

        {/* Desktop Links */}
        <ul className={styles.links}>
          {navLinks.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className={`${styles.link} ${active === l.label ? styles.activeLink : ""}`}
                onClick={() => setActive(l.label)}
              >
                {l.label}
                <span className={styles.linkUnder} />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a href="tel:+000000000" className={styles.cta}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.71A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
          </svg>
          Call Us Now
        </a>

        {/* Hamburger */}
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileOpen : ""}`}>
        {navLinks.map((l) => (
          <a
            key={l.label}
            href={l.href}
            className={styles.mobileLink}
            onClick={() => { setMenuOpen(false); setActive(l.label); }}
          >
            {l.label}
          </a>
        ))}
        <a href="tel:+000000000" className={`${styles.cta} ${styles.mobileCta}`}>
          Call Us Now
        </a>
      </div>
    </nav>
  );
}
