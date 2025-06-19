import styles from "./styles/cards.module.scss";
import srcVideo from "../assets/videos/other.mp4";

const Cards = () => {
    return (
        <div className={styles.cards_wrapper}>
            <ul className={styles.card_list}>
                <li className={styles.card}>1</li>
                <li className={styles.card}>
                    <video src={srcVideo} autoPlay loop muted />
                </li>
                <li className={styles.card}>3</li>
                <li className={styles.card}>4</li>
            </ul>
        </div>
    )
}

export default Cards;