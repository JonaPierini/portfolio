import { About } from "../src/About/About";
import { Contact } from "../src/Contact/Contact";
import { Experience } from "../src/Experience/Experience";
import { Hello } from "../src/Hello/Hello";
import { NavBar } from "../src/NavBar/NavBar";
import { Work } from "../src/Work/Work";
import "./App.css";

export const App = () => {
  return (
    <div>
      <NavBar />
      <div style={{ marginLeft: "2rem", marginRight: "2rem" }}>
        <Hello />
        <Work />
        <About />
        <Experience />
        <Contact />
      </div>
    </div>
  );
};
