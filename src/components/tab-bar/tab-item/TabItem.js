import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './TabItem.module.css';

const tabItem = props => {
  return (
    <div className={classes.TabItem}>
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

export default tabItem;
