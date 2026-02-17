import { createFileRoute } from '@tanstack/react-router';
import styles from "../sections/styles/about.module.scss";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import IMG from '../assets/images/img3.jpeg'
import { useRef } from 'react';
import { useLocale } from '../i18n/LocaleContext';
import LanguageSwitcher from '../i18n/LanguageSwitcher';

//const AboutImage = "/assets/images/img3.jpeg";

gsap.registerPlugin(useGSAP);

export const Route = createFileRoute('/about')({
    component: () => <About />,
})

const About = () => {
    const { t, tArray } = useLocale();
    const paragraphs = tArray("about.paragraphs");

    const revealRef = useRef<HTMLDivElement>(null);
    const imgRef = useRef<HTMLImageElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const titleMobileRef = useRef<HTMLHeadingElement>(null);

    useGSAP(() => {
        // Timeline configuration
        const tl = gsap.timeline({
            defaults: { ease: 'power3.inOut' }
        });

        // Step 1: Image reveal animation (overlay slides off from left)
        tl.to(revealRef.current, {
            '--overlay-scale': 0,          // Animate overlay scale to 0
            duration: 1.2,                 // Animation duration
            delay: 0.3                     // Initial delay before animation starts
        })

            // Step 2: Image scale effect (runs simultaneously with overlay)
            .from(imgRef.current, {
                scale: 1.25,                   // Start scaled up
                duration: 1.2,                 // Match overlay duration
                ease: 'power2.out'             // Smooth deceleration
            }, '<')                            // '<' makes it start at the same time as previous animation

            // Step 3: Title fade-in (runs after image reveal completes)
            .from([titleRef.current, titleMobileRef.current], {
                opacity: 0,                    // Start invisible
                y: 10,                         // Start 20px lower
                duration: 0.8,                 // Fade-in duration
                ease: 'power2.out'             // Smooth deceleration
            }, '+.8');                                // No position label = runs after previous animation
    })

    return (
        <div className={styles.about}>
            <div style={{ position: 'fixed', top: '1rem', right: '1rem', zIndex: 100 }}>
                <LanguageSwitcher />
            </div>
            <section className={styles.top}>
                <section className={styles.left}>
                    <div className={styles.image_wrapper} ref={revealRef}>
                        <img className={styles.img} src={IMG} ref={imgRef} />
                    </div>
                    <div className={styles.title_wrapper_mobile}>
                        <h2 className={styles.about_title} ref={titleMobileRef}>{t("about.titleMobile")}</h2>
                    </div>
                </section>
                <section className={styles.right}>
                    <div className={styles.about_text_wrapper}>
                        {paragraphs.map((p, i) => (
                            <p key={i} className={styles.about_text} dangerouslySetInnerHTML={{ __html: p }} />
                        ))}
                    </div>

                    <div className={styles.story_wrapper}>
                        <p>{t("about.story")}</p>
                    </div>
                </section>
            </section>

            <section className={styles.bottom}>
                <div className={styles.title_wrapper}>
                    <h2 className={styles.about_title} ref={titleRef}>{t("about.titleDesktop")}</h2>
                </div>

                <div className={styles.final_section}>
                    <p className={styles.about_you_text}>{t("about.finalText")}</p>
                    <a href="https://calendly.com/laralensdorf/30min" target="_blank" rel="noopener noreferrer" className={styles.contacts_content_cta} >{t("about.finalCta")}</a>
                </div>
            </section>
        </div>
    )
}