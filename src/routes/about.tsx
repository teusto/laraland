import { createFileRoute } from '@tanstack/react-router';
import styles from "../sections/styles/about.module.scss";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export const Route = createFileRoute('/about')({
    component: () => <About />,
})

const About = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const titleWrapperRef = useRef<HTMLDivElement>(null);
    const text1Ref = useRef<HTMLParagraphElement>(null);
    const text2Ref = useRef<HTMLParagraphElement>(null);
    const text3Ref = useRef<HTMLParagraphElement>(null);
    const youTextRef = useRef<HTMLParagraphElement>(null);
    const finalSectionRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {

        gsap.from(titleWrapperRef.current, {
            yPercent: 170,
            duration: 1,
            scale: .85,
            ease: "power3.out"
        })

        gsap.to(text1Ref.current, {
            scrollTrigger: {
                trigger: text1Ref.current,
                start: "+20%",
                scrub: 1,
                markers: true
            },
            xPercent: -150,
            yPercent: -150,
            opacity: 1,
            ease: "power3.out"
        })

        gsap.to(text2Ref.current, {
            scrollTrigger: {
                trigger: text2Ref.current,
                start: "320%",
                scrub: 1,
                markers: true
            },
            xPercent: -50,
            yPercent: -150,
            opacity: 1,
            ease: "power3.out"
        })

        gsap.to(text3Ref.current, {
            scrollTrigger: {
                trigger: text3Ref.current,
                start: "620%",
                scrub: 1,
                markers: true
            },
            xPercent: 50,
            yPercent: -150,
            opacity: 1,
            duration: 1.5,
            ease: "power3.out"
        })

        gsap.to(finalSectionRef.current, {
            scrollTrigger: {
                trigger: finalSectionRef.current,
                start: "820%",
                scrub: 1,
                markers: true
            },
            xPercent: -50,
            yPercent: 170,
            opacity: 1,
            duration: 2,
            ease: "power3.out"
        })
    })

    return (
        <div ref={containerRef} className={styles.about}>
            <div className={styles.scroll_content}>
                <div ref={titleWrapperRef} className={styles.title_wrapper}>
                    <h2 className={styles.about_title}>_Hi im Lara Lensdorf</h2>
                </div>
                
                <p ref={text1Ref} className={styles.about_text}>Ich bin Lara Lensdorf, eine Psychotherapeutin mit einer Leidenschaft für das Wohlbefinden meiner Patienten.</p>
                
                <p ref={text2Ref} className={styles.about_text}>Meine Mission ist es, Ihnen dabei zu helfen, Ihre innere Ruhe zu finden.</p>
                
                <p ref={text3Ref} className={styles.about_text}>Ihre Lebensqualität zu verbessern und ein erfülltes Leben zu führen.</p>
            </div>
            
            <div className={styles.final_section} ref={finalSectionRef}>
                <p ref={youTextRef} className={styles.about_you_text}>Your Turn, in der du dich auf dich selbst konzentrierst und dich in deiner inneren Welt begegnen kannst.</p>
            </div>
        </div>
    )
}