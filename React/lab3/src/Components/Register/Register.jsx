import React, { useState, useEffect } from "react";
import "./Register.css";

const Register = ({ onAddStudent }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [validName, setValidName] = useState(null);
  const [validAge, setValidAge] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (submitted) {
      if (name.length >= 3) {
        setValidName(true);
      } else {
        setValidName(false);
      }

      if (age >= 15 && age <= 25) {
        setValidAge(true);
      } else {
        setValidAge(false);
      }
    }
  }, [name, age, submitted]);

  const addStudent = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (validName && validAge) {
      const id = Math.floor(Math.random() * 100) + 1;
      const student = { id, name, age };
      onAddStudent(student);
      setName("");
      setAge("");
    }
  };

  return (
    <form className="container" onSubmit={addStudent}>
      <div className="form">
        <div>
          <img src="/src/assets/logo.png" alt="logo" width="80" height="80" />
        </div>

        <div className="input-field">
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="off"
          />
          <label>Name</label>
        </div>

        {submitted && validName === false && (
          <p style={{ color: "#ff7270" }}>
            Name should be at least 3 characters long
          </p>
        )}

        <div className="input-field">
          <input
            type="number"
            name="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            autoComplete="off"
          />
          <label>Age</label>
        </div>

        {submitted && validAge === false && (
          <p style={{ color: "#ff7270" }}>Age should be between 15 and 25</p>
        )}

        <button type="submit">Add Student</button>
      </div>
    </form>
  );
};

export default Register;
