import React from 'react';

const StudentCard = ({ name, rollNumber, department, year }) => {
  return (
    <div className="student-card">
      <div className="card-header">
        <h3>{name}</h3>
        <span className="badge">{year} Year</span>
      </div>
      <div className="card-body">
        <p><strong>Roll Number:</strong> {rollNumber}</p>
        <p><strong>Department:</strong> {department}</p>
      </div>
    </div>
  );
};

export default StudentCard;
