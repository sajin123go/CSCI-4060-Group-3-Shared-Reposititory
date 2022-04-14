import React from 'react';

export default function Footer() {
  return (
    <footer
      id="footer"
      style={{ display: 'flex', justifyContent: 'space-between', position: 'absolute', left: 0, right: 0, bottom: 0, padding: 15 }}
    >
      <div>
        <h5>I'm a footer</h5>
        <p>Here is some info about the footer.</p>
      </div>
      <ul>
        <p>stuff</p>
        <p>stuff</p>
        <p>stuff</p>
        <p>stuff</p>
      </ul>
      <ul>
        <p>stuff</p>
        <p>stuff</p>
        <p>stuff</p>
        <p>stuff</p>
      </ul>
    </footer>
  );
}
