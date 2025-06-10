import React, { useEffect, useState } from "react";
import CandidateCard from "../components/CandidateCard";
import { Candidate } from "../interfaces/Candidate.interface";
import { searchGithub, searchGithubUser } from "../api/API";

const LOCAL_STORAGE_KEY = "potentialCandidates";

const CandidateSearch: React.FC = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  // Fetch a batch of users and then fetch their details
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const users = await searchGithub();
      // users is an array of { login, ... }
      const details = await Promise.all(
        users.map(async (user: { login: string }) => {
          const data = await searchGithubUser(user.login);
          // Map GitHub user data to your Candidate interface
          return {
            id: data.id,
            name: data.name || data.login,
            username: data.login,
            location: data.location,
            avatar: data.avatar_url,
            email: data.email,
            html_url: data.html_url,
            company: data.company,
          } as Candidate;
        })
      );
      setCandidates(details);
      setLoading(false);
    };
    fetchData();
  }, []);

  // Save accepted candidate to localStorage
  const saveCandidate = (candidate: Candidate) => {
  const saved: Candidate[] = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || "[]");
  // Prevent duplicates by id
  if (!saved.some((c) => c.id === candidate.id)) {
    saved.push(candidate);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(saved));
  }
};

  const handleAccept = () => {
    if (candidates[currentIndex]) {
      saveCandidate(candidates[currentIndex]);
    }
    setCurrentIndex((prev) => prev + 1);
  };

  const handleReject = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  if (loading) return <div>Loading...</div>;

  if (currentIndex >= candidates.length) {
    return <div>No more candidates are available.</div>;
  }

  return (
    <div>
      <CandidateCard candidate={candidates[currentIndex]} />
      <button onClick={handleAccept}>+</button>
      <button onClick={handleReject}>-</button>
    </div>
  );
};

export default CandidateSearch;