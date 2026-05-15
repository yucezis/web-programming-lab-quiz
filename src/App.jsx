import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import UserProfile from './UserProfile';

function App() {
  const [searchQuery, setSearchQuery] = useState('');      
  const [userData, setUserData] = useState(null);          
  const [isLoading, setIsLoading] = useState(false);       
  const [error, setError] = useState('');                  

  useEffect(() => {
    if (!searchQuery) return;

    const fetchUserData = async () => {
      setIsLoading(true);
      setError('');
      setUserData(null);

      try {
        const response = await fetch(`https://api.github.com/users/${searchQuery}`);
        
        if (!response.ok) {
          throw new Error('Kullanıcı bulunamadı!');
        }

        const data = await response.json();
        setUserData(data); 
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, [searchQuery]);

  return (
    <div style={{ maxWidth: '500px', margin: '50px auto', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h2>GitHub Profil Bulucu</h2>
      
      <SearchBar onSearch={setSearchQuery} />

      {isLoading && <p>Yükleniyor...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {userData && !isLoading && <UserProfile user={userData} />}
    </div>
  );
}

export default App;