
import "./App.css";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Hero from "./components/hero/Hero";
import { Navbar } from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";

function App() {
  return (
    <div className="App">
<Navbar />
<Hero />
<About />
<Experience />
<Projects />

    </div>
  );
}

export default App;
