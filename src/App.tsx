import Hero from "./sections/Hero";
import Cards from "./sections/Cards";
import Options from "./sections/Options";
import Faq from "./sections/Faq";
import Text from "./sections/Text";
import Footer from "./sections/Footer";
import Intro from "./sections/Intro";
import Explanation from "./sections/Explanation";
import { motion } from "motion/react"

const App = () => {
  return (
    <div id="App">
      <div style={{ width: "100vw", maxWidth: "100vw", height: "100vh", padding: "2rem" }}>
        <Hero />
      </div>
      <div style={{ width: "100vw", maxWidth: "100vw", height: "100vh", padding: "2rem" }}>
        <Text />
      </div>
      <div style={{ width: "100vw", maxWidth: "100vw", padding: "2rem" }}>
        <Cards />
      </div>
      <div style={{ width: "100vw", maxWidth: "100vw", padding: "2rem" }}>
        <Options />
      </div>
      <motion.div whileInView={{ backgroundColor: "#131313" }} transition={{ duration: .8 }}>
        <div style={{ width: "100vw", maxWidth: "100vw", padding: "5rem 2rem" }}>
          <Intro />
        </div>
        <div style={{ width: "100vw", maxWidth: "100vw", padding: "2rem" }}>
          <Explanation />
        </div>
        <div style={{ width: "100vw", maxWidth: "100vw", padding: "2rem" }}>
          <Faq />
        </div>
        <div style={{ width: "100vw", maxWidth: "100vw", padding: "2rem" }}>
          <Footer />
        </div>
      </motion.div>
    </div>
  )
}

export default App;