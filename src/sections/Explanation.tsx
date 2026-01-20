import { motion } from "motion/react"
import styles from "./styles/explanation.module.scss"

const Explanation = () => {
    //TODO: This will transform in pictures probably
    return (
        <div className={styles.explanation_wrapper}>
            <h2>What My Work Helps With?</h2>
            <div className={styles.explanation_container}>
                <motion.div className={styles.explanation_item} initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
                    <h3>Emotional overwhelm & stress</h3>
                </motion.div>
                <motion.div className={styles.explanation_item} initial={{ opacity: 0, y: -60 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
                    <h3>Nervous system dysregulation</h3>
                </motion.div>
                <motion.div className={styles.explanation_item} initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
                    <h3>Inner blocks & stuck energy</h3>
                </motion.div>
                <motion.div className={styles.explanation_item} initial={{ opacity: 0, y: -60 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
                    <h3>Disconnection from the body</h3>
                </motion.div>
                <motion.div className={styles.explanation_item} initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
                    <h3>Low emotional resilience</h3>
                </motion.div>
                <motion.div className={styles.explanation_item} initial={{ opacity: 0, y: -60 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
                    <h3>Feeling lost or out of alignment</h3>
                </motion.div>
            </div>
        </div>
    )
}

export default Explanation