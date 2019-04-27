import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './TabBar.module.css';

interface Props {
  id: number;
}

const tabBar = (props: Props) => {
  return (
    <div className={classes.TabBar}>
      <div className={classes.TabItem}>
        <NavLink
          to={`/track/${props.id}/stats`}
          activeClassName={classes.active}
        >
          Stats
        </NavLink>
      </div>
      <div className={classes.TabItem}>
        <NavLink
          to={`/track/${props.id}/spells`}
          exact
          activeClassName={classes.active}
        >
          Spells
        </NavLink>
      </div>
      <div className={classes.TabItem}>
        <NavLink
          to={`/track/${props.id}/play`}
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
