import { createFileRoute } from '@tanstack/react-router'
import styles from './styles/legal.module.scss'
import { useLocale } from '../i18n/LocaleContext'
import LanguageSwitcher from '../i18n/LanguageSwitcher'

interface PrivacySection {
  heading: string;
  text: string;
}

export const Route = createFileRoute('/privacy')({
  component: PrivacyPolicy,
})

function PrivacyPolicy() {
  const { t, tObj } = useLocale();
  const sections = tObj<PrivacySection[]>("privacy.sections");

  return (
    <div className={styles.legal_wrapper}>
      <div style={{ position: 'fixed', top: '1rem', right: '1rem', zIndex: 100 }}>
        <LanguageSwitcher />
      </div>

      <div className={styles.back_button}>
        <a href="/">{t("privacy.goBack")}</a>
      </div>
      <h1>{t("privacy.title")}</h1>
      <p>{t("privacy.lastUpdated")} {new Date().toLocaleDateString()}</p>

      {sections.map((sec, i) => (
        <section key={i}>
          <h2>{sec.heading}</h2>
          <p>
            {sec.text}
            {i === 3 && <> <a href="mailto:hello@laralensdorf.com">hello@laralensdorf.com</a></>}
          </p>
        </section>
      ))}
    </div>
  )
}
