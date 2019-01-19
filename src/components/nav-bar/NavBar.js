import React from 'react';

import classes from './NavBar.module.css';
import NavItem from './nav-items/NavItem';

const navBar = props => {
  return (
    <header className={classes.NavBar}>
      <div>
        <NavItem link="/" exact>
          Dragonborn
        </NavItem>
      </div>
      <nav>
        <NavItem link="/create">Create</NavItem>
        <NavItem link="/track">Track</NavItem>
        <NavItem link="/guide">Guide</NavItem>
        <NavItem link="/logout" exact>
          LogOut
        </NavItem>
      </nav>
    </header>
  );
};

export default navBar;
