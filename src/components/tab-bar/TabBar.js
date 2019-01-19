import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './TabBar.module.css';
const tabBar = props => {
  return (
    <div className={classes.TabBar}>
      <div className={classes.TabItem}>
        <NavLink
          to={`/character/${props.id}/stats`}
          activeClassName={classes.active}
        >
          Stats
        </NavLink>
      </div>
      <div className={classes.TabItem}>
        <NavLink
          to={`/character/${props.id}/spells`}
          exact
          activeClassName={classes.active}
        >
          Spells
        </NavLink>
      </div>
      <div className={classes.TabItem}>
        <NavLink
          to={`/character/${props.id}/play`}
          exact
          activeClassName={classes.active}
        >
          Play
        </NavLink>
      </div>
    </div>
  );
};

export default tabBar;
