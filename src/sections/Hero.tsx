import { useEffect, useRef, useState } from "react";
import styles from "./styles/hero.module.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "@tanstack/react-router";
import Logo from "../assets/images/logo.png"; 

gsap.registerPlugin(ScrollTrigger);

const TOTAL_FRAMES = 217;

const Hero = () => {
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const frameImages: HTMLImageElement[] = [];
        for (let i = 1; i <= TOTAL_FRAMES; i++) {
            const img = new Image();
            // Use absolute path from public directory (Vite best practice)
            img.src = `/assets/videos/frames/frame_${String(i).padStart(4, "0")}.jpg`;
            frameImages.push(img);
        }
        setImages(frameImages);
    }, [])

    useEffect(() => {
        if (images.length === 0) return;

        const canvas = canvasRef.current;
        if (!canvas) return;

        const context = canvas.getContext("2d");
        if (!context) return;

        // Make canvas responsive based on container size
        const updateCanvasSize = () => {
            const scale = window.devicePixelRatio || 1;
            const rect = canvas.getBoundingClientRect();
            canvas.width = rect.width * scale;
            canvas.height = rect.height * scale;
            context.scale(scale, scale);
        };

        updateCanvasSize();

        window.addEventListener('resize', updateCanvasSize);

        const frameState = {
            frame: 0
        }

        const render = () => {
            const img = images[frameState.frame];
            const scale = window.devicePixelRatio || 1;
            if(img?.complete){
                context.clearRect(0, 0, canvas.width, canvas.height);
                
                // Implement object-fit: cover behavior
                const canvasWidth = canvas.width / scale;
                const canvasHeight = canvas.height / scale;
                const canvasAspect = canvasWidth / canvasHeight;
                const imgAspect = img.width / img.height;
                
                let drawWidth, drawHeight, offsetX, offsetY;
                
                if (imgAspect > canvasAspect) {
                    // Image is wider - fit to height and crop sides
                    drawHeight = canvasHeight;
                    drawWidth = img.width * (canvasHeight / img.height);
                    offsetX = (canvasWidth - drawWidth) / 2;
                    offsetY = 0;
                } else {
                    // Image is taller - fit to width and crop top/bottom
                    drawWidth = canvasWidth;
                    drawHeight = img.height * (canvasWidth / img.width);
                    offsetX = 0;
                    offsetY = (canvasHeight - drawHeight) / 2;
                }
                
                context.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
            }
        };

        const mm = gsap.matchMedia();

        // Desktop: Scroll-bound animation (min-width: 769px to match CSS breakpoint)
        mm.add("(min-width: 769px)", () => {
            gsap.to(frameState, {
                frame: TOTAL_FRAMES - 1,
                snap: "frame",
                ease: "none",
                scrollTrigger: {
                    start: "top top",
                    end: "900px",
                    scrub: true,
                },
                onUpdate: render,
            });
        });

        // Mobile: Autoplay animation (max-width: 768px to match CSS breakpoint)
        mm.add("(max-width: 768px)", () => {
            gsap.to(frameState, {
                frame: TOTAL_FRAMES - 1,
                snap: "frame",
                ease: "none",
                duration: 4, // Play sequence over 4 seconds
                onUpdate: render,
            });
        });

        images[0].onload = render;
        if(images[0].complete){
            render();
        };

        return () => {
            window.removeEventListener('resize', updateCanvasSize);
            mm.revert();
        };

    }, [images]);

    console.log(images);

    return (
        <div className={styles.hero_wrapper}>
            <canvas 
                ref={canvasRef}
                style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    zIndex: 1,
                }}
            />
            <div className={styles.hero_logo}>
                <img src={Logo} alt="Logo" />
            </div>

            <div className={styles.navbar}>
                    <li onClick={() => window.scrollTo({ top: document.getElementById("intro")?.offsetTop, behavior: "smooth" })}>Intro</li>
                    <li onClick={() => window.scrollTo({ top: document.getElementById("kurse")?.offsetTop, behavior: "smooth" })}>Help</li>
                    <li onClick={() => window.scrollTo({ top: document.getElementById("kontakt")?.offsetTop, behavior: "smooth" })}>Contact</li>
                    <li><Link to="/about">About</Link></li>
            </div>

            <div className={styles.hero_text}>
                <h1>LARA LENSDORF</h1>
                <p>
                    Your safe space for inner exploration and healing — where you are supported in reconnecting with yourself. Here, tension softens into openness, and inner noise gives way to clarity and calm.
                    <br /><br />
                    Sessions in English and German
                </p>
            </div>
            
            <div className={styles.hero_cta}>
                <a href="https://calendly.com/laralensdorf/30min" target="_blank" rel="noopener noreferrer" >I Want To Evolve</a>
            </div>
        </div>
    )
}

export default Hero;