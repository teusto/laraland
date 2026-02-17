import styles from "./styles/intro.module.scss";
import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import { useLocale } from "../i18n/LocaleContext";

const Intro = () => {
    const { t } = useLocale();
    return (
        <div className={styles.intro_wrapper}>
            <motion.div className={styles.intro_text} initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
                <p className={styles.intro_text_sub}>{t("intro.subtitle")}</p>
                <p className={styles.intro_text_title}>{t("intro.title")}<br />{t("intro.titleSub")}</p>
                <Link to="/about" className={styles.intro_text_cta}>{t("intro.cta")}</Link>
            </motion.div>
            {/*<video src="" />*/}
        </div>
    )
}

export default Intro;