import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';
import Title from './Title/Title';

const Header = () => (
   <div className={styles.header}>
      <NavLink to="/">
         <Title />
      </NavLink>
      <NavLink to="/favourites">
         <span className={styles.navLink}>Favourite</span>
      </NavLink>
   </div>
);

export default Header;
