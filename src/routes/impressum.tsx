import { createFileRoute } from '@tanstack/react-router'
import styles from './styles/legal.module.scss'
import { useLocale } from '../i18n/LocaleContext'
import LanguageSwitcher from '../i18n/LanguageSwitcher'

interface ImpressumSection {
  heading: string;
  text: string;
  text2?: string;
  text3?: string;
}

export const Route = createFileRoute('/impressum')({
  component: Impressum,
})

function Impressum() {
  const { t, tObj } = useLocale();
  const sections = tObj<ImpressumSection[]>("impressum.sections");

  return (
    <div className={styles.legal_wrapper}>
      <div style={{ position: 'fixed', top: '1rem', right: '1rem', zIndex: 100 }}>
        <LanguageSwitcher />
      </div>
      <div className={styles.back_button}>
        <a href="/">{t("impressum.goBack")}</a>
      </div>
      <h1>{t("impressum.title")}</h1>
      
      {sections.map((sec, i) => (
        <section key={i}>
          <h2>{sec.heading}</h2>
          {i === 1 ? (
            <p>
              <span dangerouslySetInnerHTML={{ __html: sec.text }} />{' '}
              <a href="mailto:hello@laralensdorf.com">hello@laralensdorf.com</a>
            </p>
          ) : i === 3 ? (
            <>
              <p>
                <span dangerouslySetInnerHTML={{ __html: sec.text }} />{' '}
                <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr</a>.<br />
                {sec.text2}
              </p>
              <p>{sec.text3}</p>
            </>
          ) : (
            <p dangerouslySetInnerHTML={{ __html: sec.text }} />
          )}
        </section>
      ))}
    </div>
  )
}
