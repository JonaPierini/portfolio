import { Element } from "react-scroll";
import "./Work.css";

export const Work = () => {
  return (
    <div className="container-work">
      <Element name="Work">
        <h2>Work</h2>
        <div className="parent">
          <div className="div1">
            <a
              href="https://truware.tech/es/inicio/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>TruwareTech</h4>
              <p>
                TruwareTech is a company specializing in the sale of innovative
                software, designed to meet the needs of various industries. With
                a focus on quality and efficiency, TruwareTech offers customized
                solutions that help organizations optimize their processes and
                enhance their productivity.
              </p>
            </a>
          </div>
          <div className="div2">
            <a
              href="https://test-patient-web.wehealthy.ar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>WeHealthy</h4>
              <p>
                WeHealthy is a company specializing in health solutions
                delivered through a comprehensive platform, designed to meet the
                diverse needs of individuals and organizations. With a focus on
                quality and accessibility, WeHealthy offers personalized
                services that empower users to optimize their well-being and
                enhance their overall health.
              </p>
            </a>
          </div>
          <div className="div3">
            <a
              href="https://verbotranslations.com/es/inicio/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>Verbo Translation</h4>
              <p>
                Verbo Translation is a company that provides translations for
                words, manuals, books, and more. With a focus on accuracy and
                attention to detail, Verbo Translation ensures that all
                translated materials meet the highest standards, helping clients
                effectively communicate across languages and cultures.
              </p>
            </a>
          </div>
          <div className="div4">
            <a
              href="https://www.aecrosario.org.ar/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>Commerce Employees Association</h4>
              <p>
                Commerce Employees Association is an organization that brings
                together all commerce workers and provides a platform for
                employers to submit their employees' contribution slips and
                generate payments. With a focus on facilitating compliance and
                streamlining administrative processes, Commerce Employees
                Association aims to support both employers and employees in
                managing their contributions effectively.
              </p>
            </a>
          </div>
          <div className="div5">
            <a
              href="https://jonapierini.github.io/ProyectoHouse/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>P.H. Proyecto House</h4>
              <p>
                Proyecto Hause is a website dedicated to selling home design
                solutions, specializing in decoration and interior styling. With
                a focus on creativity and aesthetics, Proyecto Hause offers a
                wide range of products and services to help customers transform
                their living spaces into stylish and functional environments.
              </p>
            </a>
          </div>
          <div className="div6">
            <a
              href="https://jonapierini.github.io/SimuladorPrestamo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>FacCredit</h4>
              <p>
                FacCredit is a website that allows users to simulate loan
                options. With a user-friendly interface, FacCredit provides
                various tools and calculators to help individuals assess their
                financing needs, compare different loan scenarios, and make
                informed decisions about borrowing.
              </p>
            </a>
          </div>
        </div>
      </Element>
    </div>
  );
};
