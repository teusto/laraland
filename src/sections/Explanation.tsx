import { motion } from "motion/react"
import styles from "./styles/explanation.module.scss"

const Explanation = () => {
    return (
        <div className={styles.explanation_wrapper}>
            <h2>_Was ist das Nervensystem?</h2>
            <div className={styles.explanation_container}>
                <motion.div className={styles.explanation_item} initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
                    <h3>Was ist das Nervensystem?</h3>
                    <p>Oft versuchen wir, Probleme rein mit dem Verstand zu lösen – und fühlen uns dadurch gestresster und ängstlicher als zuvor. Das liegt daran, dass viele unserer Verhaltensweisen, selbst wenn sie uns schaden, aus Sicht unseres Nervensystems einen Sinn ergeben: Sie schützen uns vor gefühlter Gefahr.
                        Anzeichen für ein gestresstes Nervensystem:
                        Perfektionismus, Angst, Selbstzweifel, Erschöpfung oder körperliche Beschwerden sind oft Zeichen, dass unser Nervensystem aus dem Gleichgewicht geraten ist. Solange dahinterliegende Bedürfnisse oder alte Verletzungen unbemerkt bleiben, fällt Veränderung schwer.</p>
                </motion.div>
                <motion.div className={styles.explanation_item} initial={{ opacity: 0, y: -60 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
                    <h3>Was ist das Nervensystem?</h3>
                    <p>Unser Nervensystem prüft ständig, ob wir sicher sind. Erfahrungen aus unserer Kindheit und Erwachsenenleben können dazu führen, dass es selbst harmlose Situationen als bedrohlich einstuft – zum Beispiel soziale Kontakte oder Leistungsdruck. Dauerstress und Selbstzweifel verstärken diese Alarmbereitschaft.
                        Regulation statt Selbstvorwurf:
                        Wenn du dich hier wiedererkennst, bist du nicht „zu sensibel“ oder falsch. Dein Nervensystem braucht Unterstützung, um sich wieder zu regulieren.<br />Du musst nicht mehr ums Überleben kämpfen. Du darfst Sicherheit in dir verankern und leben.
                        Calmverse unterstützt dich dabei:
                        Durch meine Video-Bibliothek und die monatlichen Live-Calls unterstütze ich dich mit praktischen Übungen und einfachen Erklärungen, damit du dein Nervensystem stärkst und mehr innere Ruhe findest.</p>
                </motion.div>
            </div>
        </div>
    )
}

export default Explanation