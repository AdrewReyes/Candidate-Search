import React from "react";
import { Candidate } from "../interfaces/Candidate.interface";

interface CandidateCardProps {
  candidate: Candidate;
}

const CandidateCard: React.FC<CandidateCardProps> = ({ candidate }) => {
  if (!candidate) return null;

  return (
    <div className="candidate-card" style={{ border: "1px solid #ccc", padding: 16, margin: 16, borderRadius: 8 }}>
      <img
        src={candidate.avatar}
        alt={`${candidate.name}'s avatar`}
        style={{ width: 100, height: 100, borderRadius: "50%" }}
      />
      <h3>{candidate.name}</h3>
      <p><strong>Username:</strong> {candidate.username}</p>
      <p><strong>Location:</strong> {candidate.location || "N/A"}</p>
      <p><strong>Email:</strong> {candidate.email || "N/A"}</p>
      <p><strong>Company:</strong> {candidate.company || "N/A"}</p>
      <p>
        <strong>Profile:</strong>{" "}
        <a href={candidate.html_url} target="_blank" rel="noopener noreferrer">
          {candidate.html_url}
        </a>
      </p>
    </div>
  );
};

export default CandidateCard;