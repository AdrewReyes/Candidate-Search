import React, { useEffect, useState } from "react";
import CandidateCard from "../components/CandidateCard";
import { Candidate } from "../interfaces/Candidate.interface";

const LOCAL_STORAGE_KEY = "potentialCandidates";

const PotentialCandidates: React.FC = () => {
  const [potentialCandidates, setPotentialCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || "[]");
    setPotentialCandidates(saved);
  }, []);

  if (potentialCandidates.length === 0) {
    return <div>No candidates have been accepted.</div>;
  }

  return (
    <div>
      <h2>Potential Candidates</h2>
      {potentialCandidates.map((candidate: Candidate, idx: number) => (
        <CandidateCard key={candidate.id || idx} candidate={candidate} />
      ))}
    </div>
  );
};

export default PotentialCandidates;