import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();
  return (
    <div className="notes">
      <div className="aboutme">
        <h1>ABOUT ME</h1>
        <a className="aboutme" href="https://github.com/Yusuf-Goren">
          https://github.com/Yusuf-Goren
        </a>
      </div>
      <h1 className="aboutme" onClick={() => navigate("/")}>
        NOTE LIST
      </h1>
    </div>
  );
}
