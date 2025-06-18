import Hero from "./sections/Hero";
import Cards from "./sections/Cards";
import Options from "./sections/Options";

const App = () => {
  return (
    <div id="App">
      <div style={{ width: "100vw", maxWidth: "100vw", height: "100vh", padding: "2rem" }}>
        <Hero />
      </div>
      <div style={{ width: "100vw", maxWidth: "100vw", padding: "2rem" }}>
        <Cards />
      </div>
      <div style={{ width: "100vw", maxWidth: "100vw", padding: "2rem" }}>
        <Options />
      </div>
    </div>
  )
}

export default App;