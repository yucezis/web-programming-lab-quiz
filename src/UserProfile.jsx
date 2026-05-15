import React from 'react';

function UserProfile({ user }) {
  return (
    <div style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '8px', marginTop: '20px', backgroundColor: '#f9f9f9', color: '#333' }}>
      <img 
        src={user.avatar_url} 
        alt="Profil Resmi" 
        style={{ width: '150px', borderRadius: '50%', marginBottom: '15px' }} 
      />
      <h2 style={{ margin: '0' }}>{user.name || user.login}</h2>
      <p style={{ color: '#666' }}>@{user.login}</p>
      
      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px', backgroundColor: '#fff', padding: '15px', borderRadius: '8px' }}>
        <div>
          <h3 style={{ margin: '0' }}>{user.public_repos}</h3>
          <p style={{ margin: '5px 0 0 0', fontSize: '14px', color: '#666' }}>Repo</p>
        </div>
        <div>
          <h3 style={{ margin: '0' }}>{user.followers}</h3>
          <p style={{ margin: '5px 0 0 0', fontSize: '14px', color: '#666' }}>Takipçi</p>
        </div>
        <div>
          <h3 style={{ margin: '0' }}>{user.following}</h3>
          <p style={{ margin: '5px 0 0 0', fontSize: '14px', color: '#666' }}>Takip Edilen</p>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;