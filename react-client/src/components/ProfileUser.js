import React, { useState } from 'react';
import Button from '@mui/material/Button';

const ProfileUser = ({ userData }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(userData.description || '');

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    // Handle saving the edited description (you can add the logic here)
    // For now, let's just log the edited description
    console.log('Edited Description:', editedDescription);
    setIsEditing(false);
  };

 
  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
     
      {/* Circular profile image */}
      <div
        style={{
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          overflow: 'hidden',
          margin: '0 auto',
        }}
      >
        <img
          src={userData.image}
          alt="Profile"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

      {/* Username */}
      <p style={{ marginTop: '10px', fontSize: '1.5rem', fontWeight: 'bold' }}>{userData.name}</p>

      {/* Description Section */}
      {isEditing ? (
        // Edit mode with input field
        <div style={{ margin: '10px 0' }}>
          <input
            type="text"
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
          />
          <Button
            variant="contained"
            style={{ backgroundColor: '#6C5DD3', color: '#FFFFFF', marginRight: '10px' }}
            onClick={handleSaveClick}
          >
            Save
          </Button>
          
        </div>
      ) : (
        // Display mode with description and edit button
        <div style={{ margin: '10px 0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <p style={{ fontSize: '1rem', color: 'white', marginRight: '10px' }}>
            {editedDescription || 'Welcome to my profile'}
          </p>
          <Button
            variant="contained"
            style={{ backgroundColor: '#6C5DD3', color: '#FFFFFF' }}
            onClick={handleEditClick}
          >
            Edit
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProfileUser;
