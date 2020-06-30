import React, { useTheme } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import MainPage from './MainPage';
import styles from './styles/LandingPageStyles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Project1 from './DijkstraAlg/Project1'



function LandingPage() {
    const classes = styles()

  return (
    // < classname={classes.outer}>
    <div className={classes.app}>
      
    <Navbar/>

    <main style={styles.main}>

    <Sidebar/>

    <MainPage/>
    </main>
    </div>

    // </div>
  );
}

export default LandingPage;