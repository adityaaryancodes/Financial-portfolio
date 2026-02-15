import React from 'react';

const ProfileHeader = ({ data }) => {
  return (
    <header className="profile-header">
      <div className="header-content">
        <h2 className="company-name">{data.company}</h2>
        <h1 className="executive-name">{data.name}</h1>
        <p className="executive-role">{data.role}</p>
        <div className="header-meta">
          <span>{data.experience}</span>
          <span className="divider">•</span>
          <span>{data.location}</span>
        </div>
      </div>
    </header>
  );
};

export default ProfileHeader;