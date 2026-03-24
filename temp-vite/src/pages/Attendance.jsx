import React from 'react';
import AttendanceTable from '../components/AttendanceTable';

const Attendance = () => {
  return (
    <div className="attendance-container">
      <h1>Attendance Management</h1>
      <AttendanceTable />
    </div>
  );
};

export default Attendance;