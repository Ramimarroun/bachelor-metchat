import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./img/Logo.svg";
import { HiBars3 } from "react-icons/hi2";
import Login from "./components/login";
import Register from "./components/Register";
import "./home.css";

function Welcome() {
  const [showLogin, setShowLogin] = useState(true);

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const handleRegisterClick = () => {
    setShowLogin(false);
  };
  /* Toggle Nav*/
  const [showLinks, setShowLinks] = useState(false);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <>
      <nav className="nav-center">
        <div className="nav-header">
          <a href="index.html">
            <img src={Logo} alt="logo" />
          </a>

          <a className="push" href="">
            Om Oss
          </a>

          <HiBars3 className="nav-toggle" onClick={toggleLinks} />
        </div>

        <ul
          className={
            showLinks ? "links-container show-container" : "links-container"
          }
        >
          <li>
            <a href="">Om Oss</a>
          </li>
        </ul>
      </nav>

      <section id="forms">
        <div id="lines_1">
          <img src="Lines.png" alt="pyntelinjer" />
        </div>

        <div className="log-reg">
          <div className="btn-container">
            <button
              className="tab-btn active"
              data-id="log_in"
              onClick={handleLoginClick}
            >
              Logg Inn
            </button>
            <button
              className="tab-btn reg"
              data-id="reg"
              onClick={handleRegisterClick}
            >
              Registrer
            </button>
          </div>

          <div className="log-reg-content">
            {showLogin ? <Login /> : <Register />}
          </div>
        </div>
      </section>

      <div className="model-overlay">
        <div className="scroll-div">
          <div className="heading">
            <p>Vilkår for tjenesten</p>
          </div>
          <div className="scroll-div-object">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Repellendus expedita iusto, eaque, aut maiores quas at unde
              delectus eius voluptatum, corrupti ex vitae commodi dolorem in
              quaerat cumque labore repellat!
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Repellendus expedita iusto, eaque, aut maiores quas at unde
              delectus eius voluptatum, corrupti ex vitae commodi dolorem in
              quaerat cumque labore repellat!
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Repellendus expedita iusto, eaque, aut maiores quas at unde
              delectus eius voluptatum, corrupti ex vitae commodi dolorem in
              quaerat cumque labore repellat!
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Repellendus expedita iusto, eaque, aut maiores quas at unde
              delectus eius voluptatum, corrupti ex vitae commodi dolorem in
              quaerat cumque labore repellat!
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Repellendus expedita iusto, eaque, aut maiores quas at unde
              delectus eius voluptatum, corrupti ex vitae commodi dolorem in
              quaerat cumque labore repellat!
            </p>
          </div>
          <div className="btns">
            <div>
              <input type="checkbox" />
              <label> Jeg har lest alt, og samtrykker..</label>
            </div>

            <div>
              <button className="btn">Tilbake</button>
              <a href="interests.html">
                <button className="btn">Gå Videre</button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <section id="persons-img">
        <img id="photo" src="photo.png" alt="personer som snakker" />
      </section>

      <section id="third">
        <img src="Lines_2.png" alt="lines" />
      </section>

      <section id="nlp">
        <img src="BubbleBox.png" alt="bobleramme" />
        <div className="contents">
          <h2>Hva Er NLP</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ab
            placeat saepe? Ex, maxime! Quis, commodi. Labore error iusto a,
            ipsa, optio architecto vero aperiam nesciunt facilis pariatur,
            nostrum itaque.
          </p>
          <button className="btn"> Les mer..</button>
        </div>
      </section>

      <section id="fifth">
        <img src="Lines.png" alt="lines" />
      </section>

      <footer>
        <p>Laget av Rami, Narges, Aina Og Fatima</p>
      </footer>
    </>
  );
}

export default Welcome;
