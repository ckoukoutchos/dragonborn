import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavItem.module.css';

const navItem = props => {
  const attatchMenu = props.menu
    ? [classes.NavItem, classes.Menu].join(' ')
    : classes.NavItem;

  return (
    <div className={attatchMenu}>
      <NavLink
        to={props.link}
        exact={props.exact}
        activeClassName={classes.active}
      >
        {props.children}
      </NavLink>
    </div>
  );
};

export default navItem;
