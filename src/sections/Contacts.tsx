import style from "./styles/contacts.module.scss";
import { SiWhatsapp } from "react-icons/si";
import { MdOutlineAlternateEmail } from "react-icons/md";


const Contacts = () => {
    return (
        <div className={style.contacts_wrapper}>
            <h2>Contact</h2>
            <div className={style.contacts_content}>
                <p>Would you like to talk to me first?</p>
                <a href="https://calendly.com/laralensdorf/30min" target="_blank" rel="noopener noreferrer" className={style.contacts_content_cta} >Book a intro session</a>
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