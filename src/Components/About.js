import React from "react";
import Doctor from "../Assets/doctor-group.png";
import DoctorCard from "./HolderCard";
import profile1 from "../Assets/profile-1.png";
import profile2 from "../Assets/profile-2.png";
import profile3 from "../Assets/profile-3.png";
import profile4 from "../Assets/profile-4.png";
import "../Styles/Holders.css"
import SolutionStep from "./SolutionStep";
import "../Styles/About.css";

function About() {
  return (
    <section>
    <div className="about-section" id="about">
      <div className="about-image-content">
        <img src={Doctor} alt="Athletic" className="about-image1" />
      </div>

      <div className="about-text-content">
        <h3 className="about-title">
          <span>About Us</span>
        </h3>
        <p className="about-description">
          adsfuawefdasdjxkwejiduuyffugdsvxwduqyviewlqwickqiewjijwdkcnmdkldcqwegci
          qcwefcuqwedioqweciwdqgcwfoiwrjuoijiihirfqwgcfiuuedcf
          cqwecggedfvcywidcuiehwuciqhwied.
        </p>

        <h4 className="about-text-title">details</h4>

        <SolutionStep
          title="point 1"
          description="ajhecdweujncdiwkejmxcokxlm,welo."
        />

        <SolutionStep
          title="point 2"
          description="jkhnjwdhcfquwejdiqwefoiewmdcpqwdokcpodsl,cxoqweidpofecm;weldwekdj."
        />

        <SolutionStep
          title="point 3"
          description="kljeiqudfqjoiwexdjmjioqweefyqoweixcjmllwdovcqpoutgfoweicfgqiwgefqouefguwef."
        />
      </div>
    </div>


<div className="holders-section" id="holders">
      <div className="dt-title-content">
        <h3 className="dt-title">
          <span>Holders</span>
        </h3>

        <p className="dt-description">
          jaediuwednmqiwjdnmiwuerfjduirewyhruiwdjcmakwltyruewakvbdns
          eyruidostreyuwsijgdhjsk cnmxdehjskfgdjhskaedysjdhjskx zsjhqkeuwiqko
          yueiwkscbxdnfcn ehjkruedjskfbdnsmuwikcd fbxnejdsedwjskawsnaefdbnseridk
          yrujdkvcbdxnmureiak.
        </p>
      </div>

      <div className="dt-cards-content">
        <DoctorCard
          img={profile1}
          name="name of the person"
          title="Podobi"
        />
        <DoctorCard
          img={profile2}
          name="name of the person"
          title="Podobi"
        />
        <DoctorCard
          img={profile3}
          name="name of the person"
          title="Podobi"
        />
        <DoctorCard
          img={profile4}
          name="name of the person"
          title="Podobi"
        />
      </div>
    </div>
    </section>
  );
}

export default About;
