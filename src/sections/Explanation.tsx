import { motion } from "motion/react"
import styles from "./styles/explanation.module.scss"
import { useLocale } from "../i18n/LocaleContext"

const Explanation = () => {
    //TODO: This will transform in pictures probably
    const { t, tArray } = useLocale();
    const items = tArray("explanation.items");
    const directions = [60, -60, 60, -60, 60, -60];
    return (
        <div className={styles.explanation_wrapper}>
            <h2>{t("explanation.heading")}</h2>
            <div className={styles.explanation_container}>
                {items.map((item, i) => (
                    <motion.div key={i} className={styles.explanation_item} initial={{ opacity: 0, y: directions[i] }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
                        <h3>{item}</h3>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Explanation