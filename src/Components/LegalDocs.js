import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/LegalDocs.css";

function LegalDocs() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  return (
    <div className="legal-section-title">
      <h1 className="legal-siteTitle">
        <Link to="/">
          Sports <span className="legal-siteSign">Add</span>
        </Link>
      </h1>

      <div className="legal-text-content">
        <p className="legal-title">General Info</p>
        <p className="legal-description">
          wertyuiosdfghjkwertyuiodrtfgyuhjikoasdeawertyuiopasdfghjklasdfghujik
          ertyuiopssdfghjkertyuiozsxcvbnmsdrtyuiuyrewqaszxcvbnmkuiytrewqaszxdcv
           wertyuiosdfghjkwertyuiodrtfgyuhjikoasdeawertyuiopasdfghjklasdfghujik
          ertyuiopssdfghjkertyuiozsxcvbnmsdrtyuiuyrewqaszxcvbnmkuiytrewqaszxdcv
        </p>

        <p className="legal-title">Privacy Policy</p>
        <p className="legal-description">
          wertyuioasdfghjklqwertyuiopzxcvbnm,asdfghjkertyuioawertyuisdfghjklweeeertr
          sdfrtgyuhiooooowdgfwooooooooooemoiryyyyyyyyyyyyyyyyyyyyyyyyyyywdcwcmwocrirr
           wertyuiosdfghjkwertyuiodrtfgyuhjikoasdeawertyuiopasdfghjklasdfghujik
          ertyuiopssdfghjkertyuiozsxcvbnmsdrtyuiuyrewqaszxcvbnmkuiytrewqaszxdcv
        </p>

        <p className="legal-title">Terms of Service</p>
        <p className="legal-description">
        wertyuiosdfghjkwertyuiodrtfgyuhjikoasdeawertyuiopasdfghjklasdfghujik
          ertyuiopssdfghjkertyuiozsxcvbnmsdrtyuiuyrewqaszxcvbnmkuiytrewqaszxdcv
          wertyuiosdfghjkwertyuiodrtfgyuhjikoasdeawertyuiopasdfghjklasdfghujik
          ertyuiopssdfghjkertyuiozsxcvbnmsdrtyuiuyrewqaszxcvbnmkuiytrewqaszxdcv
        </p>

        <p className="legal-title">Consultations</p>
        <p className="legal-description">
        wertyuiosdfghjkwertyuiodrtfgyuhjikoasdeawertyuiopasdfghjklasdfghujik
          ertyuiopssdfghjkertyuiozsxcvbnmsdrtyuiuyrewqaszxcvbnmkuiytrewqaszxdcv
          wertyuiosdfghjkwertyuiodrtfgyuhjikoasdeawertyuiopasdfghjklasdfghujik
          ertyuiopssdfghjkertyuiozsxcvbnmsdrtyuiuyrewqaszxcvbnmkuiytrewqaszxdcv
        </p>

        <p className="legal-title">How it Works</p>
        <p className="legal-description">
        wertyuiosdfghjkwertyuiodrtfgyuhjikoasdeawertyuiopasdfghjklasdfghujik
          ertyuiopssdfghjkertyuiozsxcvbnmsdrtyuiuyrewqaszxcvbnmkuiytrewqaszxdcv
          medical facility.
          wertyuiosdfghjkwertyuiodrtfgyuhjikoasdeawertyuiopasdfghjklasdfghujik
          ertyuiopssdfghjkertyuiozsxcvbnmsdrtyuiuyrewqaszxcvbnmkuiytr
        </p>
      </div>

      <div className="legal-footer">
        <p>© 2024. Mirza Sabrin</p>
      </div>
    </div>
  );
}

export default LegalDocs;
