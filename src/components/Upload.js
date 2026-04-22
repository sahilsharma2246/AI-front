import React, { useState } from "react";
import axios from "axios";

const Upload = ({ setResult }) => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!file) return alert("Select a file");

    const formData = new FormData();
    formData.append("resume", file);

    try {
      setLoading(true);
      const res = await axios.post(
        "http://localhost:5000/api/resume/upload",
        formData
      );

      setResult(res.data);
    } catch (err) {
      alert("Error uploading file");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="upload-box">
      <input
        type="file"
        accept=".pdf,image/*"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <button onClick={handleUpload}>
        {loading ? "Analyzing..." : "Upload Resume"}
      </button>
    </div>
  );
};

export default Upload;