import React from "react";
import { Candidat } from "./components/Candidat";
import CandidatProps from "./components/CandidatProps";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Pemilihan Calon Presiden</h1>
      <div className="candidates-container">
        {Candidat.map((candidate) => ( 
          <CandidatProps key={candidate.id} candidate={candidate} />
        ))}
      </div>
    </div>
  );
};

export default App;
