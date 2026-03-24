import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("User logged out");
    navigate('/');
  };

  return (
    <nav className="navbar">
      <h2>Attendance System</h2>
      <button onClick={handleLogout} className="btn outline">Logout</button>
    </nav>
  );
};

export default Navbar;
