import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Navbar from "./sections/Navbar";

gsap.registerPlugin(ScrollTrigger);
function App() {
  return (
    <main>
      <Navbar />
    </main>
  );
}

export default App;
