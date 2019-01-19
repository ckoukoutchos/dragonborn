import React from 'react';

import classes from './NavBar.module.css';
import NavItem from './nav-items/NavItem';

const navBar = props => {
  return (
    <header className={classes.NavBar}>
      <div>
        <NavItem link="/" exact>
          DragonBorn
        </NavItem>
      </div>
      <nav>
        <NavItem link="/create">Create</NavItem>
        <NavItem link="/character">Track</NavItem>
        <NavItem link="/logout" exact>
          LogOut
        </NavItem>
      </nav>
    </header>
  );
};

export default navBar;
