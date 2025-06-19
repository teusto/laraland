import styles from "./styles/options.module.scss";

const Options = () => {
    return (
        <div className={styles.options_wrapper}>
            <div className={styles.options_item}>
                <div className={styles.options_item_title}>15 min</div>
                <div className={styles.options_item_text}>
                    <p className={styles.options_item_text_price}>asdadsa<br />$15/week</p>
                </div>
            </div>
            <div className={styles.options_item}>
                <div className={styles.options_item_title}>15 min</div>
                <div className={styles.options_item_text}>
                    <p className={styles.options_item_text_price}>asdadsa<br />$15/week</p>
                </div>
            </div>
            <div className={styles.options_item}>
                <div className={styles.options_item_title}>15 min</div>
                <div className={styles.options_item_text}>
                    <p className={styles.options_item_text_price}>asdadsa<br />$15/week</p>
                </div>
            </div>
        </div>
    )
}

export default Options;