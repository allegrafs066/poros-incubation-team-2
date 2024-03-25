import React from 'react';
import style from './Footer.module.css'; // Import CSS module for Footer styling

function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <p>© 2024 Your Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
