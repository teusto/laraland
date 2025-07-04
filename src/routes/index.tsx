import { createFileRoute } from '@tanstack/react-router'
import Hero from "../sections/Hero";
import Cards from "../sections/Cards";
import Options from "../sections/Options";
import Faq from "../sections/Faq";
import Text from "../sections/Text";
import Footer from "../sections/Footer";
import Intro from "../sections/Intro";
import Explanation from "../sections/Explanation";
import Contacts from "../sections/Contacts";
import { motion } from "motion/react"

export const Route = createFileRoute('/')({
  component: () => <Home />,
})

const Home = () => {
    return (
        <div id="App">
      <div style={{ width: "100vw", maxWidth: "100vw", height: "225vh", padding: "2rem", position: "relative" }}>
        <Hero />
      </div>
      <div style={{ width: "100vw", maxWidth: "100vw", height: "100vh", padding: "2rem" }}>
        <Text />
      </div>
      <div style={{ width: "100vw", maxWidth: "100vw", padding: "2rem" }}>
          <Explanation />
        </div>
      <div style={{ width: "100vw", maxWidth: "100vw", padding: "2rem" }} id="kurse">
        <Cards />
      </div>
      <div style={{ width: "100vw", maxWidth: "100vw", padding: "2rem" }}>
        <Options />
      </div>
      <motion.div whileInView={{ backgroundColor: "#000814" }} transition={{ duration: .8 }}>
        <div style={{ width: "100vw", maxWidth: "100vw", padding: "5rem 2rem" }} id="intro">
          <Intro />
        </div>
        <div style={{ width: "100vw", maxWidth: "100vw", padding: "5rem 2rem" }} id="kontakt">
          <Contacts />
        </div>
        <div style={{ width: "100vw", maxWidth: "100vw", padding: "5rem 2rem 2rem" }} id="faq">
          <Faq />
        </div>
        <div style={{ width: "100vw", maxWidth: "100vw", padding: "2rem" }}>
          <Footer />
        </div>
      </motion.div>
    </div>
    )
}
