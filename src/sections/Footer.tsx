import { Link } from "@tanstack/react-router";
import styles from "./styles/footer.module.scss";

const Footer = () => {
    return (
        <div className={styles.footer_wrapper}>
            <p>2025 <span><a href="https://domenica.agency" target="_blank" rel="noopener noreferrer">Domenica.agency</a></span> — May this site be a balm upon you.</p>
            <div className={styles.footer_links}>
                <Link to="/privacy" className={styles.link}>Privacy Policy</Link>
                <Link to="/impressum" className={styles.link}>Impressum</Link>
            </div>
        </div>
    )
}

export default Footer