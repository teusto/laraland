import { useEffect, useRef, useState } from "react";
import styles from "./styles/hero.module.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
            img.src = `./src/assets/videos/frames/frame_${String(i).padStart(4, "0")}.jpg`;
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

        const frameState = {
            frame: 0
        }

        const render = () => {
            const img = images[frameState.frame];
            const scale = window.devicePixelRatio || 1;
            if(img?.complete){
                context.clearRect(0, 0, canvas.width, canvas.height);
                context.drawImage(img, 0, 0, canvas.width / scale, canvas.height / scale);
            }
        };

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

        images[0].onload = render;
        if(images[0].complete){
            render();
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
                    <li onClick={() => window.scrollTo({ top: document.getElementById("intro")?.offsetTop, behavior: "smooth" })}>_Intro</li>
                    <li onClick={() => window.scrollTo({ top: document.getElementById("kurse")?.offsetTop, behavior: "smooth" })}>_Help</li>
                    <li onClick={() => window.scrollTo({ top: document.getElementById("kontakt")?.offsetTop, behavior: "smooth" })}>Contact</li>
                    <li onClick={() => window.scrollTo({ top: document.getElementById("faq")?.offsetTop, behavior: "smooth" })}>_FAQ</li>
            </div>

            <div className={styles.hero_text}>
                <h1>Lara Lensdorf</h1>
                <p>Die Tür zu deinem Universum  – ein Raum, in dem du deiner inneren Welt begegnen, dich erforschen und Geborgenheit finden darfst. Hier öffnet sich Weite, wo sonst Enge herrscht, und Stille, wo sonst Lärm ist.</p>
            </div>
            
            <div className={styles.hero_cta}>
                <button>Jetzt eintreten</button>
            </div>
        </div>
    )
}

export default Hero;