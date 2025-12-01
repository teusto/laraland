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
                start: "-20%",
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
                start: "+300%",
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
                start: "+600%",
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
                start: "+1020%",
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
                
                <p ref={text1Ref} className={styles.about_text}>With a B.Sc. in Psychology and specialized training in Energetic Emotional Healing, my approach is both intuitive and anchored in nervous system understanding, emotional safety, and deep energetic work.</p>
                
                <p ref={text2Ref} className={styles.about_text}>My work is here to help you break free from what’s holding you back, soothe your nervous system, and step boldly into your inner strength, clarity, and unstoppable power.</p>
                
                <p ref={text3Ref} className={styles.about_text}>Through a blend of energy work, somatic regulation, and intuitive guidance, every session is designed to bring you back into alignment — emotionally, energetically, and physically.</p>
            </div>
            
            <div className={styles.final_section} ref={finalSectionRef}>
                <p ref={youTextRef} className={styles.about_you_text}>Your Turn, in der du dich auf dich selbst konzentrierst und dich in deiner inneren Welt begegnen kannst.</p>
            </div>
        </div>
    )
}