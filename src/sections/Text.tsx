import { useEffect, useRef } from "react";
import styles from "./styles/text.module.scss";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useInView } from "react-intersection-observer";

gsap.registerPlugin(SplitText);

const Text = () => {
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
            <h2 ref={h2Ref}>"Knowing what we feel is the first step to knowing why we feel that way.”
            <span>— BESSEL VAN DER KOLK</span></h2>
        </div>
    );
};

export default Text;