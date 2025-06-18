import styles from "./styles/cards.module.scss";

const Cards = () => {
    return (
        <div className={styles.cards_wrapper}>
            <ul className={styles.card_list}>
                <li className={styles.card}>1</li>
                <li className={styles.card}>2</li>
                <li className={styles.card}>3</li>
                <li className={styles.card}>4</li>
            </ul>
        </div>
    )
}

export default Cards;