// import React from "react";
import { Candidat } from "./Candidat";
import "../index.css";
interface CandidatProps {
  candidate: Candidat;
}

const CandidateCard: React.FC<CandidatProps> = ({ candidate }) => {
  return (
    <div className="candidate-card">
      <div className="candidate-number">{candidate.number}</div>
      <img src={candidate.photo} alt=""/>
      <div className="candidate-name">{candidate.name}</div>
      <div>{candidate.batch}</div>
    </div>
  );
};

export default CandidateCard;
