import React, { useState } from "react";
import "./App.css";
import Register from "./Components/Register/Register";
import Table from "./Components/Table/Table";

function App() {
  const [students, setStudents] = useState([]);

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  return (
    <div className="parent">
      <Register onAddStudent={addStudent} />
      <Table allStudents={students} />
    </div>
  );
}

export default App;
