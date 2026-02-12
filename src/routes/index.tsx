import { createFileRoute } from '@tanstack/react-router'
import Hero from "../sections/Hero";
import Options from "../sections/Options";
import Text from "../sections/Text";
import Footer from "../sections/Footer";
import Intro from "../sections/Intro";
import Explanation from "../sections/Explanation";
import Contacts from "../sections/Contacts";
import { motion } from "motion/react"
import styles from "./styles/index.module.scss";
import NewCards from "../sections/NewCards";

export const Route = createFileRoute('/')({
  component: () => <Home />,
})

const Home = () => {
  return (
    <div id="App" className={styles.app_wrapper}>
      <div className={styles.section_hero}>
        <Hero />
      </div>
      <div className={styles.section_text}>
        <Text />
      </div>
      <div className={styles.section}>
        <Explanation />
      </div>
      <div className={styles.section} id="kurse">
        <NewCards />
      </div>
      <div className={styles.section}>
        <Options />
      </div>
      <motion.div whileInView={{ backgroundColor: "#290d2aff" }} transition={{ duration: .8 }}>
        <div className={styles.section_large} id="intro">
          <Intro />
        </div>
        <div className={styles.section_large} id="kontakt">
          <Contacts />
        </div>
        {/* <div className={styles.section_faq} id="faq">
          <Faq />
        </div> */}
        <div className={styles.section}>
          <Footer />
        </div>
      </motion.div>
    </div>
  )
}
