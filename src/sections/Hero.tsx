import { useEffect, useRef, useState } from "react";
import styles from "./styles/hero.module.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TOTAL_FRAMES = 225;

const Hero = () => {
    const [images, setImages] = useState([]);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const frameImages = [];
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
        const context = canvas?.getContext("2d");

        const scale = window.devicePixelRatio || 1;
        canvas.width = 1920 * scale;
        canvas.height = 1080 * scale;
        context?.scale(scale, scale);

        const frameState = {
            frame: 0
        }

        const render = () => {
            const img = images[frameState.frame];
            if(img?.complete){
                context?.clearRect(0, 0, canvas?.width, canvas?.height);
                context?.drawImage(img, 0, 0, canvas.width / scale, canvas?.height / scale);
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
                    borderRadius: "18px",
                    width: "100%",
                    height: "100%",
                    zIndex: 1,
                }}
            />
            <div className={styles.hero_logo}>
                <span>LL</span>
            </div>

            <div className={styles.navbar}>
                    <li>_Intro</li>
                    <li>_FAQ</li>
            </div>

            <div className={styles.hero_text}>
                <h1>Calmverse</h1>
                <p>Die Tür zu deinem Universum  – ein Raum, in dem du deiner inneren Welt begegnen, dich erforschen und Geborgenheit finden darfst. Hier öffnet sich Weite, wo sonst Enge herrscht, und Stille, wo sonst Lärm ist.</p>
            </div>
            
            <div className={styles.hero_cta}>
                <button>Jetzt eintreten</button>
            </div>
        </div>
    )
}

export default Hero;