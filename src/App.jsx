import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import FirstVideo from "./sections/FirstVideo";

gsap.registerPlugin(ScrollTrigger);
function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <FirstVideo />
    </main>
  );
}

export default App;
