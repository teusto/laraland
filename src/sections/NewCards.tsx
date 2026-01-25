import styles from "./styles/newcards.module.scss"
import Img4 from "../assets/images/img4.jpeg"
import Img2 from "../assets/images/img2.jpeg"
import Img1 from "../assets/images/img.jpeg"
import vid1 from "../assets/images/vid3.mp4"

const NewCards = () => {
    return (
        <section className={styles.wrapper}>
            <div className={styles.container_services}>
                <div className={styles.cards}>
                    <h3>1. Energy Healing Session</h3>
                </div>
                <div className={styles.cards}>
                    <p>
                        For those who want a gentle release for the mind, body and energy.<br /><br />
                        In this session, we work together to dissolve emotional tension, free blocked energy and bring your system back into balance.
                        My approach combines intuitive energy work, somatic guidance and emotional presence — so you can soften, regulate and reconnect with yourself again.
                    </p>
                </div>
                <div className={styles.cards_wrapper_bottom}>
                    <div className={styles.cards}>
                        <h3>You're a good fit for this session if:</h3>
                        <ul>
                            <li>You feel emotionally overwhelmed</li>
                            <li>Your body feels tense, heavy, or "on edge"</li>
                            <li>You're stuck in old patterns</li>
                            <li>You want to reconnect to your inner calm and clarity</li>
                        </ul>
                    </div>
                    <div className={styles.cards + ' ' + styles.cards_media}>
                        <img src={Img1} alt="Energy Healing" />
                    </div>
                </div>
            </div>

            <div className={styles.container_services}>
                <div className={styles.cards}>
                    <h3>2. Nervous System Regulation Session</h3>
                </div>
                <div className={styles.cards}>
                    <p>
                        For those who want to feel safe in their body again.<br /><br />
                        This session focuses on supporting your nervous system through somatic techniques, breathwork, grounding and co-regulation.
                        With my psychological background, I guide you through simple but powerful practices that help your system relax, stabilize and find resilience again.
                    </p>
                </div>
                <div className={styles.cards_wrapper_bottom}>

                    <div className={styles.cards}>
                        <h3>This is perfect for:</h3>
                        <ul>
                            <li>Chronic stress or overwhelm</li>
                            <li>Emotional reactivity</li>
                            <li>Anxiety-like tension</li>
                            <li>Difficulty grounding or feeling present</li>
                        </ul>
                    </div>
                    <div className={styles.cards + ' ' + styles.cards_media}>
                        <img src={Img4} alt="Nervous System Regulation" />
                    </div>
                </div>
            </div>

            <div className={styles.container_services}>
                <div className={styles.cards}>
                    <h3>3. Psychological Support</h3>
                </div>
                <div className={styles.cards}>
                    <p>
                        For those who are ready to rise — to understand themselves, regulate their energy, and step into a more aligned, powerful version of who they are.<br /><br />
                        This session is where we sit together — honestly, openly, and with full presence — and look at what is really going on inside you.
                        I support you like a mentor: grounded, honest, encouraging, and fully here for your growth.
                        With my background in Psychology and deep energetic understanding, I help you make sense of your emotions, your patterns, and the things that keep holding you back — so you can step into your power with clarity and confidence.
                    </p>
                </div>
                <div className={styles.cards_wrapper_bottom}>

                    <div className={styles.cards}>
                        <h3>This session is for you if you want:</h3>
                        <ul>
                            <li>Someone who listens</li>
                            <li>support that is both psychological and intuitive</li>
                            <li>clarity about your patterns and emotions</li>
                            <li>to feel understood, held and guided</li>
                            <li>motivation + steps that actually empower you</li>
                        </ul>
                    </div>
                    <div className={styles.cards + ' ' + styles.cards_media}>
                        <img src={Img2} alt="Psychological Support" />
                    </div>
                </div>
            </div>

            <div className={styles.container_services}>
                <div className={styles.cards}>
                    <h3>4. Astrological Blueprint Analysis</h3>
                </div>
                <div className={styles.cards}>
                    <p>
                        For those who want to know their individual energetic fingerprint — explained and integrated.<br /><br />
                        This isn't a classic birth chart reading.
                        Your Blueprint Analysis is an emotional–energetic exploration of who you are, how you function, what you need, and how your energy naturally expresses itself.
                        It translates astrology into practical, life-changing insights tailored specifically to you.
                    </p>
                </div>
                <div className={styles.cards_wrapper_bottom}>

                    <div className={styles.cards}>
                        <h3>In this session, we explore:</h3>
                        <ul>
                            <li>Your emotional energy – understanding your triggers and somatic patterns</li>
                            <li>Your natural strengths & expression –  how you shine authentically</li>
                            <li>Your communication style – how you relate and interact</li>
                            <li>Your nervous system tendencies – how you respond to stress and challenges</li>
                            <li>Your life purpose & cycles –  guiding your growth and transformation</li>
                            <li>Your relational patterns –  in love, work, and social connections</li>
                            <li>Your energetic rhythm & alignment –   knowing when to act, rest, or push forward</li>
                        </ul>
                    </div>
                    <div className={styles.cards + ' ' + styles.cards_media}>
                        <video src={vid1} autoPlay muted loop/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NewCards;