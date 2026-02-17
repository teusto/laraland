import style from "./styles/contacts.module.scss";
import { SiWhatsapp } from "react-icons/si";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { useLocale } from "../i18n/LocaleContext";


const Contacts = () => {
    const { t } = useLocale();
    return (
        <div className={style.contacts_wrapper}>
            <h2>{t("contacts.heading")}</h2>
            <div className={style.contacts_content}>
                <p>{t("contacts.text")}</p>
                <a href="https://calendly.com/laralensdorf/30min" target="_blank" rel="noopener noreferrer" className={style.contacts_content_cta} >{t("contacts.cta")}</a>
            </div>
            <div className={style.contacts_social}>
                {/* <div><SiTiktok /></div>
                <div><SiInstagram /></div> */}
                <a href="https://wa.me/491735203052" target="_blank" rel="noopener noreferrer" ><SiWhatsapp /></a>
                <a href="mailto:hello@laralensdorf.com" target="_blank" rel="noopener noreferrer" ><MdOutlineAlternateEmail /></a>
            </div>
        </div>
    )
}

export default Contacts;