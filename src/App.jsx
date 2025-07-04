import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import FirstVideo from "./sections/FirstVideo";
import JasonDuval from "./sections/JasonDuval";
import SecondVideo from "./sections/SecondVideo";
import LuciaCaminos from "./sections/LuciaCaminos";
import PostCard from "./sections/PostCard";
import FinalVideo from "./sections/FinalVideo";
import Outro from "./sections/Outro";
gsap.registerPlugin(ScrollTrigger);
function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <FirstVideo />
      <JasonDuval />
      <SecondVideo />
      <LuciaCaminos />
      <PostCard />
      <FinalVideo />
      <Outro />
    </main>
  );
}

export default App;
