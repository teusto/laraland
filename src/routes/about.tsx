import { createFileRoute } from '@tanstack/react-router';
import styles from "../sections/styles/about.module.scss";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import IMG from '../assets/images/img3.jpeg'
import { useRef } from 'react';

//const AboutImage = "/assets/images/img3.jpeg";

gsap.registerPlugin(useGSAP);

export const Route = createFileRoute('/about')({
    component: () => <About />,
})

const About = () => {

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
            <section className={styles.top}>
                <section className={styles.left}>
                    <div className={styles.image_wrapper} ref={revealRef}>
                        <img className={styles.img} src={IMG} ref={imgRef} />
                    </div>
                    <div className={styles.title_wrapper_mobile}>
                        <h2 className={styles.about_title} ref={titleMobileRef}>Hi im Lara Lensdorf</h2>
                    </div>
                </section>
                <section className={styles.right}>
                    <div className={styles.about_text_wrapper}>
                        <p className={styles.about_text}>I didn’t choose this work because it is trendy or spiritual.
                            I choose it because I live it.
                            <br />
                            For years, I experienced firsthand how unresolved emotional patterns, chronic stress, and unregulated nervous system states quietly shape our lives, our relationships, our bodies, and the way we show up in the world. I also learned that insight alone is not enough. Real change happens when the body feels safe enough to let go.</p>
                        <p className={styles.about_text}>My background in psychology, combined with specialized training in energetic and emotional healing, allows me to work on multiple levels at once: cognitive understanding, nervous system regulation, emotional processing, and subtle energetic alignment. This creates a grounded, safe, and deeply effective space for transformation.</p>
                        <p className={styles.about_text}>My sensititve and intuitive approach helps me detect what is present in your body while keeping the pace that respects your system and your boundaries.
                            <br />
                            <br />
                            This work is not about fixing you.
                            It is about helping you release what no longer belongs to you, regulate your nervous system, and reconnect with your inner clarity, strength, and self trust.</p>
                    </div>

                    <div className={styles.story_wrapper}>
                        <p>Every session is individualized. No formulas, no pressure, no performance.
                            Just honest presence, deep listening, and precise energetic and emotional work, so you can move forward feeling more grounded, aligned, and connected to yourself.

                            If you feel called to this work, it is usually because a part of you already knows something is ready to shift. I am more than happy to meet you!</p>
                    </div>
                </section>
            </section>

            <section className={styles.bottom}>
                <div className={styles.title_wrapper}>
                    <h2 className={styles.about_title} ref={titleRef}>_Hi im Lara Lensdorf</h2>
                </div>

                <div className={styles.final_section}>
                    <p className={styles.about_you_text}>Your Turn, Let's break free from what's holding you back. Book a quick introductory session to see how we can support you.</p>
                    <a href="https://calendly.com/laralensdorf/30min" target="_blank" rel="noopener noreferrer" className={styles.contacts_content_cta} >_Book a introductory session</a>
                </div>
            </section>
        </div>
    )
}