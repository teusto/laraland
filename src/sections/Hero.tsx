import styles from "./styles/hero.module.scss";

const Hero = () => {
    return (
        <div className={styles.hero_wrapper}>
            <div className={styles.hero_logo}>
                <span>LL</span>
            </div>
            
            <div className={styles.hero_cta}>
                <button>Get Started</button>
            </div>
        </div>
    )
}

export default Hero;