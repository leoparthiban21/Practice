import React from 'react';
import Navbar from '../components/Navbar';
import StudentCard from '../components/StudentCard';

const Dashboard = () => {
  const studentData = {
    name: "Alex Johnson",
    rollNumber: "CS-2023-042",
    department: "Computer Science",
    year: "3rd"
  };

  return (
    <div className="dashboard-container">
      <Navbar />
      <main className="main-content">
        <div className="welcome-section">
          <h1>Welcome, {studentData.name}!</h1>
          <p>Here are your current details for the active academic session.</p>
        </div>
        
        <div className="dashboard-cards">
          <StudentCard {...studentData} />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
