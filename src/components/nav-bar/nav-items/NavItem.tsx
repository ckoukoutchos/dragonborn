import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavItem.module.css';

interface NavItemProps {
  exact?: boolean;
  children: any;
  link: string;
  menu?: any;
}

const navItem = (props: NavItemProps) => {
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
