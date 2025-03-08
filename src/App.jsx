import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import FirstPage from "./components/FirstPage";
import Footer from "./components/Footer";
import HamburgerNav from "./components/HamburgerNav";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import "./mediaqueries.css";
import "./style.css";

function App() {
  return (
    <>
      <div>
        <FirstPage />
        <HamburgerNav />
        <Profile />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
