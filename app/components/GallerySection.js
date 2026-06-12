import Image from "next/image";
import styles from "./GallerySection.module.css";

const galleryItems = [
  { img: "/images/pexels-19x14-8478347.jpg", label: "Workshop Tools", span: "tall" },
  { img: "/images/pexels-karola-g-7285973.jpg", label: "Appliance Repair", span: "" },
  { img: "/images/pexels-tima-miroshnichenko-6614824.jpg", label: "Home Maintenance", span: "" },
  { img: "/images/pexels-multitech-institute-2155038539-34099331.jpg", label: "Technical Training", span: "wide" },
  { img: "/images/pexels-pavel-danilyuk-7658323.jpg", label: "Expert Technician", span: "" },
  { img: "/images/pexels-athena-5805494.jpg", label: "Oven Service", span: "tall" },
];

export default function GallerySection() {
  return (
    <section className={styles.section} id="gallery">
      <div className={styles.container}>
        <div className={`${styles.header} reveal`}>
          <span className="section-label">Our Work</span>
          <h2 className="section-title">
            See Us in <span>Action</span>
          </h2>
          <div className="divider center" />
          <p className="section-desc" style={{ margin: "0 auto", textAlign: "center" }}>
            A glimpse into our workshop, our team, and the quality of work we deliver every single day.
          </p>
        </div>

        <div className={styles.grid}>
          {galleryItems.map((item, i) => (
            <div
              key={i}
              className={`${styles.item} ${styles[item.span] || ""} reveal delay-${(i % 4) + 1}`}
            >
              <Image src={item.img} alt={item.label} fill style={{ objectFit: "cover" }} />
              <div className={styles.overlay}>
                <div className={styles.overlayContent}>
                  <span className={styles.overlayIcon}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22">
                      <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                    </svg>
                  </span>
                  <span className={styles.overlayLabel}>{item.label}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
