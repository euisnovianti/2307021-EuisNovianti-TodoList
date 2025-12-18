import React from 'react';

const Header = ({ nim, nama, onLogout, isLoggedIn }) => {
  return (
    <header style={{ background: '#008080', color: 'white', padding: '1rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>Praktikum Web - {nim}</h1>
        {isLoggedIn && (
          <div>
            <span style={{ marginRight: '15px' }}>Hi, {nama}</span>
            <button onClick={onLogout} className="btn-blue">Logout</button>
          </div>
        )}
      </div>
    </header>
  );
};
export default Header;