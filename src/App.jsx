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
        <ProjectShowcase title="Agua Buena" body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptas perspiciatis reprehenderit, rerum sapiente tenetur incidunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ducimus animi expedita maiores blanditiis incidunt ad tenetur aut alias vel, magnam, consectetur atque voluptas possimus molestiae eius explicabo harum tempora?" image="placeholder.jpg" imageAlt="Pueblos originarios" />
        <ProjectShowcase title="Arbolar" body=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptas perspiciatis reprehenderit, rerum sapiente tenetur incidunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ducimus animi expedita maiores blanditiis incidunt ad tenetur aut alias vel, magnam, consectetur atque voluptas possimus molestiae eius explicabo harum tempora?" inverted={true} embedYoutubeUrl="https://www.youtube.com/embed/t3YScTL0pvo?si=DBBz0R2A-SD-pwn2" />
        <ProjectShowcase title="Investigación" body=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptas perspiciatis reprehenderit, rerum sapiente tenetur incidunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ducimus animi expedita maiores blanditiis incidunt ad tenetur aut alias vel, magnam, consectetur atque voluptas possimus molestiae eius explicabo harum tempora?" image="placeholder.jpg" imageAlt="Pueblos originarios" />
        <ProjectShowcase title="Hospital Móvil" body=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptas perspiciatis reprehenderit, rerum sapiente tenetur incidunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ducimus animi expedita maiores blanditiis incidunt ad tenetur aut alias vel, magnam, consectetur atque voluptas possimus molestiae eius explicabo harum tempora?" inverted={true} embedYoutubeUrl="https://www.youtube.com/embed/t3YScTL0pvo?si=DBBz0R2A-SD-pwn2" />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
