import React from 'react';

const AttendanceTable = () => {
  // Sample attendance data
  const attendanceData = [
    { date: '2023-10-01', subject: 'Mathematics', status: 'Present' },
    { date: '2023-10-02', subject: 'Physics', status: 'Absent' },
    { date: '2023-10-03', subject: 'Chemistry', status: 'Present' },
    { date: '2023-10-04', subject: 'Biology', status: 'Present' },
    { date: '2023-10-05', subject: 'English', status: 'Absent' },
  ];

  const getStatusStyle = (status) => {
    return {
      color: status === 'Present' ? 'green' : 'red',
      fontWeight: 'bold',
    };
  };

  return (
    <div className="attendance-table-container">
      <table className="attendance-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Subject</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {attendanceData.map((record, index) => (
            <tr key={index}>
              <td>{record.date}</td>
              <td>{record.subject}</td>
              <td style={getStatusStyle(record.status)}>{record.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttendanceTable;