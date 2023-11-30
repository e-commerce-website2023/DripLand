import React from 'react';

const ProfileUser = ({ userData }) => {
  return (
    <div>
      
      <img src={userData.bannerUrl} alt="Banner" />

     
      <img src={userData.image} alt="Profile" />

   
      <p>{userData.name}</p>
    </div>
  );
};

export default ProfileUser;
