import { createFileRoute } from '@tanstack/react-router';
import styles from "../sections/styles/about.module.scss";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import IMG from '../assets/images/img3.jpeg'
import { useRef } from 'react';

const AboutImage = "/assets/images/img3.jpeg";

gsap.registerPlugin(useGSAP);

export const Route = createFileRoute('/about')({
    component: () => <About />,
})

const About = () => {

    const revealRef = useRef<HTMLDivElement>(null);
    const imgRef = useRef<HTMLImageElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);

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
        .from(titleRef.current, {
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
                </section>
                <section className={styles.right}>
                    <div className={styles.about_text_wrapper}>
                        <p className={styles.about_text}>With a B.Sc. in Psychology and specialized training in Energetic Emotional Healing, my approach is both intuitive and anchored in nervous system understanding, emotional safety, and deep energetic work.</p>
                        <p className={styles.about_text}>My work is here to help you break free from what’s holding you back, soothe your nervous system, and step boldly into your inner strength, clarity, and unstoppable power.</p>
                        <p className={styles.about_text}>Through a blend of energy work, somatic regulation, and intuitive guidance, every session is designed to bring you back into alignment — emotionally, energetically, and physically.</p>
                    </div>

                    <div className={styles.story_wrapper}>
                        <p>sadasds asd ads da d dasdasdad saasdasdd</p>
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