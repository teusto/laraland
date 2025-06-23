import styles from "./styles/cards.module.scss";
import srcVideo from "../assets/videos/other.mp4";

const Cards = () => {
    return (
        <div className={styles.cards_wrapper}>
            <h2 className={styles.cards_title}>_Unsere Kurse</h2>
            <ul className={styles.card_list}>
                <li className={styles.card}>
                    <h3>Sofortiger Zugang zur Video-Bibliothek</h3>
                    <p>Entdecke eine wachsende Sammlung an alltagstauglichen, traumasensiblen Übungen und Impulsen für dein Nervensystem – jederzeit und in deinem Tempo.</p>
                </li>
                <li className={styles.card}>
                    <video src={srcVideo} autoPlay loop muted />
                </li>
                <li className={styles.card}>
                    <h3>Monatlicher Live-Call – Inspiration im Rhythmus des Universums</h3>
                    <p>Erlebe jeden Monat neue Themen, Workshops oder offene Fragerunden, inspiriert von aktuellen Zeitqualitäten. Lass dich überraschen und wachse mit jeder Session weiter.</p>
                </li>
                <li className={styles.card}>
                    <h3>Persönliche Begleitung auf deinem Weg</h3>
                    <p>Ich führe dich Schritt für Schritt – mit verständlichen Erklärungen, praktischen Tools und echter Empathie, auch wenn du ganz neu im Thema bist.</p>
                </li>
                <li className={styles.card}>
                    <h3>Ein sicherer Raum für echte Transformation</h3>
                    <p>Hier darfst du sein, wie du bist. Calmverse ist dein geschützter Ort für Wachstum, Heilung und mehr innere Ruhe – ohne Bewertung, ohne Druck.</p>
                </li>
                <li className={styles.card}>
                    <h3>Ein sicherer Raum für echte Transformation</h3>
                    <p>Hier darfst du sein, wie du bist. Calmverse ist dein geschützter Ort für Wachstum, Heilung und mehr innere Ruhe – ohne Bewertung, ohne Druck.</p>
                </li>
            </ul>
        </div>
    )
}

export default Cards;