import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";

import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectShowcase from "./components/ProjectShowcase";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <ProjectShowcase title="Agua" body="Agua para todos.etc Lorem lorem" />
        <ProjectShowcase title="Aire" body="Aire para todos.etc Lorem lorem" inverted={true} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
