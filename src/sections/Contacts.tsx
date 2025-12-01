import style from "./styles/contacts.module.scss";
import { SiWhatsapp } from "react-icons/si";

const Contacts = () => {
    return (
        <div className={style.contacts_wrapper}>
            <h2>_Contact</h2>
            <div className={style.contacts_content}>
                <p>Would you like to talk to me first?</p>
                <a href="https://calendly.com/laralensdorf/30min" target="_blank" rel="noopener noreferrer" className={style.contacts_content_cta} >_Book a demo</a>
            </div>
            <div className={style.contacts_social}>
                {/* <div><SiTiktok /></div>
                <div><SiInstagram /></div> */}
                <a href="https://wa.me/491735203052" target="_blank" rel="noopener noreferrer" ><SiWhatsapp /></a>
            </div>
        </div>
    )
}

export default Contacts;