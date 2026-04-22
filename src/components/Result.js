import React from "react";

const Result = ({ data }) => {
  if (!data) {
    return <h2>No Result Found</h2>;
  }

  return (
    <div className="result-box">
      <h2>Score: {data.score}/100</h2>

      <h3>Skills Found:</h3>
      <ul>
        {(data.skills || data.skillsFound || []).map((skill, i) => (
          <li key={i}>{skill}</li>
        ))}
      </ul>

      <h3>Suggestions:</h3>
      <ul>
        {(data.suggestions || []).map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <h3>Preview:</h3>
      <p>{data.preview}</p>
    </div>
  );
};

export default Result;