import styles from "./styles/options.module.scss";
import { useLocale } from "../i18n/LocaleContext";

const Options = () => {
    //TODO: Will have one more option
    const { t, tArray } = useLocale();
    const calendlyUrl = "https://calendly.com/laralensdorf/30min";
    const items = tArray("options.items");
    
    return (
        <div className={styles.options_wrapper}>
            {items.map((item, i) => (
                <a key={i} href={calendlyUrl} target="_blank" rel="noopener noreferrer" className={styles.options_item}>
                    <div className={styles.options_item_title}>{t("options.scheduleNow")}</div>
                    <div className={styles.options_item_text}>
                        <p className={styles.options_item_text_price}>{item}</p>
                    </div>
                </a>
            ))}
        </div>
    )
}

export default Options;