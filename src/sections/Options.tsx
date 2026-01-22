import styles from "./styles/options.module.scss";

const Options = () => {
    //TODO: Will have one more option
    const calendlyUrl = "https://calendly.com/laralensdorf/30min";
    
    return (
        <div className={styles.options_wrapper}>
            <a href={calendlyUrl} target="_blank" rel="noopener noreferrer" className={styles.options_item}>
                <div className={styles.options_item_title}>Schedule Now</div>
                <div className={styles.options_item_text}>
                    <p className={styles.options_item_text_price}>Energy Healing Session</p>
                </div>
            </a>
            <a href={calendlyUrl} target="_blank" rel="noopener noreferrer" className={styles.options_item}>
                <div className={styles.options_item_title}>Schedule Now</div>
                <div className={styles.options_item_text}>
                    <p className={styles.options_item_text_price}>Nervous System Regulation Session</p>
                </div>
            </a>
            <a href={calendlyUrl} target="_blank" rel="noopener noreferrer" className={styles.options_item}>
                <div className={styles.options_item_title}>Schedule Now</div>
                <div className={styles.options_item_text}>
                    <p className={styles.options_item_text_price}>Psychological Support</p>
                </div>
            </a>
            <a href={calendlyUrl} target="_blank" rel="noopener noreferrer" className={styles.options_item}>
                <div className={styles.options_item_title}>Schedule Now</div>
                <div className={styles.options_item_text}>
                    <p className={styles.options_item_text_price}>Astrological Blueprint Analysis</p>
                </div>
            </a>
        </div>
    )
}

export default Options;