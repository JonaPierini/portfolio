import { useEffect } from "react";
import "./NavBar.css";
import { Link } from "react-scroll";

export const NavBar = () => {
  // Desplamiento hasta el borde superior de la página

  const handleHight = () => {
    return document.querySelector("header")?.offsetHeight || 0;
  };

  useEffect(() => {
    handleHight();
  }, [document.querySelector("header")]);

  return (
    <div className="container-navBar">
      <ul className="logo-navBar">
        <li>Jona</li>
      </ul>
      <ul className="item-navBar">
        <Link
          activeClass="active"
          to="Work"
          spy={true}
          smooth={true}
          offset={handleHight() - 60}
        >
          Work
        </Link>
        <Link
          activeClass="active"
          to="About"
          spy={true}
          smooth={true}
          offset={handleHight() - 60}
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="Experience"
          spy={true}
          smooth={true}
          offset={handleHight() - 60}
        >
          Experience
        </Link>
        <Link
          activeClass="active"
          to="Contact"
          spy={true}
          smooth={true}
          offset={handleHight() - 60}
        >
          Contact
        </Link>
      </ul>
    </div>
  );
};
