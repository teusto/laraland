import { useEffect, useRef } from "react";
import styles from "./styles/text.module.scss";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useInView } from "react-intersection-observer";
import { useLocale } from "../i18n/LocaleContext";

gsap.registerPlugin(SplitText);

const Text = () => {
    const { t } = useLocale();
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: .1, // 10% of the element must be visible
    });
    const h2Ref = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        if (inView) {
            const splitText = new SplitText(h2Ref.current, {
                type: "chars, words",
                charsClass: "char",
            });
            gsap.from(splitText.chars, {
                duration: .5,
                opacity: 0,
                y: 20,
                ease: "power3.out",
                stagger: 0.025,
            });
        }
    }, [inView]);

    return (
        <div className={styles.text_wrapper} ref={ref}>
            <h2 ref={h2Ref}>{t("text.quote")}
            <span>{t("text.author")}</span></h2>
        </div>
    );
};

export default Text;