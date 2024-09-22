import "./Contact.css";
import { Element } from "react-scroll";

export const Contact = () => {
  return (
    <div className="container-contact">
      <Element name="Contact">
        <h2>Contact</h2>
        <h1>
          LET'S WORK <br></br> TOGETHER
        </h1>
        <a
          className="email-link"
          href="mailto:jonapierini@gmail.com?subject=I wanted to conect with you%20there&body=I%20wanted%20to%20reach%20out%20to%20you."
          target="_blank"
        >
          Email
        </a>
        <br />
        <a
          className="linkedin-link"
          href="https://www.linkedin.com/in/jonatanpierini-/"
          target="_blank"
        >
          Linkedin
        </a>
      </Element>
    </div>
  );
};
