import React, { Component } from 'react';

// stateless functional component
const Header = ({tagline}) => (
    <header className="top">
      <h1>Catch
      <span className="ofThe">
        <span className="of">Of</span>
        <span className="the">The</span>
      </span>
       Day</h1>
      <h3 className="tagline">{tagline}</h3>
    </header>
  );


export default Header;