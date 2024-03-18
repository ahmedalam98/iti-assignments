import React from "react";
import "./Table.css";

const Table = ({ allStudents }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {allStudents.length === 0 ? (
          <tr>
            <td colSpan="2">
              <h3>No students added yet, Please use the form</h3>
            </td>
          </tr>
        ) : (
          allStudents.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.age}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default Table;
