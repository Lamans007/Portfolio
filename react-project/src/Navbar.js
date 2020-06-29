import React, { useState } from 'react';
import styles from './styles/NavbarStyles'


function Navbar(props) {


  return (
    <div style={styles.navbar}>
        <p>Hi there <span style={styles.sp}>Pony</span> </p>
    </div>
  );
}

export default Navbar;
