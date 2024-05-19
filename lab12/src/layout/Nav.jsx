import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav.module.css';
import logo from '../images/logo.svg';
import calculation from '../images/calculation.svg';
import measuring from '../images/measuring.svg';

const Nav = () => {
  const [message, setMessage] = useState('');

  const handleRequestClick = () => {
    setMessage('Вы нажали Make request!');
  };

  const handleCalculationClick = () => {
    setMessage('Вы нажали Calculation!');
  };

  return (
    <div>
      <nav className={styles.container}>
        <img src={logo} alt="Logo" className={styles.logo} />
        <ul className={styles.links}>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/about-us">About us</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/faq">FAQ</Link></li>
          <li><Link to="/contacts">Contacts</Link></li>
        </ul>
        <div className={styles.buttons}>
          <button className={styles.request} onClick={handleRequestClick}>
            <img src={measuring} alt="Make request" /> Make request
          </button>
          <button className={styles.calculate} onClick={handleCalculationClick}>
            <img src={calculation} alt="Calculation" /> Calculation
          </button>
        </div>
      </nav>
      {message && <p className={styles.message}>{message}</p>}
    </div>
  );
};

export default Nav;
