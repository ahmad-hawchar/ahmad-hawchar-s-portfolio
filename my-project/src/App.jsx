import "./App.css";
import Header from "../components/header";
import About from "../components/about";
import Languages from "../components/languages";
import Projects from "../components/projects";
import Experience from "../components/Experience";
import Links from"../components/links"
import Contact from"../components/contact"
function App() {
  return (
    <>
      <Header link='http://localhost:5173'></Header>
      <Links></Links>
      <About></About>
      <Languages></Languages>
      <Projects></Projects>
      <Experience></Experience>
      <Contact></Contact>
    </>
  );
}

export default App;
