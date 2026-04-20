import type { Metadata } from "next";
import SectionLabel from "@/components/ui/SectionLabel";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About Finmagix",
  description:
    "We believe everyone deserves a complete financial picture. CFP-standard financial planning tools for every American.",
};

interface TeamMember {
  initials: string;
  name: string;
  title: string;
  bio: string;
}

const TEAM: TeamMember[] = [
  {
    initials: "AS",
    name: "Amitabh Sarwate",
    title: "Founder & CEO",
    bio: "Placeholder — add your bio here.",
  },
  {
    initials: "?",
    name: "[Team Member]",
    title: "[Title]",
    bio: "Placeholder for team member.",
  },
  {
    initials: "?",
    name: "[Advisory Board]",
    title: "[Title]",
    bio: "Placeholder for advisor.",
  },
];

const VALUES: { title: string; description: string }[] = [
  {
    title: "Accessible",
    description:
      "Financial planning tools that work for everyone — not just the wealthy.",
  },
  {
    title: "Educational",
    description:
      "We provide tools, not advice. Every insight is educational, helping you understand your financial picture.",
  },
  {
    title: "Trustworthy",
    description:
      "CFP-standard calculations, transparent methodology, and your data protected with bank-level security.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <SectionLabel tone="dark">Our story</SectionLabel>
          <h1 className={styles.heroH1}>
            We believe everyone deserves a complete financial picture
          </h1>
          <p className={styles.heroSub}>
            A comprehensive financial plan from a CFP typically costs
            $2,000–$5,000 and takes weeks. Most Americans never get one.
            Finmagix delivers the same analytical depth in minutes.
          </p>
        </div>
      </section>

      <section className={styles.mission}>
        <div className={styles.missionInner}>
          <div>
            <h3 className={styles.missionH3}>Our mission</h3>
            <p className={styles.missionP}>
              To make CFP-standard financial planning accessible to every
              American — not just those who can afford a private advisor. We
              believe financial clarity is a right, not a privilege.
            </p>
          </div>
          <div>
            <h3 className={styles.missionH3}>Our approach</h3>
            <p className={styles.missionP}>
              We follow the 6-step financial planning process used by Certified
              Financial Planners — understanding your situation, identifying
              goals, analyzing your current position, developing educational
              insights, and helping you track progress. We are not financial
              advisors. We provide educational tools.
            </p>
          </div>
        </div>
      </section>

      <section id="team" className={styles.team}>
        <div className={styles.teamInner}>
          <h2 className={styles.teamH2}>Meet the team</h2>
          <div className={styles.teamGrid}>
            {TEAM.map((member) => (
              <article key={member.name} className={styles.teamCard}>
                <div className={styles.avatar} aria-hidden="true">
                  {member.initials}
                </div>
                <h3 className={styles.teamName}>{member.name}</h3>
                <p className={styles.teamTitle}>{member.title}</p>
                <p className={styles.teamBio}>{member.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.values}>
        <div className={styles.valuesInner}>
          <h2 className={styles.valuesH2}>What we stand for</h2>
          <div className={styles.valuesGrid}>
            {VALUES.map((value) => (
              <article key={value.title} className={styles.valueCard}>
                <h3 className={styles.valueTitle}>{value.title}</h3>
                <p className={styles.valueDesc}>{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className={styles.disclaimerStrip}>
        <p className={styles.disclaimerStripText}>
          For educational purposes only. Not financial advice.
        </p>
      </div>
    </>
  );
}
