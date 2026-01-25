import { createFileRoute } from '@tanstack/react-router'
import styles from './styles/legal.module.scss'

export const Route = createFileRoute('/impressum')({
  component: Impressum,
})

function Impressum() {
  return (
    <div className={styles.legal_wrapper}>
      <div className={styles.back_button}>
        <a href="/">go back</a>
      </div>
      <h1>Impressum (Legal Notice)</h1>
      
      <section>
        <h2>Angaben gemäß § 5 TMG</h2>
        <p>
          Lara Lensdorf<br />
          <br />
          <br />
          Germany
        </p>
      </section>

      <section>
        <h2>Kontakt</h2>
        <p>
          E-Mail: <a href="mailto:hello@laralensdorf.com">hello@laralensdorf.com</a>
        </p>
      </section>

      <section>
        <h2>VAT</h2>
        <p>
          VAT identification number pursuant to § 27a German VAT Act:<br />
          Not applicable due to the small business regulation (§ 19 UStG)
        </p>
      </section>

      <section>
        <h2>Streitschlichtung</h2>
        <p>
          Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
          <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr</a>.<br />
          Unsere E-Mail-Adresse finden Sie oben im Impressum.
        </p>
        <p>
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </section>
    </div>
  )
}
