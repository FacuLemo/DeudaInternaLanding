import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import InstagramFeed from "./components/InstagramFeed";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FacebookFeed from "./components/FacebookFeed";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <InstagramFeed />
        <FacebookFeed />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
