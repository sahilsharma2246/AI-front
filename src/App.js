import React, { useState } from "react";
import Upload from "./components/Upload";
import Result from "./components/Result";
import "./App.css";

function App() {
  const [result, setResult] = useState(null);

  return (
    <div className="app">
      <h1>AI Resume Analyzer</h1>
      <Upload setResult={setResult} />
      {result && <Result data={result} />}
    </div>
  );
}

export default App;