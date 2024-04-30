import React, { useEffect, useState } from "react";
import Doctor from "../Assets/doctor-picture.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useNavigate  } from "react-router-dom";
import "../Styles/Hero.css";

function Hero() {
  const navigate = useNavigate();
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleRegistationClick = () => {
    navigate("/Registation");
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.scrollY > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <div className="section-container">
      <div className="hero-section">
        <div className="text-section">
          <p className="text-headline">❤️ Sports</p>
          <h2 className="text-title">
            akta headline
          </h2>
          <p className="text-descritpion">
            ditls
          </p>
          <button
            className="text-appointment-btn"
            type="button"
            onClick={handleRegistationClick}
          >
            <FontAwesomeIcon icon={faCalendarCheck} /> Registetion
          </button>
          <div className="text-stats">
            <div className="text-stats-container">
              <p>2.4k</p>
              <p>Register</p>
            </div>

            <div className="text-stats-container">
              <p>20+</p>
              <p>Coach</p>
            </div>

            <div className="text-stats-container">
              <p>30+</p>
              <p>Winers</p>
            </div>
          </div>
        </div>

        <div className="hero-image-section">
          <img className="hero-image1" src={Doctor} alt="Doctor" />
        </div>
      </div>

      <div
        onClick={scrollToTop}
        className={`scroll-up ${goUp ? "show-scroll" : ""}`}
      >
        <FontAwesomeIcon icon={faAngleUp} />
      </div>
    </div>
  );
}

export default Hero;
