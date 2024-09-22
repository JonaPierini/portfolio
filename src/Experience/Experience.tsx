import "./Experience.css";
import { Element } from "react-scroll";

export const Experience = () => {
  return (
    <div className="container-experience">
      <Element name="Experience">
        <h2>Experience</h2>
        <ul className="experience-list">
          <li>
            <span className="job-title">Developer</span> - Leasba -
            <span className="date">05/2024 - Present</span>
          </li>
          <li>
            <span className="job-title">Developer</span> - Portal Salud S.A. -{" "}
            <span className="date">02/2023 - 05/2024</span>
          </li>
          <li>
            <span className="job-title">Learning Support Teacher</span> -
            Escuela IT - <span className="date">06/2023 - 03/2024</span>
          </li>
          <li>
            <span className="job-title">Learning Support Teacher</span> -
            CoderHouse - <span className="date">01/2021 - 01/2024</span>
          </li>
          <li>
            <span className="job-title">Developer</span> - Endava -{" "}
            <span className="date">01/2022 - 02/2023</span>
          </li>
          <li>
            <span className="job-title">Developer</span> - Commerce Employees
            Association - <span className="date">02/2021 - 12/2022</span>
          </li>
        </ul>
      </Element>
    </div>
  );
};
