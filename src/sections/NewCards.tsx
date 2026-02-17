import styles from "./styles/newcards.module.scss"
import Img4 from "../assets/images/img4.jpeg"
import Img2 from "../assets/images/img2.jpeg"
import Img1 from "../assets/images/img.jpeg"
import vid1 from "../assets/images/vid3.mp4"
import { useLocale } from "../i18n/LocaleContext"

interface ServiceCard {
    title: string;
    description: string;
    fitHeading: string;
    fitItems: string[];
}

const mediaMap: (React.ReactNode)[] = [
    <img src={Img1} alt="Energy Healing" />,
    <img src={Img4} alt="Nervous System Regulation" />,
    <img src={Img2} alt="Psychological Support" />,
    <video src={vid1} autoPlay muted loop />,
];

const NewCards = () => {
    const { tObj } = useLocale();
    const services = tObj<ServiceCard[]>("newCards.services");

    return (
        <section className={styles.wrapper}>
            {services.map((service, i) => (
                <div key={i} className={styles.container_services}>
                    <div className={styles.cards}>
                        <h3>{service.title}</h3>
                    </div>
                    <div className={styles.cards}>
                        <p dangerouslySetInnerHTML={{ __html: service.description }} />
                    </div>
                    <div className={styles.cards_wrapper_bottom}>
                        <div className={styles.cards}>
                            <h3>{service.fitHeading}</h3>
                            <ul>
                                {service.fitItems.map((item, j) => (
                                    <li key={j}>{item}</li>
                                ))}
                            </ul>
                        </div>
                        <div className={styles.cards + ' ' + styles.cards_media}>
                            {mediaMap[i]}
                        </div>
                    </div>
                </div>
            ))}
        </section>
    )
}

export default NewCards;