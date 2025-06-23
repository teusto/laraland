import styles from "./styles/faq.module.scss";
import { useState } from "react";

const enum faqOption {
    Option1,
    Option2,
    Option3,
    Option4,
    Option5,
    Option6,
    Option7,
    Option8
}

const Faq = () => {
    const [faq, setFaq] = useState<faqOption>(faqOption.Option1);

    const faqText = {
        [faqOption.Option1]: "Du erhältst sofortigen Zugang zu einer umfangreichen Video-Bibliothek mit somatischen Übungen, Impulsen und Wissensmodulen. Zusätzlich gibt es einmal im Monat einen Live-Call, in dem du Fragen stellen, dich austauschen oder einfach nur dabei sein kannst.",
        [faqOption.Option2]: "Alle Videos sind jederzeit für dich verfügbar. Du kannst sie in deinem eigenen Tempo anschauen, wiederholen und die Übungen flexibel in deinen Alltag integrieren.",
        [faqOption.Option3]: "Nein, die Teilnahme ist freiwillig. Die Live-Calls sind ein Angebot, wenn du Austausch suchst oder persönliche Fragen hast. Du kannst auch ausschließlich die Videos nutzen.",
        [faqOption.Option4]: "Solange du Mitglied bist, hast du uneingeschränkten Zugriff auf alle Videos und kannst an jedem monatlichen Live-Call teilnehmen.",
        [faqOption.Option5]: "Nein. Die Video-Bibliothek ist so aufgebaut, dass du ohne Vorwissen starten kannst. Du wirst sanft eingeführt und findest sowohl für Anfänger als auch für Fortgeschrittene passende Inhalte. Bei Fragen kannst du dich jederzeit an uns wenden oder sie im monatlichen Live-Call stellen.",
        [faqOption.Option6]: "Bei der Nutzung der Video-Bibliothek kannst du vollkommen anonym bleiben. Bei den monatlichen Live-Calls ist eine anonyme Teilnahme leider nicht möglich, da diese in einer offenen Gruppe stattfinden. Es steht dir aber frei, ob du daran teilhaben möchtest.",
        [faqOption.Option7]: "Die Video-Bibliothek wird regelmäßig erweitert, sodass du immer wieder neue Impulse und Übungen entdecken kannst.",
        [faqOption.Option8]: "Du kannst deine Mitgliedschaft jederzeit mit wenigen Klicks beenden – ohne Mindestlaufzeit oder versteckte Bedingungen."
    };

    return (
        <section className={styles.faq_wrapper}>
            <div className={styles.faq_item}>
                <div className={styles.left}>
                    <div className={styles.left_title}>FAQ Title</div>
                    <div className={styles.left_text}>
                        <li onClick={() => setFaq(faqOption.Option1)}>Was bekomme ich mit meiner Calmverse-Mitgliedschaft?</li>
                        <li onClick={() => setFaq(faqOption.Option2)}>Wie funktioniert die Video-Bibliothek?</li>
                        <li onClick={() => setFaq(faqOption.Option3)}>Muss ich an den Live-Calls teilnehmen?</li>
                        <li onClick={() => setFaq(faqOption.Option4)}>Wie lange habe ich Zugriff auf die Inhalte?</li>
                        <li onClick={() => setFaq(faqOption.Option5)}>Brauche ich Vorkenntnisse oder besondere Voraussetzungen?</li>
                        <li onClick={() => setFaq(faqOption.Option6)}>Kann ich anonym bleiben?</li>
                        <li onClick={() => setFaq(faqOption.Option7)}>Wie oft kommen neue Inhalte dazu?</li>
                        <li onClick={() => setFaq(faqOption.Option8)}>Wie kann ich kündigen?</li>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.right_text}>{faqText[faq]}</div>
                </div>
            </div>
        </section>
    );
};

export default Faq;