import { createFileRoute } from '@tanstack/react-router'
import styles from './styles/legal.module.scss'

export const Route = createFileRoute('/privacy')({
  component: PrivacyPolicy,
})

function PrivacyPolicy() {
  return (
    <div className={styles.legal_wrapper}>

      <div className={styles.back_button}>
        <a href="/">go back</a>
      </div>
      <h1>Privacy Policy</h1>
      <p>Last updated: {new Date().toLocaleDateString()}</p>

      <section>
        <h2>1. Introduction</h2>
        <p>
          Welcome to Lara Lensdorf's website. We respect your privacy and are committed to protecting your personal data.
          This privacy policy will inform you as to how we look after your personal data when you visit our website
          and tell you about your privacy rights and how the law protects you.
        </p>
      </section>

      <section>
        <h2>2. Data We Collect</h2>
        <p>
          Currently, this website does not use cookies or tracking technologies.
          We only collect data that you voluntarily provide to us via email, WhatsApp, or when booking a session via Calendly.
        </p>
      </section>

      <section>
        <h2>3. Third-Party Links</h2>
        <p>
          This website includes links to third-party websites (e.g., Calendly, WhatsApp).
          Clicking on those links may allow third parties to collect or share data about you.
          We do not control these third-party websites and are not responsible for their privacy statements.
        </p>
      </section>

      <section>
        <h2>4. Contact Details</h2>
        <p>
          The person responsible for data processing on this website is:
          Lara Lensdorf
          Fürstenbergstraße 21B, 33102 Paderborn
          <a href="mailto:hello@laralensdorf.com">hello@laralensdorf.com</a>
        </p>
      </section>

      <section>
        <h2>5. Updates to this Privacy Policy</h2>
        <p>
          We reserve the right to update this privacy policy if the website or legal requirements change.
        </p>
      </section>
    </div>
  )
}
