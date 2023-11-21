// StatusDropdown.js

import React, { useState } from 'react';
// import './StatusDropdown.css'; // Import the CSS file for styling

const StatusDropdown = () => {
  const [selectedStatus, setSelectedStatus] = useState('');

  const handleStatusChange = (event) => {
    setSelectedStatus(event.target.value);
  };

  return (
    <div className={`status-dropdown ${selectedStatus === 'done' ? 'Done' : selectedStatus === 'not-done' ? 'Not Done' : 'Progress'}`}>
      <label htmlFor="status">Status:</label>
      <select id="status" value={selectedStatus} onChange={handleStatusChange}>
        <option value="progress">In Progress</option>
        <option value="done">Done</option>
        <option value="not-started">Not Started Yet</option>
      </select>
      {selectedStatus && (
        <div className={`status-display ${selectedStatus === 'done' ? 'done' : 'not-done'}`}>
          <p>Status: {selectedStatus === 'done' ? 'Done' : 'Not Done'}</p>
        </div>
      )}
    </div>
  );
};

export default StatusDropdown;
