import React from "react";
import azureImg from "../images/microsoft-azure-developer-associate-official-training-certification.png";
import seDegreeImg from "../images/Iowa_State_University_seal.svg.png";
import mbaAdmittanceImg from "../images/cuanschutz_c_clr.jpg";
import agenticAIImg from "../images/aidojo.png";

interface Achievement {
  date: string
  title: string
  imageUrl: string
  description: string
}

export default function Achievements() {
  const azure: Achievement = {
    date: "5/14/2026",
    title: "Az 204",
    imageUrl: azureImg,
    description: "I obtained the Azure Developer Associate certificate. Az 204"
  };
  const seDegree: Achievement = {
    date: "5/14/2020",
    title: "Bachelor's in Software Engineering",
    imageUrl: seDegreeImg,
    description: "I received my bachelor's in Software Engineering from Iowa State in 2020"
  };
  const mbaAdmittance: Achievement = {
    date: "10/20/2025",
    title: "MBA in Information Sciences",
    imageUrl: mbaAdmittanceImg,
    description: "I was admitted into UC Denver Anschutz for my MBA degree with a focus in either information sciences or AI. My expected graduation date is 2029. I currently have a 4.0 gpa"
  };
  const agenticAI: Achievement = {
    date: "10/20/2025",
    title: "AI Agentic Certification",
    imageUrl: agenticAIImg,
    description: "I completed Optum's AI agentic course with a perfect score. I utilized prompt engineering in order to create a health care claims approval agent using synthetic data"
  };
  const Achievements = [azure, seDegree, mbaAdmittance, agenticAI];
  return (
    <>
      <div className="bg-dark text-white py-5 text-center">
        <div className="container">
          <h1 className="display-5 fw-bold">Achievements</h1>
          <p className="lead">Things I'm proud of</p>
        </div>
      </div>

      <div className="container py-5">
        <div className="row">
          {Achievements.map((achievement) => (
            <div key={achievement.title} className="col-md-4 mb-4">
              <div className="card">
                <img className="card-img-top" src={achievement.imageUrl} alt={achievement.title} />
                <div className="card-body">
                  <h5 className="card-title">{achievement.title}</h5>
                  <p className="card-text">{achievement.description}</p>
                  <p className="card-text">{achievement.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer className="text-muted text-center py-4 border-top">
        <small>&copy; {new Date().getFullYear()} John Jack Young</small>
      </footer>
    </>
  );
}
