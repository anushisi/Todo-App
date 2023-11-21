// TaskDropdown.js
import React, { useState } from 'react';

const TaskDropdown = () => {
  const [selectedLevel, setSelectedLevel] = useState(''); // State to store the selected level

  const handleLevelChange = (event) => {
    setSelectedLevel(event.target.value);
  };

  return (
    <div>
      <label htmlFor="status">Select Task Level:</label>
      <select id="status" onChange={handleLevelChange} style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}>
        <option value="">Select Level</option>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>

      {/* Display the selected level dynamically */}
      {selectedLevel && (
        <div>
          <p>Task Level:</p>
          <p>{selectedLevel}</p>
        </div>
      )}
    </div>
  );
}

export default TaskDropdown;
