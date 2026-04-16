import React, { useEffect, useState } from "react";
import API from "./Api";

function App() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ name: "", email: "" });

  // 👉 fetch users
  const getUsers = async () => {
    try {
      const res = await API.get("/users");
      setUsers(res.data);
    } catch (err) {
      console.log(err.response?.data || err.message);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  // 👉 add user
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/users/add", form);
      getUsers();
    } catch (err) {
      console.log(err.response?.data || err.message);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Add User</h2>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <button type="submit">Add</button>
      </form>

      <h2>Users</h2>
      {users.map((u) => (
        <div key={u._id}>
          {u.name} - {u.email}
        </div>
      ))}
    </div>
  );
}

export default App;