import { motion } from "motion/react"
import styles from "./styles/explanation.module.scss"

const Explanation = () => {
    //TODO: This will transform in pictures probably
    return (
        <div className={styles.explanation_wrapper}>
            <h2>What My Work Helps With:</h2>
            <div className={styles.explanation_container}>
                <motion.div className={styles.explanation_item} initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
                    <h3>Feeling constantly overstimulated and exhausted.</h3>
                </motion.div>
                <motion.div className={styles.explanation_item} initial={{ opacity: 0, y: -60 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
                    <h3>A nervous system that’s always on edge.</h3>
                </motion.div>
                <motion.div className={styles.explanation_item} initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
                    <h3>Stuck energy and inner blocks that hold you back.</h3>
                </motion.div>
                <motion.div className={styles.explanation_item} initial={{ opacity: 0, y: -60 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
                    <h3>Disconnection from your body and intuition.</h3>
                </motion.div>
                <motion.div className={styles.explanation_item} initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
                    <h3>Fragile emotional resilience, easily triggered.</h3>
                </motion.div>
                <motion.div className={styles.explanation_item} initial={{ opacity: 0, y: -60 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
                    <h3>Feeling lost, out of alignment, or unsure of who you are.</h3>
                </motion.div>
            </div>
        </div>
    )
}

export default Explanation