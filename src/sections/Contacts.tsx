import style from "./styles/contacts.module.scss";
import { SiTiktok } from "react-icons/si";
import { SiInstagram } from "react-icons/si";
import { SiWhatsapp } from "react-icons/si";

const Contacts = () => {
    return (
        <div className={style.contacts_wrapper}>
            <h2>_Kontakt</h2>
            <div className={style.contacts_content}>
                <p>Would you like to see a demo?</p>
                <button className={style.contacts_content_cta}>_Book a demo</button>
            </div>
            <div className={style.contacts_social}>
                <div><SiTiktok /></div>
                <div><SiInstagram /></div>
                <div><SiWhatsapp /></div>
            </div>
        </div>
    )
}

export default Contacts;