import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      onSearch(inputValue.trim());
      setInputValue(''); 
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Kullanıcı adı giriniz"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        style={{ padding: '10px', width: '70%', marginRight: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
      />
      <button type="submit" style={{ padding: '10px 20px', cursor: 'pointer', borderRadius: '4px' }}>
        Ara
      </button>
    </form>
  );
}

export default SearchBar;