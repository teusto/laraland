import { Link } from "@tanstack/react-router";
import styles from "./styles/footer.module.scss";
import { useLocale } from "../i18n/LocaleContext";

const Footer = () => {
    const { t } = useLocale();
    return (
        <div className={styles.footer_wrapper}>
            <p>2025 <span><a href="https://domenica.agency" target="_blank" rel="noopener noreferrer">Domenica.agency</a></span> — {t("footer.credit").split("<a>").pop()?.split("</a>").pop() || "May this site be a balm upon you."}</p>
            <div className={styles.footer_links}>
                <Link to="/privacy" className={styles.link}>{t("footer.privacyLink")}</Link>
                <Link to="/impressum" className={styles.link}>{t("footer.impressumLink")}</Link>
            </div>
        </div>
    )
}

export default Footer