import styles from "./styles/options.module.scss";

const Options = () => {
    return (
        <div className={styles.options_wrapper}>
            <div className={styles.options_item}>
                1
            </div>
            <div className={styles.options_item}>
                2
            </div>
            <div className={styles.options_item}>
                3
            </div>
        </div>
    )
}

export default Options;