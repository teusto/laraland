import styles from "./styles/intro.module.scss";
import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";

const Intro = () => {
    return (
        <div className={styles.intro_wrapper}>
            <motion.div className={styles.intro_text} initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
                <p className={styles.intro_text_sub}>_Intro</p>
                <p className={styles.intro_text_title}>Lara Lensdorf<br />Energetic Emotional Healing |  Somatic Alignment</p>
                <Link to="/about" className={styles.intro_text_cta}>_Know more about me</Link>
            </motion.div>
            {/*<video src="" />*/}
        </div>
    )
}

export default Intro;