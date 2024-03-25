import React from 'react';
import style from './Footer.module.css'; // Import CSS module for Footer styling

function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <p>© 2024 Final Project Poros - Team 2 <br /> 
        <a href="https://github.com/allegrafs066">allegrafs066</a> | 
        <a href="https://github.com/Khairuramdhani">Khairuramdhani</a> | 
        <a href="https://github.com/riflnn">riflnn</a></p>
      </div>
    </footer>
  );
}

export default Footer;
