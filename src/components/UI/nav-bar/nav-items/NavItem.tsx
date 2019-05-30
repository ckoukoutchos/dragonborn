import React from 'react';
import { Link } from 'react-router-dom';

import classes from './NavItem.module.css';

interface NavItemProps {
  children: any;
  link: string;
}

const navItem = (props: NavItemProps) => {
  return (
    <div className={classes.NavItem}>
      <Link to={props.link}>{props.children}</Link>
    </div>
  );
};

export default navItem;
