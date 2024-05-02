import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/AppointmentForm.css";
import { ToastContainer, toast } from "react-toastify";
import Footer from "./Footer";

function AppointmentForm() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const [Name, setName] = useState("");
  const [Number, setNumber] = useState("");
  const [Gender, setGender] = useState("default");
  const [Birthdate, setBirthdate] = useState("");
  const [Address, setAddress] = useState("");
  const [Religion, setReligion] = useState("default");
  const [Nationality, setNationality] = useState("default");
  const [Event, setEvent] = useState("default");
  const [Institute, setInstitute] = ("default");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form inputs
    const errors = {};
    if (!Name.trim()) {
      errors.Name = "Name is required";
    } else if (Name.trim().length < 6) {
      errors.Name = "Name must be at least 6 characters";
    }

    if (!Number.trim()) {
      errors.Number = "phone number is required";
    } else if (Number.trim().length !== 10) {
      errors.Number = "phone number must be of 10 digits";
    }

    if (Gender === "default") {
      errors.Gender = "Please select gender";
    }
    if (!Birthdate) {
      errors.Birthdate = "Birthdate is required";
    } else {
      const selectedTime = new Date(Birthdate).getTime();
      const currentTime = new Date().getTime();
      if (selectedTime <= currentTime) {
        errors.Birthdate = "Please select your birthdate";
      }
    }
    if (!Address.trim()) {
      errors.Address = "Address is required";
    } else if (Address.trim().length < 10) {
      errors.Address = "Address must be at least 10 characters";
    }
    if (Religion === "default") {
      errors.Religion = "Please select your religion";
    }
    if (Nationality === "default") {
      errors.Nationality = "Please select your nationality";
    }
    if (Event === "default") {
      errors.Event = "Please select your event";
    }
    if (Institute === "default") {
      errors.Institute = "Please select your event";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // Reset form fields and errors after successful submission
    setName("");
    setNumber("");
    setGender("default");
    setBirthdate("");
    setAddress("");
    setReligion("");
    setNationality("");
    setEvent("");
    setInstitute("");
    setFormErrors({});

    toast.success("Registation successful !", {
      position: toast.POSITION.TOP_CENTER,
      onOpen: () => setIsSubmitted(true),
      onClose: () => setIsSubmitted(false),
    });
  };

  return (
    <div className="page-form">
    <div className="registation-form-section">
      <h1 className="legal-siteTitle">
        <Link to="/">
          Sports <span className="legal-siteSign">Add</span>
        </Link>
      </h1>

      <div className="form-container">
        <h2 className="form-title">
          <span>Registation Online</span>
        </h2>

        <form className="form-content" onSubmit={handleSubmit}>
          <label>
            Full Name:
            <input
              type="text"
              value={Name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            {formErrors.Name && <p className="error-message">{formErrors.Name}</p>}
          </label>

          <br />
          <label>
            Phone Number:
            <input
              type="text"
              value={Number}
              onChange={(e) => setNumber(e.target.value)}
              required
            />
            {formErrors.Number && <p className="error-message">{formErrors.Number}</p>}
          </label>

          <br />
          <label>
            Gender:
            <select
              value={Gender}
              onChange={(e) => setGender(e.target.value)}
              required
            >
              <option value="default">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            {formErrors.Gender && <p className="error-message">{formErrors.Gender}</p>}
          </label>

          <br />
          <label>
            Birth Date:
            <input
              type="datetime-local"
              value={Birthdate}
              onChange={(e) => setBirthdate(e.target.value)}
              required
            />
            {formErrors.Birthdate && <p className="error-message">{formErrors.Birthdate}</p>}
          </label>

          <br />
          <label>
            Adress:
            <input
              type="text"
              value={Address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
            {formErrors.Address && <p className="error-message">{formErrors.Address}</p>}
          </label>

          <br />
          <label>
            Religion:
            <select
              value={Religion}
              onChange={(e) => setReligion(e.target.value)}
              required
            >
              <option value="default">Select</option>
              <option value="Sprint">Sprint</option>
              <option value="Merathon">Merathon</option>
            </select>
            {formErrors.Religion && <p className="error-message">{formErrors.Religion}</p>}
          </label>

          <br />
          <label>
            Nationality:
            <select
              value={Nationality}
              onChange={(e) => setNationality(e.target.value)}
              required
            >
              <option value="default">Select</option>
              <option value="Bangladesh">Bangladesh</option>
              <option value="Nepal">Nepal</option>
            </select>
            {formErrors.Nationality && <p className="error-message">{formErrors.Nationality}</p>}
          </label>

          <br />
          <label>
            Event:
            <select
              value={Event}
              onChange={(e) => setEvent(e.target.value)}
              required
            >
              <option value="default">Select</option>
              <option value="Sprint">Sprint</option>
              <option value="Merathon">Merathon</option>
            </select>
            {formErrors.Event && <p className="error-message">{formErrors.Event}</p>}
          </label>

          <br />
          <label>
          Institute:
            <select
              value={Institute}
              onChange={(e) => setInstitute(e.target.value)}
              required
            >
              <option value="default">Select</option>
              <option value="BJMC">BJMC</option>
              <option value="Custoom">Custoom</option>
              <option value="Nave">Nave</option>
            </select>
            {formErrors.Institute && <p className="error-message">{formErrors.Institute}</p>}
          </label>

          <br />
          <button type="submit" className="text-appointment-btn">
            Register now !
          </button>

          <p className="success-message" style={{display: isSubmitted ? "block" : "none"}}>Appointment details has been sent to the patients phone number via SMS.</p>
        </form>
      </div>

      <div className="register-footer">
        <Footer />
      </div>

      <ToastContainer autoClose={5000} limit={1} closeButton={false} />
    </div>
  </div>
  );
}

export default AppointmentForm;
