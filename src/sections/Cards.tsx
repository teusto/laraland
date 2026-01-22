import styles from "./styles/cards.module.scss";
import { motion } from "motion/react"

// Use absolute paths from public directory for large media files (Vite best practice)
const srcVideo = "/assets/videos/other.mp4";
const srcVideo2 = "/assets/videos/vid2.mp4";

const Cards = () => {
    return (
        <div className={styles.cards_wrapper}>
            <h2 className={styles.cards_title}>How I Can Help You:</h2>
            <ul className={styles.card_list}>
                <li className={styles.card}>
                    <h3>1. Energy Healing Session</h3>
                    <p>
                        For those who want a gentle release for the mind, body and energy.<br /><br />
                        In this session, we work together to dissolve emotional tension, free blocked energy and bring your system back into balance.
                        My approach combines intuitive energy work, somatic guidance and emotional presence — so you can soften, regulate and reconnect with yourself again.
                    </p>
                </li>
                <li className={styles.card_wrapper}>
                    <motion.div className={styles.card_half} initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1.5 }}>
                        <h3>1. You're a good fit for this session if:</h3>
                        <ul>
                            <li>You feel emotionally overwhelmed</li>
                            <li>Your body feels tense, heavy, or "on edge"</li>
                            <li>You're stuck in old patterns</li>
                            <li>You want to reconnect to your inner calm and clarity</li>
                        </ul>
                    </motion.div>
                    <div className={styles.card_half_video}>
                        <video src={srcVideo} autoPlay loop muted />
                    </div>
                </li>
                <motion.li className={styles.card} initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1.5 }}>
                    <h3>2. This is perfect for:</h3>
                    <ul>
                        <li>Chronic stress or overwhelm</li>
                        <li>Emotional reactivity</li>
                        <li>Anxiety-like tension</li>
                        <li>Difficulty grounding or feeling present</li>
                    </ul>
                </motion.li>
                <li className={styles.card}>
                        <h3>2. Nervous System Regulation Session</h3>
                        <p>
                            For those who want to feel safe in their body again.<br /><br />
                            This session focuses on supporting your nervous system through somatic techniques, breathwork, grounding and co-regulation.
                            With my psychological background, I guide you through simple but powerful practices that help your system relax, stabilize and find resilience again.
                        </p>
                </li>
                <li className={styles.card}>
                    <h3>3. Psychological Support</h3>
                    <p>
                        For those who are ready to rise — to understand themselves, regulate their energy, and step into a more aligned, powerful version of who they are.<br /><br />
                        This session is where we sit together — honestly, openly, and with full presence — and look at what is really going on inside you.
                        I support you like a mentor: grounded, honest, encouraging, and fully here for your growth.
                        With my background in Psychology and deep energetic understanding, I help you make sense of your emotions, your patterns, and the things that keep holding you back — so you can step into your power with clarity and confidence.
                    </p>
                </li>
                <li className={styles.card_wrapper}>
                    <div className={styles.card_half_video}>
                        <video src={srcVideo2} autoPlay loop muted />
                    </div>
                    <motion.div className={styles.card_half} initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1.5 }}>
                        <h3>3. This session is for you if you want:</h3>
                        <ul>
                            <li>Someone who listens</li>
                            <li>support that is both psychological and intuitive</li>
                            <li>clarity about your patterns and emotions</li>
                            <li>to feel understood, held and guided</li>
                            <li>motivation + steps that actually empower you</li>
                        </ul>
                    </motion.div>
                </li>
                <motion.li className={styles.card} initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1.5 }}>
                    <h3>4. In this session, we explore:</h3>
                    <ul>
                        <li>Your emotional energy – understanding your triggers and somatic patterns</li>
                        <li>Your natural strengths & expression –  how you shine authentically</li>
                        <li>Your communication style – how you relate and interact</li>
                        <li>Your nervous system tendencies – how you respond to stress and challenges</li>
                        <li>Your life purpose & cycles –  guiding your growth and transformation</li>
                        <li>Your relational patterns patterns –  in love, work, and social connections</li>
                        <li>Your energetic rhythm & alignment –   knowing when to act, rest, or push forward</li>
                    </ul>
                </motion.li>
                <li className={styles.card}>
                    <h3>4. Astrological Blueprint Analysis</h3>
                    <p>
                        For those who want to know their individual energetic fingerprint — explained and integrated.<br /><br />
                        This isn't a classic birth chart reading.
                        Your Blueprint Analysis is an emotional–energetic exploration of who you are, how you function, what you need, and how your energy naturally expresses itself.
                        It translates astrology into practical, life-changing insights tailored specifically to you.
                    </p>
                </li>
            </ul>
        </div>
    )
}

export default Cards;