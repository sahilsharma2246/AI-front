import React from "react";

const Result = ({ data }) => {
  return (
    <div className="result-box">
      <h2>Score: {data.score}/100</h2>

      <h3>Skills Found:</h3>
      <ul>
        {data.skills.map((skill, i) => (
          <li key={i}>{skill}</li>
        ))}
      </ul>

      <h3>Preview:</h3>
      <p>{data.preview}</p>
    </div>
  );
};

export default Result;