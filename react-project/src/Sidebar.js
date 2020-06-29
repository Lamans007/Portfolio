import React, { useState } from 'react';
import useStyles from './styles/SidebarStyles';
import { NavLink } from 'react-router-dom';





function Sidebar() {

  const [size, setSize] = useState();
  const classes = useStyles()
 

  return (
    <aside className={classes.sideBar}>
        <p>My projects</p>
        <NavLink to='/project1'>Project1</NavLink>
    </aside>
  );
}







export default Sidebar;
